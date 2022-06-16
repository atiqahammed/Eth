const Discord = require('discord.js');

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log(`Discord bot is ready for proceed`);
});

client.on(`messageCreate`, (message) => {
    if(message && message.content) {
        console.log(message.content);
        if(message.content == 'Hi') {
            message.reply({
                content: 'Hello'
            });
        }
    }
});

client.login(`OTg2ODcyNjI4NDM2NDE4NTkx.G63bKK.DHeybGywo8L_bLeKpOJLDVcq0VKoQW1BQm4zhM`);