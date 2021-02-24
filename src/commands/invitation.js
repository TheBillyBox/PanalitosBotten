const allowedChannelsIds = [
    '748688277346844850',   //General
    '780804123049590826',   //Compromiso
    '773283233285537842'    //Chat de prueba
]

async function invitation (msg) {
    try {
        if (allowedChannelsIds.includes(msg.channel.id) && msg.content.includes('!invitacion')){
            msg.channel.send('Puedes invitar a gente con : https://discord.gg/zdF7WeWDdJ')
            console.log('Invitación enviada')
        }
        if (allowedChannelsIds.includes(msg.channel.id) && msg.content.includes('!invitation')){
            msg.channel.send('Puedes invitar a gente con : https://discord.gg/zdF7WeWDdJ')
            console.log('Invitación enviada')
        }
        if (allowedChannelsIds.includes(msg.channel.id) && msg.content.includes('!invitación')){
            msg.channel.send('Puedes invitar a gente con : https://discord.gg/zdF7WeWDdJ')
            console.log('Invitación enviada')
        }

    } catch (e) {
        console.log (e)
    }
}
module.exports = invitation