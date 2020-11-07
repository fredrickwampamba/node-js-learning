const crypto = require('crypto');
const secretOrMessage = "i am the one you love";
const hash = crypto.createHmac('sha256', secretOrMessage)
				.update("Welcome to this paltform")
				.digest("hex");
console.log("using Hmac:  "+hash);
//cipher class
const cipher = crypto.createCipher('aes192',"thisIsMyPassword");
//the above line has thisismypassword as the encryption key, not the password
var encrypted = cipher.update("hello there","utf-8","hex");
encrypted += cipher.final('hex');
console.log("using cipher:    "+encrypted);
//decipher class
const decipher = crypto.createDecipher('aes192', 'thisIsMyPassword');
var unencrypted = decipher.update(encrypted,"hex","utf-8");
unencrypted += decipher.final("utf-8");
console.log("using decipher:    "+unencrypted);