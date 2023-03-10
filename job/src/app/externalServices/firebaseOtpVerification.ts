import admin from "firebase-admin";
const serviceAccount = require("./service.json");

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

export const verifyIdToken = async (code: string) => {
  const result = await admin
    .auth()
    .verifyIdToken(code)
    .then((decodedToken) => {
      const user = decodedToken;
      console.log(user);

      return { email: user.email, image: user.picture };
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
  return result;
};
