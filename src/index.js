const Discord = require("discord.js");
const config = require("./config.json")
const client = new Discord.Client();
const runCommands = require('./commands/index')

client.on('ready', function(){
    runCommands(client)
    console.log(' Panalitos_Botten is running')
})
client.login(config.BOT_TOKEN)