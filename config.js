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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "255711384026";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255711384026";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_30_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQyLFxuICAgICAgICA0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTg5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgMTAyLFxuICAgICAgICA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDkzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NixcbiAgICAgICAgMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQzLFxuICAgICAgICA1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDY2LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDczLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU5LFxuICAgICAgICA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImR0YmVXd2wzczhCdFpKaGZpSzU2OGdlcFRLeUNWc3MxemUwQ2JvUnlhdEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRhVTdKOVlLUzQtOEsyMVNQRXk5aUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGVlZDRkMzktNGM3Zi00NzA4LTgwOTMtOTJiMjBjNWZkNmQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgOTYsXG4gICAgICA4NSxcbiAgICAgIDIzNixcbiAgICAgIDIzMixcbiAgICAgIDIxOSxcbiAgICAgIDIxOCxcbiAgICAgIDEyNyxcbiAgICAgIDIyOSxcbiAgICAgIDE2LFxuICAgICAgMTU5LFxuICAgICAgNjcsXG4gICAgICAxMjUsXG4gICAgICAyMDcsXG4gICAgICAxNzMsXG4gICAgICAxMTMsXG4gICAgICAxNTEsXG4gICAgICAxNTEsXG4gICAgICA4NyxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDE5LFxuICAgICAgNDEsXG4gICAgICAxNTksXG4gICAgICA1NyxcbiAgICAgIDIwNCxcbiAgICAgIDE0MixcbiAgICAgIDExMyxcbiAgICAgIDE4OSxcbiAgICAgIDAsXG4gICAgICAxMjksXG4gICAgICAzMCxcbiAgICAgIDEwNyxcbiAgICAgIDE4MCxcbiAgICAgIDE5NixcbiAgICAgIDg2LFxuICAgICAgMTE5LFxuICAgICAgMTYsXG4gICAgICAxNDgsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkdFNVBXVzlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTcxMTM4NDAyNjo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDgwNjU0NjU1ODU4Nzg6NzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1hUMDkwQkVKRGVrYmdHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUdTg0WUdsRW54cHVOZTJ0R1J3dzJ4bTNkME90cmg0ckRrN1JzeEtDU2dNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIko1UkFrMjBuRnVkMWlUb2xBYWFOQWVUbG9ISUdJc1VtMHRudE9CTTdpcTVadDYwY0ZHMnBUS2xYa1kraTMxNDFvY3RQOFl5S04yUU1OVXFuRmZMM0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjIyc2hrWUdNZUt2eXIwZ2kzeVJGd1BkNVkzUVdKeWh4UUxRK1EzanZzL1dyeXV1eXp1MzdJRmNqYmR5Rkw0RkdvMDlTNmtBZ3AyTHl6dS9qWmI4ckRnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTcxMTM4NDAyNjo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MzQzODI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQVNBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBU0EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuMWthRlJ6MmtwUGlaWWlZdEptMjZPK0o3QzNWQWd0RDJNS3Njc1NleUZrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDg0MTE4NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "erick.loverboy",
  packname: process.env.PACK_NAME || "benright",
  botname : process.env.BOT_NAME  || "Benright-XMD",
  ownername:process.env.OWNER_NAME|| "Benright-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Benright"  ).toUpperCase(),



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
