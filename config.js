
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA72VTY7iRhTH71Jb0OBvY6SWxhiMbTCYpsFAlEVhl03hz64qA+4RN4g066xmk9whUm6TC2SOEBm6My1lMulIUbwql+33fv9X7//8AeQFpmiMatD7AEqCj5ChZsnqEoEe6FdRhAhogxAyCHpAGm/qp3gWr5XphvCprhyOs8Lvn9PdWYGlgCSPLbbkyYfp5g5c2qCsdikOvhEwSibWqnZm4Ww8h4+uKgpnx+YFGooJHjmR0op5uj1l6/LpdAcuTUSICc7jYblHGSIwHaPag5i8DV+Ycu5IsauBr6wCfiiH2+58v9Sco1MquBvb3v7RFcWyZfFvxGcnlBQ4Sfriee30vXO6s6m/31kKhI8riXMYj41ljlqKGd/wKY5zFNohyhlm9ZvrPpqt01wWRrET1etaaIWy45wsIXv0y1ln6q0Vrz+0thY8m8u3gUvbXW75qtQpZ/uTf5icO7GizfqKSeoRK3Nud19WhbHBB999De6Rl15J/k3d6UCfWKM83Q8PZmd/onWu2DDLcd3fYtHS6GJtmJPg7K18+jb8oNvijNIvovH9hHeN0+GUH0ZiYvULkpR0i/TkQcloaxbomy/4kFXkW5TZozdHUJrGjxLKpM7mnpKJmvL8ToE2qiIYrPuJfDBtBw2kmI4r37IESjl4JNsVmx61tNhKpfeASUuNx77IL4aREJ/urooSVNsh6PGXNiAoxpQRyHCRX/c4pQ1geFyggCB2LS/QhvzcGEt7YbjuCmahRivvMDOSajJHnaSA5n3H6uwEP1rI+h1og5IUAaIUhRamrCC1iyiFMaKg9931pBrRBGUFQw4Om/CCqPKczAtaV31P3532kFFYlu9yxEAbRKTIXAR6jFSoDa4fKGZf6g/Mrt6V1aFkdhVeNRSTV8WupAx0nWskZrekDzhDlMGsBD1elRVN1WSte2n/NxyGYcjmUDF1mVf4gSKKvK7pqqmqsjAQB6r0f3GI8pDTxMHQ7Jsqr/OmYPKKNpA4QdNE0+TUb3IonHD5vg1ydGY3PzVdIPJtEGFC2TKvyrSA4YvZXh7CICiqnC3qPDCaBSKg92obMYbzmDbKqhySYI+PyGh0gF4EU4r+bDxEUPii5XmYGkXY+GH6oIwmY1cHDXsT6C+16X2lOun1LUFWVEmTOUnkZYkXeur7Zr8NctiEApY+ndr2508//fD508dff/vx599/+djU6Jm+SRYiBnFKm0N2vEFNqTX0VEMOlqORPo91I264XtS+uPnmlgnt+EFCnLOjOgu3M7Ufx/5qA6vOJtomiW8vT4vtg+7UYyG5+0oQ0AOtWjLq0s+PeF4npNQRw5ErOMbZT6dBq++lxznt0GU3HpGSO4TqqnSShWCdhYFowLHKbbRpPyK0K9b6uGV2zWxFyaCxfhuE6IgD9DrZWhRsKKprf7/BbsqXZTZVZ0SbuiXKoCu650VgTRJ5YqTkgCsOw7SKbT40jLlXjEzJHVaLs7ij3fk9ejzkjDFndt7rtzlznXPp8/8FP08AfL2NMLqO6+cj+adzvXE33cdd2q9CPM//v5mh/YXq8bkzroMFqpcH72kxxmnqj8hRsIStY2LTHWbLkxFgVoJLY4MyhSwqSAZ6AOYhKa5tQ4qqaWc7j4pvJDN02+7Pb8JTSJn+xSJfc798e8sjRWlBum9sfK9tRa3p91ovywWD7MVxQG8u99QFlz8AZ+HXriQJAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "923710512987", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly Groups", // can be set to inboxonly/allchats/true/false
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
