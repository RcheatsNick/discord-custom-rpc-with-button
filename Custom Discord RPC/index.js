var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Codare'a Gelin",
assets : {
large_image : "image",
large_text : "Discordda Gezinmek Mode On" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Codare'da Geziniyor" , url : "https://discord.com/invite/codare"},{label : "GİFT ZONE #BOTLİST'te Geziyor",url : "https://discord.com/invite/vGGuP3v9wm"}]
}
})
})
client.login({ clientId : "826510421556854856" }).catch(console.error);