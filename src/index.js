const Discord = require("discord.js");
const config = require("./config.json")
const client = new Discord.Client();




client.login(config.BOT_TOKEN)
client.on ('ready', () => {
    var generalChannel = client.channels.cache.get["773283233285537842", "748688277346844850", "748691155004424203"]
    console.log(' Panalitos_Botten is running')
})
client.on('message', message => {
    if (message.content === '!invitación'){
        message.channel.send('Puedes invitar a gente con : https://discord.gg/s8S3WbyGWX')
        console.log('Invitación enviada')
    }
    if (message.content === '!invitacion'){
        message.channel.send('Puedes invitar a gente con : https://discord.gg/s8S3WbyGWX')
        console.log('Invitación enviada')
    }
    //Twitch
    if (message.content === '!kelito' && message.channel.id === '748691155004424203'){
        message.delete({timeout: 1, reason: 'GAY'})
        message.channel.send('@everyone Kelito esta en directo en twitch!! https://twitch.tv/angelsc_01')
        console.log('Kelito directo')
    } 
    if (message.content === '!tobal' && message.channel.id === '748691155004424203'){
        message.delete({timeout: 1, reason: 'GAY'})
        message.channel.send('@everyone Tobalito esta en directo en twitch!! https://twitch.tv/tobalito')
        console.log('Tobal directo')
    }
    if (message.content === '!javiten' && message.channel.id === '748691155004424203'){
        message.delete({timeout: 1, reason: 'GAY'})
        message.channel.send('@everyone Javiten51 esta en directo en twitch!! https://twitch.tv/javiten51')
        console.log('Javiten directo')
    }
    if (message.content === '!frutyy' && message.channel.id === '748691155004424203'){
        message.delete({timeout: 1, reason: 'GAY'})
        message.channel.send('@everyone Frutyy esta en directo en twitch!! https://twitch.tv/fruttyy_')
        console.log('Frutty directo')
    }
    if (message.content === '!albita' && message.channel.id === '748691155004424203'){
        message.delete({timeout: 1, reason: 'GAY'})
        message.channel.send('@everyone Albita esta en directo en twitch!! https://twitch.tv/akalbuchi')
        console.log('Albita directo')
    }
    if (message.content === '!pablo' && message.channel.id === '748691155004424203'){
        message.delete({timeout: 1, reason: 'GAY'})
        message.channel.send('@everyone Pablo esta en directo en twitch!! https://twitch.tv/s0led_')
        console.log('Pablo directo')
    }
    if (message.content.includes('twitch.tv') && message.channel.id === "748688277346844850"){
        message.delete({timeout: 1, reason: 'Please post spam in #「📩」spam'})
        message.channel.send('En este canal no está permitido el SPAM')
        console.log('delete message SPAM TWITCH')
    }
    
});