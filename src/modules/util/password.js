const crypto = require("crypto");

function generateTempPassword(length = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  const bytes = crypto.randomBytes(length);

  return Array.from(bytes)
    .map((b) => chars[b % chars.length])
    .join("");
}

module.exports = { generateTempPassword };