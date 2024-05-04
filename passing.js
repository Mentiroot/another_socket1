
const crypto = require('crypto');

// Function to encrypt a message using AES-128-CBC
function aesEncrypt(message, key, iv) {
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
  let encrypted = cipher.update(message, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Function to decrypt an encrypted message using AES-128-CBC
function aesDecrypt(encryptedMessage, key, iv) {
  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  let decrypted = decipher.update(encryptedMessage, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Example usage
const message = "Hello, world!";
const key  = Buffer.from('b5d7444fdbcbd8936422a24b37b2d0da', 'hex'); // Generate a random 128-bit key
const iv = crypto.randomBytes(16); // Generate a random 128-bit IV (Initialization Vector)
const encryptedMessage = aesEncrypt(message, key, iv);
console.log("Encrypted:", encryptedMessage);
const decryptedMessage = aesDecrypt(encryptedMessage, key, iv);
console.log("Decrypted:", decryptedMessage);

module.exports = {
    EC:aesEncrypt,
    DC:aesDecrypt
}
