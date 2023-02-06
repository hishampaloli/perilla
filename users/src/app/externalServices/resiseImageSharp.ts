import sharp from "sharp";

export async function fileBuffer(file: any) {
  const sharpCode = await sharp(file.buffer)
    .resize({ height: 1920, width: 1080, fit: "contain" })
    .toBuffer();

  return sharpCode;
}
