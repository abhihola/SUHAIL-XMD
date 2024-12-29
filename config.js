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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_04_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MixcbiAgICAgICAgODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICAxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExLFxuICAgICAgICA4MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDU5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjExLFxuICAgICAgICA0MSxcbiAgICAgICAgNSxcbiAgICAgICAgNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDU5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDU5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICA5OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgxLFxuICAgICAgICA3LFxuICAgICAgICAxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA1LFxuICAgICAgICA1NyxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgOCxcbiAgICAgICAgMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI4LFxuICAgICAgICA2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQyLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVQalRlUnpiS2RPNXFPWEM3RVRFYjNwL2I0M25iMDBja0E1TGxjYzl1K1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzMTAzNzE0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjIzQzREOEU1REFCRDFGNzNENDc3MURBNjIyODBENENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNzgwMjMxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVtNkQ1dHkwUzZDSDE4eElzYVc1ckFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjYwOGU0YWMtMTY1MC00ODBlLWFlZDEtNWYxNjM0YzgzZGQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgMTQ4LFxuICAgICAgMTQsXG4gICAgICA5NyxcbiAgICAgIDEzLFxuICAgICAgMTI4LFxuICAgICAgMjM1LFxuICAgICAgNjcsXG4gICAgICAxNTgsXG4gICAgICA1LFxuICAgICAgNTIsXG4gICAgICA0NCxcbiAgICAgIDM2LFxuICAgICAgMTEyLFxuICAgICAgMjU1LFxuICAgICAgMTE1LFxuICAgICAgMjE5LFxuICAgICAgMTA0LFxuICAgICAgMTI2LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgMjE5LFxuICAgICAgMjM2LFxuICAgICAgMTUxLFxuICAgICAgMTI3LFxuICAgICAgMTU5LFxuICAgICAgNyxcbiAgICAgIDI0MyxcbiAgICAgIDg3LFxuICAgICAgNDMsXG4gICAgICAxMjksXG4gICAgICAyMzcsXG4gICAgICAyMTQsXG4gICAgICA5NixcbiAgICAgIDI1MCxcbiAgICAgIDEwMSxcbiAgICAgIDEwNixcbiAgICAgIDEwLFxuICAgICAgODIsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUJRU1RWNDVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzEwMzcxNDA6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NzI0MDgzNDg5NjA1NTozMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJL3V4L01GRUlDOTQ3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVzU2JvYncyK3VjU0NaNU9wS2Z2K3NLQjNxdS94YnZtR3p4WUNDcldmU2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiejhFZEpoQi9pVGV4dkMzRlNmTUJyRFU5Rk5vMENYRWV1NjRybFdMM3JSZXBDVkplYTVkTlZXWXNHVnBzWElnOUVzeUlCV29KS0JhUmp3V0V1ZXJnQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidXFVb1M4SG82QWZkY2pPeEVWSjNaRFVKc29KZm5PM2RNcXJIaWhvblFpamVYUmRRbVUzdzg5SG5QdFJuOGprNVBzRlZPYkhtNHhudjd1WTdyMEhOZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzMTAzNzE0MDozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTc4MDIyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUwyc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDJzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQjdpemllZUwwdEd4ZGhqV1psTHpQUzF0ZDd4WDl5VWltcE9SdkZPMmRkdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTg0NTI3MTE4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMxNzgwMTk2MDQwXCJ9Igp9"  // PUT your SESSION_ID 


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
