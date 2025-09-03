
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~hETMsPVK7nwRBa4NzqcMALI-MD~H4sIAAAAAAAAA62VS66jRhSG91JTWzEv87B0peZpwNjGl+tnlEEZCrt4uyhs49bdQaQeZ5RJsodI2U02kCwh4j7SibrTfSOFUVHAOd9/6vyH96AocY0mqAWj96Ai+Awp6pa0rRAYAa2JY0RAH0SQQjACvflyW9+rTRqteLLxtk0LG4pMG9vz0wQbVeLdVLd1T3K6vQOPfVA1+wyHXwh4Tk57ii6lI3rXRC/h6nCSZsNlkniccgxUvNeGvSNhsiQL78BjFxFigouDWR1RjgjMJqj1ISZvw5cdJcVwwFdrtGO2Wbx2mMDjdmMZzjflpTYEoZhN14l9LZi34Y/9q5D0Fvxxup2izRVtRfXiXaeawjLtmZuvjpwdLEmborX6jF/jQ4EiJ0IFxbR9c91zO7dTHIlWIVz4lbBcTtCCimdhqqvcyk0WElrlMb3qSyt9G/h8L12lLB6z2sLfztP5XKd2zzgGCzveyMniTMIHcsOLpZb8A9wnr72S/pe6c9PdUVhY0L6tiw1rpYawv+y4UJknrDbNDoqzcqdVZCDTLt+G39ynQxtDJvWDuSW36l61Bodyv3YH6MTGiVwhzZmqNn7Ith/xIW3Ilyjb3IhugXgZxrN9zxTltdLbmIMFMdrZJNjr+aGJvJmMLlmPuUHiVTfDUdcLcSaaTdqk/sahg8mxhoo4cWm1aE4PvNEz1LsnRSlqnQiM2Mc+IOiAa0ogxWXR7cl9AKNzgEKC6FNxgVetepzJeEGxvB4notuOdccTt/k5ajV5BXX3vjZ3/FLyQ/UO9EFFyhDVNYpsXNOStFNU1/CAajD69umcOskE5SVFLo7ACCgcL7HMkOUUWXpXf3M5QlrDqvqmQBT0QUzKfIrAiJIG9cHTBwYv6JxlCoogKzxjMiYna4xuKNqQsUxLUzqB+XPSB5yjmsK8AiNWGooKIykM/9j/fzg4kxdE05B0y7B0XZUEQdA1zZQ1k1EkaSh/hUP4vzgkWTE5XTNkXtEZXbcYTRR5hWMVhWP1IW99hUN8/K4PCnSlz27qeoDn+iDGpKbLoqmyEkavVnt9CMOwbAoatEWodwtEwIj9uI0oxcWh7pQ1BSThEZ+R3ukAoxhmNfqr7RBB0auWl1Gql1HnBlNyt0NPt0DH3gX6pDYj/tPqZM8HMxQlQRkyAs8OBZYb8e+6/T4oYBcK2Ops5jh//PjT93/8+OHX3374+fdfPnQ1eqHvkkWIQpzVYAR01zPaurZNfxwI4XI8Vp2Dqh9U8FHtq5df3FIP1mFK3KsrucF0MHNOk/VqC5vBNt6l6dpZXoLdg+q2Ey69+0wQMAI+LPeFkvtbfRsdNxGKNG1LDN+LLwuL3Qu6pzCuothXaq16+D6YjSeJGOr6dhc4zWCW1ZJd3U+kFZ+HZ6Gmm/t0NePUw12XLUJnHKK/J0sWmT+tU/bgCSuclEY0Jvv4lofcBUI87M08I87VK2nT3tz2T3Hcu7r7LDhKk1pcUYZGHjrcjEMoO3AlI8+P4xMRjcXzlHmactnL3wW/TAD8dBtj9DSsX47ka+f6zN11H/PY/1uIl+n/LxNUCySfLdxJGwaoXSb+LZjgLFuPyZmzuZ1rYWtq5suLHmJagcfOBlUGaVySHIwALCJSPrUNKZuunZ0iLr+QTFcdR3sRnsGaqh8t8jnXsc9v+aSsbFgfwQjw98qOV7p+b9WqCiikr44Dandpugwe/wS0YcqVIgkAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "92310512987", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
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
