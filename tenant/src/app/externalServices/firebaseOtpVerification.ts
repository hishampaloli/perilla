import admin from "firebase-admin";
const serviceAccount = require("./service.json");

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

export const verifiyFirbaseOtp = async (code: string, number: number) => {
  const result = await admin
    .auth()
    .verifyIdToken(code)
    .then((decodedToken) => {
      const phone = decodedToken.firebase.identities.phone[0];
      console.log(phone + "firnumber");
      console.log(`+91${number.toString()}`);
      if (phone === `+91${number.toString()}`) {
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
  return result;
};
