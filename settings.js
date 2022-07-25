//═══════════════════════════════════════════════════════//
//Copyright Under GNU Licence 3.0
//2022 All Rights Reserved.
//Auther: Hector Paradox
//Developer: Marshall Paradox
//QueenAva Public Edition 
// Version 1.0
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94701282176']
global.premium = ['94701282176']
global.ownernomer = '94701282176'
global.ownername = 'Marshall Paradox'
global.botname = 'QueenAva'
global.footer = 'Qᴜᴇᴇɴ ᴀᴠᴀ - ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ'
global.cap = '*Genarated By QueenAva*'
global.ig = 'https://github.com/MarshallParadox'
global.region = 'Sri Lanka, Western Province, Colombo'
global.sc = 'https://github.com/MarshallParadox'
global.myweb = 'https://chat.whatsapp.com/BnmKcWq0Zg20xBE4hmM8sG'
global.packname = 'QueenAva MD Bot'
global.author = 'Marshall Paradox'
global.autobio = 'true'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Success!',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'Please Wait...',
    error: 'Something Went Wrong,It Might Be Vedio Size!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 100,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
