import crypto from "crypto";

export const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex")
