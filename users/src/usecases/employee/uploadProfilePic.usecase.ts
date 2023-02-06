import {
  deleteImageFromBucket,
  downloadFileFromBucket,
  getImageUrlFromBucket,
  uploadImageToBucket,
} from "../../app/externalServices/awsS3Bucket";
import { fileBuffer } from "../../app/externalServices/resiseImageSharp";
import { Employee } from "../../entities/Employee";
import { DepenteniciesData } from "../../entities/interfaces";

export const uploadProfilePic_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = async (
    company: string,
    employeeId: string,
    file: any,
    key: string = "sdfsfsdf"
  ) => {
    const fileBuffer_code = await fileBuffer(file);
    await deleteImageFromBucket(key);
    const { fileName } = await uploadImageToBucket(
      fileBuffer_code,
      file.mimetype
    );
    const imageUrl = await getImageUrlFromBucket(fileName);

    return employeeRepository.editEmployee(company, employeeId, {
      image: imageUrl,
      bucketKey: fileName,
    });
  };
  return {
    execute,
  };
};
