import admin from 'firebase-admin';

const serviceAccount = require("./rstcomteste-firebase-adminsdk-awr27-854cd4d59d.json");

export const authAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
