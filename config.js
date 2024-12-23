const fs = require('fs')
const chalk = require('chalk')

// BOT-INFO
global.botName = "PAKAYA BUG BOT"
global.ownerName = "WHITE TIGER"
global.botNumber = "94753335072"
global.devNumber = ["94753335072"]

// ADMIN-PANEL
global.locID = "1" // Jangan Diganti
global.eggID = "19" // Jangan Diganti
global.domain = "https://yilziii.com" // Ganti Domain Lu
global.pltcc = "ptla_WEp3dkCRowRoe3yo4GLuMPZIHZ64s7TH5r0jMslGel8" // Isi Apikey Plta Lu
global.pltaa = "ptlc_qRclxwAGkjinhYqEDNRnEdaP2vVOC8KzRzjLPDRBfCQ" // Isi Apikey Pltc Lu
global.nama_host = "DeltaChanXx Store" // Ganti Nama Store Atau nama Host Lu

// BOT-SETTING
global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages
global.Auto_ReadStatusWA = true // auto read status wa

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})