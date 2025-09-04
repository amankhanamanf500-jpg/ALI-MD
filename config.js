
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~hETMsPVK7nwRBa4NzqcM"ALI-MD~H4sIAAAAAAAAA71VS66jRhTdS01ttfkaY+lJjQFjwNjY+B9lUIYCl83PRWGMW28HkXqcUU+SPUTKbrKB9BIi/N5Ld9SdzosUhVFRFPeec+89p96BNMMFslEN+u9ATvAFUtQsaZ0j0AeDMgwRAW0QQApBH5wm3o49igOTSyBvYfvitIYoPW4KQ9gnZH+UwqM69jqrYCQ8gMc2yMt9jP1vBHQYv6OPxHCY+N2DU7uxdDuW+mIYDLjueRua2rZDHFsPmOHsATw2ESEmOI30/IASRGBso9qFmLwOfmTrckut4MooGb8zW58WM7pV5s4liruqfbap2hFH01ua8tvXwZ9fuLO9DliT1bPYk2G4b41H0woLxUXx9Jsud6p1cB4xYr19gl/gKEWBGaCUYlq/uu7JUJ9Lx3Lkcol/NvxrrKDJ1T37LYsdrqrjVnEq4Yit5W5jvg64hVUkJJk+XBnMKsgtn3LGRh2I1e2qhAfueBUWw5NdaqvrX4C75GVWTv+m7o4qcD14w5s5x+6O2UUufWVmwXFMOlOUjVu9I716SW3tYud18IXJqJsggcVhrri3lW84orEhC14bWQGnTE4pXF/XkwhNNswn+JCW5FsozTAvOlE84w1zKdVnaersh+PRTSvoPGP25t5dDXZdAY+Dlh8bvt3tGKdBuj/MSv581ijT8gN9dhY2Qb5aLW5MK5FPeRnNHu6MTqg2A9BnH9uAoAgXlECKs/S+J8ttAIOLh3yC6L28YHPQt8wS81a1UI5MpEmj4jJYnMMo69RlJG6JFJ/iDbFvE/8BtEFOMh8VBQpGuKAZqR1UFDBCBeh/d+9UQ5qgJKPIwgHoA5njJZYRWU7uSW+LN9UB0gLm+ZsUUdAGIckSB4E+JSVqg/sPqiYyjKbpIi+wnMwyqqKyPYHneUEQBJ4VGorJU9IFTlBBYZKDPiuJXVkUWJZ9bP9nODiGV0VRlRSuy3UVZiALGqsNhz1W6gmD/wtHV+qxrKRqvCArvC6JPNfrDnSGVxVGExiW+Qcc4uP3bZCiK33SUzMFPNsGISYFXaZlHmcweBHby0fo+1mZUq9OfbVZIAL6n20jSnEaFQ2zMoXEP+ALUhseoB/CuEB/Dh4iKHjh8mymahY0ejA2lsI6Ix002JtAX9SmL3xZnfh+ihO7kiCLjMCzosByfeFts98GKWxCgZEymZjmxw8//fDxw/tff/vx599/ed/U6Bl9kyxAFOK4aJpsuVpdFCN9KklCb2kYih4paqSAT2xf1PyklnHRWfsnYl0tyfKczsQ82+vVFpadbbg7ndbmsvJ2C8Wqbe708JUgoA/yKclPXitVw4nU6ox1tmVbG6erHR1WuA45N2LqFue5cM545fRaFfVhrGZi0KvMabByZMM9cpWT0lsrsnWXcBfdSSulemiyBeiCffR5sqpCgYRva2nHo27Zmm7nVpBa3VhYWtU50+fXscmwx1qJPHsFRe/MuIY2gC7vqrqxb928w2mb3lCpJLMym3Ene2Kw5BA9+czd5+Ln+wU/OwC+v4YY3e36uSX/1Ncn3M30MY/tz0I8+//feOjAk1w2teza91C9PLo3z8ZxvDbIhRtxO2uIh46eLCvVxzQHj40M8hjSMCMJ6AOYBiS7jw3JymaczTTMvpFMVUxz8GywMSyo8kkiX1EdIz+dckmWj2BxAH3Az+UdLzfzXit57lFIXxQHlOZxKhE8/gELGxmpJAkAAA==, // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "923710512987", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
