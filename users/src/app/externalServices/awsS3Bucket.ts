import multer from "multer";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { generateFileName } from "./generatFileName";
import { fileBuffer } from "./resiseImageSharp";
import { GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import fs from "fs";

const region = process.env.REGION_KEY_ID!;
const accessKeyId = process.env.ACCESS_KEY_ID!;
const secretAccessKey = process.env.PRIVATE_ACCESS_KEY_ID!;
const bucketName = process.env.BUCKET_NAME!;

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export const uploadImageToBucket = async (
  fileBuffer_code: any,
  fileType: any
) => {
  const fileName = generateFileName();

  const uploadParams: {
    Bucket: string;
    Body: any;
    Key: string;
    ContentType: any;
  } = {
    Bucket: bucketName,
    Body: fileBuffer_code,
    Key: fileName,
    ContentType: fileType,
  };

  const data = await s3Client.send(new PutObjectCommand(uploadParams));
  return { data, fileName };
};

export const getImageUrlFromBucket = async (key: string) => {
  let imageUrl = await getSignedUrl(
    s3Client,
    new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    }),
    { expiresIn: 360000 }
  );

  return imageUrl;
};

export const deleteImageFromBucket = async (key: string) => {
  const deleteParams = {
    Bucket: bucketName,
    Key: key,
  };

  const data = await s3Client.send(new DeleteObjectCommand(deleteParams));
  return data;
};

export const downloadFileFromBucket = async (key: string) => {
  console.log(key);
  const downloadParams = { Bucket: bucketName, Key: key };
  let x = await s3Client.send(new GetObjectCommand(downloadParams));

  console.log(x.Body?.transformToString());
  return x.Body?.transformToString();
};
