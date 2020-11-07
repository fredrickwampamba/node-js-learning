const punycode = require('punycode');
console.log("Decode String: "+punycode.decode("fredrick-the-best"));
console.log("Encode String: "+punycode.encode("®º©"));
console.log("toASCII String: "+punycode.toASCII("áéëÓ"));
console.log("toUnicode String: "+punycode.toUnicode("xn--nca1ayai"));