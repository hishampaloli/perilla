const evnCheckers = async () => {
  try {
    if (!process.env.JWT_KEY) {
      throw new Error("JWT_KEY must be defined");
    }
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL must be defined");
    }
    if (!process.env.NATS_CLIENT_ID) {
      throw new Error("MONGO_URI must be defined");
    }

    if (!process.env.TWILIO_ACC_SID) {
      throw new Error("TWILIO_ACC_SID must be defined");
    }

    if (!process.env.TWILIO_TOKEN_AUTH) {
      throw new Error("TWILIO_TOKEN_AUTH must be defined");
    }

    if (!process.env.TWILIO_SERVICE_SID) {
      throw new Error("TWILIO_SERVICE_SID must be defined");
    }

    if (!process.env.EMAIL_STR) {
      throw new Error("EMAIL_STR must be defined");
    }

    if (!process.env.PASSWORD_STR) {
      throw new Error("PASSWORD_STR must be defined");
    }

    if (!process.env.BUCKET_NAME) {
      throw new Error("BUCKET_NAME must be defined");
    }

    if (!process.env.ACCESS_KEY_ID) {
      throw new Error("ACCESS_KEY_ID must be defined");
    }

    if (!process.env.PRIVATE_ACCESS_KEY_ID) {
      throw new Error("PRIVATE_ACCESS_KEY_ID must be defined");
    }

    if (!process.env.REGION_KEY_ID) {
      throw new Error("REGION_KEY_ID must be defined");
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

export { evnCheckers };
