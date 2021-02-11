const invitation = require('./invitation')
const twitchAds = require('./twitchAds')
const antiSPAM = require('./antiSPAM')

function runCommands(client) {
    client.on ('message', async (msg) => {
        if (msg.content.includes('twitch.tv')){
            await antiSPAM(msg)
        }
        if (msg.content.includes('youtube.com')){
            await antiSPAM(msg)
        }
        if (msg.content.includes('!invitacion')){
            await invitation(msg)
        }
        if (msg.content.includes('!invitation')){
            await invitation(msg)
        }
        if (msg.content.includes('!invitación')){
            await invitation(msg)
        }
        if (msg.content.includes('!kelito')){
            await twitchAds(msg)
        }
        if (msg.content.includes('!tobal')){
            await twitchAds(msg)
        }
        if (msg.content.includes('!javiten')){
            await twitchAds(msg)
        }
        if (msg.content.includes('!frutyy')){
            await twitchAds(msg)
        }
        if (msg.content.includes('!albita')){
            await twitchAds(msg)
        }
        if (msg.content.includes('!pablo')){
            await twitchAds(msg)
        }
    })
}



module.exports = runCommands