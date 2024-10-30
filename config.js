const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/abhihola/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/GGBjhgrxiAS1Xf5shqiGXH";
global.website=process.env.GURL || "https://chat.whatsapp.com/GGBjhgrxiAS1Xf5shqiGXH" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/4z80q7.jpeg" || "https://files.catbox.moe/4z80q7.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© powered by septorch" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349047943737";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/4z80q7.jpeg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_49_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY2LFxuICAgICAgICA2LFxuICAgICAgICAxMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzksXG4gICAgICAgIDkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUzLFxuICAgICAgICA0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicHJvL3Q0Vnd4V09PSnhmbGRRdUhVdnRkcDZURTljcEVQRGkxbE9IKy9BND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDQ3OTQzNzM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0NTYxOEQ5MzQwNDRBRUUyRTkzMTg3MTA4NzM4NjI5Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzAzMzIxNTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSE55dlhvUUhSTGl1U25uVi15eElTZ1wiLFxuICBcInBob25lSWRcIjogXCJiODFjZTBkNy02MjlkLTRiZWYtYmU3NS0yYTkyZGIzMmY3NjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMTU2LFxuICAgICAgNzcsXG4gICAgICA2MyxcbiAgICAgIDk5LFxuICAgICAgMTcwLFxuICAgICAgMjQzLFxuICAgICAgNzIsXG4gICAgICAxNTcsXG4gICAgICAxMjMsXG4gICAgICAyMDIsXG4gICAgICA4NSxcbiAgICAgIDkyLFxuICAgICAgNTcsXG4gICAgICAxNDksXG4gICAgICAyMDcsXG4gICAgICAxMzAsXG4gICAgICAyMjAsXG4gICAgICAzOSxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAxNixcbiAgICAgIDIyNCxcbiAgICAgIDI3LFxuICAgICAgMTc2LFxuICAgICAgMjUyLFxuICAgICAgNTQsXG4gICAgICAyNCxcbiAgICAgIDU2LFxuICAgICAgNjIsXG4gICAgICA4NyxcbiAgICAgIDE5NyxcbiAgICAgIDEwLFxuICAgICAgMjksXG4gICAgICA1MixcbiAgICAgIDE3MSxcbiAgICAgIDEzMSxcbiAgICAgIDcyLFxuICAgICAgOSxcbiAgICAgIDc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFSVFFLU1lDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ3OTQzNzM3OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2VwdG9yY2hcIixcbiAgICBcImxpZFwiOiBcIjQxNTExMDA5OTcyMzc1OjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lIYTBZc0dFUEtMaTdrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS04vMkFUYUoxYm5RcUNiaEpFdUU5MUZlMDY0eTJJMThhQ0t3dWdaMXZpbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYdlpNbWVrRCs4SlpHS2E2VVE2cWlGalRjWWRKN2lMTzlraXByREk5SnBKakEwL2g3eHlmUHJLQlVscTdvYmhIcHNYWmlXVVVDcFNSTGF1dFNMOStBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMKzlQZmpIRUxzbjI2UXoxdnBpRkJLekdvWDdjbVc1WmZqanAwZmlIR2tqd1RpUEIzemE4Y1hUbkZWQkQ3emZlRks5K0R3eUlWUkVpMytwZ0xEWWpqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQ3OTQzNzM3OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDMzMjE1MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJtUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm1QLmpzb24iOiAie1wia2V5RGF0YVwiOlwidjR6N1NnUXgyc3hLZndYQ3pUcWN5T0c4OVA3aGpmSFlnT2g4WDNISzJ1UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjM1MDIwMDMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAzMzA5ODQ0NDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "..",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "powered by septorch" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SEPTORCH",
  ownername:process.env.OWNER_NAME|| "SEPTORCH",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SEPTORCH"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
