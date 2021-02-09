const Discord = require("discord.js");
const config = require("./config.json")
const client = new Discord.Client();




client.login(config.BOT_TOKEN)
client.on ('ready', () => {
    var generalChannel = client.channels.cache.get["773283233285537842", "748688277346844850", "748691155004424203"]
    console.log(' Panalitos_Botten is running')
})
client.on('message', message => {
    if (message.content === 'Hola') {
        message.channel.send('Hola, buenos dias')
    }
    if (message.content === 'Buenos dias') {
        message.channel.send('Buenos dias para tí también')
    }
    if (message.content === 'hola') {
        message.channel.send('Hola, buenos dias')
    }
    if (message.content === 'Buenos días') {
        message.channel.send('Buenos dias para tí también')
    }
    if (message.content === '!invitación'){
        message.channel.send('Puedes invitar a gente con : https://discord.gg/s8S3WbyGWX')
        console.log('Invitación enviada')
    }
    if (message.content === '!invitacion'){
        message.channel.send('Puedes invitar a gente con : https://discord.gg/s8S3WbyGWX')
        console.log('Invitación enviada')
    }
});

