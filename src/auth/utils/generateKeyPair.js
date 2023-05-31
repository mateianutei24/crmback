const crypto = require("crypto");
const fs = require("fs");

function generateKeyPairLocal() {
  const keyPair = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  });

  fs.writeFileSync(__dirname + "/../id.rsa.pub.pem", keyPair.publicKey);
  fs.writeFileSync(__dirname + "/../id.rsa.piv.pem", keyPair.privateKey);
}

generateKeyPairLocal();
