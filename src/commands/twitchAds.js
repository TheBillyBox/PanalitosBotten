const allowedChannelsIds = [
    '748691155004424203',   //SPAM
    '773283233285537842'    //Chat de prueba
]

async function twitchAds (msg) {
    try {
        if (allowedChannelsIds.includes(msg.channel.id) && msg.content.includes('!kelito')){
            msg.delete({timeout: 5, reason: 'Lo pone el bot no te preocupes'})
            msg.channel.send('@everyone Kelito esta en directo en twitch!! https://twitch.tv/angelsc_01')
            console.log('Kelito esta en directo')
        }
        if (allowedChannelsIds.includes(msg.channel.id) && msg.content.includes('!tobal')){
            msg.delete({timeout: 5, reason: 'Lo pone el bot no te preocupes'})
            msg.channel.send('@everyone Tobal esta en directo en twitch!! https://twitch.tv/tobalito')
            console.log('Tobalito esta en directo')
        }
        if (allowedChannelsIds.includes(msg.channel.id) && msg.content.includes('!javiten')){
            msg.delete({timeout: 5, reason: 'Lo pone el bot no te preocupes'})
            msg.channel.send('@everyone Javiten esta en directo en twitch!! https://twitch.tv/javiten51')
            console.log('Javiten esta en directo')
        }
        if (allowedChannelsIds.includes(msg.channel.id) && msg.content.includes('!frutyy')){
            msg.delete({timeout: 5, reason: 'Lo pone el bot no te preocupes'})
            msg.channel.send('@everyone Frutyy esta en directo en twitch!! https://twitch.tv/fruttyy_')
            console.log('Frutyy esta en directo')
        }
        if (allowedChannelsIds.includes(msg.channel.id) && msg.content.includes('!albita')){
            msg.delete({timeout: 5, reason: 'Lo pone el bot no te preocupes'})
            msg.channel.send('@everyone Albita esta en directo en twitch!! https://twitch.tv/akalbuchi')
            console.log('Albita esta en directo')
        }
        if (allowedChannelsIds.includes(msg.channel.id) && msg.content.includes('!pablo')){
            msg.delete({timeout: 5, reason: 'Lo pone el bot no te preocupes'})
            msg.channel.send('@everyone Pablo esta en directo en twitch!! https://twitch.tv/s0led_')
            console.log('Pablo directo')
        }

    } catch (e) {
        console.log (e)
    }
}
module.exports = twitchAds