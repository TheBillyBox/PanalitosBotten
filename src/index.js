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
    //Twitch
    if (message.content === '!kelito' && message.channel.id === '748691155004424203'){
        message.channel.send('@everyone Kelito esta en directo en twitch!! https://twitch.tv/angelsc_01')
        console.log('Kelito directo')
    } 
    if (message.content === '!tobal' && message.channel.id === '748691155004424203'){
        message.channel.send('@everyone Tobalito esta en directo en twitch!! https://twitch.tv/tobalito')
        console.log('Tobal directo')
    }
    if (message.content === '!javiten' && message.channel.id === '748691155004424203'){
        message.channel.send('@everyone Tobalito esta en directo en twitch!! https://twitch.tv/javiten51')
        console.log('Javiten directo')
    }
    if (message.content === '!frutyy' && message.channel.id === '748691155004424203'){
        message.channel.send('@everyone Tobalito esta en directo en twitch!! https://twitch.tv/fruttyy_')
        console.log('Frutty directo')
    }
    if (message.content === '!albita' && message.channel.id === '748691155004424203'){
        message.channel.send('@everyone Tobalito esta en directo en twitch!! https://twitch.tv/akalbuchi')
        console.log('Albita directo')
    }
    if (message.content === '!pablo' && message.channel.id === '748691155004424203'){
        message.channel.send('@everyone Tobalito esta en directo en twitch!! https://twitch.tv/soled_')
        console.log('Pablo directo')
    }
    //Restricted
    //if (message.content.includes('twitch.tv') && message.channel.id === "748688277346844850"){
    //    message.delete
    //}
    
});

