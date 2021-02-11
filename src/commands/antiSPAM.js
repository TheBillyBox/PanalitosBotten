const allowedChannelsIds = [
    '748688277346844850',   //General
    '780804123049590826',   //Compromiso
    '773283233285537842'    //Chat de prueba
]

async function AntiSPAM (msg) {
    try {
        if (allowedChannelsIds.includes(msg.channel.id) && msg.content.includes('twitch.tv')){
            msg.delete({timeout: 1, reason: 'Please post spam in #「📩」spam'})
            msg.channel.send(msg.author.toString() + ' En este canal no está permitido hacer SPAM, si quieres hacer spam de twitch, porfavor dirigete al canal: ' + msg.guild.channels.cache.get('748691155004424203').toString())
            console.log('delete message SPAM TWITCH')
        }
        if (allowedChannelsIds.includes(msg.channel.id) && msg.content.includes('youtube.com')){
            msg.delete({timeout: 1, reason: 'Please post spam in #「📩」spam'})
        msg.channel.send(msg.author.toString() + ' En este canal no está permitido hacer SPAM, si quieres escuchar una canción, porfavor dirigete al canal: ' + msg.guild.channels.cache.get('748688277489582155').toString())
        console.log('delete message SPAM YOUTUBE')
        }

    } catch (e) {
        console.log (e)
    }
}
module.exports = AntiSPAM