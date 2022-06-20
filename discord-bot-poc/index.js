const Discord = require('discord.js');
require('dotenv').config();

// const schedule = require('node-schedule');

// const job = schedule.scheduleJob('5 * * * * * *', function(){
//   console.log('The answer to life, the universe, and everything!');
// });

// var cron = require('node-cron');

// cron.schedule('* * * * *', () => {
//   console.log('running a task every minute');
// });

// const interval = setInterval(function() {
//     // method to be executed;
//     console.log('every sed')
//   }, 5000);
 
//  clearInterval(interval); // thanks @Luca D'Amico

let guild;

let APP_STARTED = false;


var CronJob = require('cron').CronJob;
var job = new CronJob(
	'*/20 * * * * *',
	function() {

        if(APP_STARTED) {
            client.channels.fetch("986561819994886154").then(channel => {
                channel.send("Change Atiq's role")
            })
        }
        

        // const guild = client.guilds.cache.get('<ID>');
        // if(guild) {
        //     console.log(guild.members)
        //     // guild.memmbers.cache.fetch().forEach(member => {

        //     //     console.log(member)
        //     // });
        // }
        
	},
	null,
	true,
	// 'America/Los_Angeles'
);
// Use this if the 4th param is default value(false)
// job.start()

console.log('here');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS, 
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        // Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
    partials: [
        'MESSAGE', 
        'CHANNEL', 
        'REACTION', 
        // 'GUILD_MEMBER'
    ]
});

// need to manage the initial setup here
// database connection and other setup related task need to completed in the ready callback method.
client.on('ready', async () => {
    console.log(`Discord bot is ready for proceed`);

    // user id 984003862966960188

    // guild id or server id 986561819525144636

    // const test = client.guilds; //client.guilds.keyArray()
    // console.log(test);

    var server = client.guilds.cache.get('986561819525144636')//.members.cache.get('984003862966960188').;
    // console.log(server);
    // console.log('fatching members');
    // const members = await server.members.fetch();
    // console.log(members)

    // let test = client.channels;
    // console.log(test);
    // // console.log(channel);

    // client.channels.fetch("986561819994886154").then(channel => {
    //     channel.send("your message here")
    // })

    APP_STARTED = true;


    // client.members.fetch('984003862966960188').then((user) => {
    //     console.log(user);
    // }).catch(console.error);

    // const guild = await client.guilds.fetch('986561819525144636')

    // console.log(guild.members.cache.get('984003862966960188'));

    // console.log(server.members.guild.members.guild.members.cache.get('984003862966960188'));
    // let member = client.users//.cache.get('984003862966960188')
    // console.log('member', member)
    // const member = client//.guild//.members.cache.get('984003862966960188');
    // console.log(member);
});

client.on(`messageCreate`, (message) => {

    guild = message.guild;
    if(message.author.bot && message.content != 'Hello') {
        console.log('this is bot message');
        if(message.guild.members.cache) {
            const member = message.guild.members.cache.get('984003862966960188');
            if(member) {
                console.log(member)
                member.roles.remove('987237248955207700');
            }
        }
        
        return;
    };

    console.log('userId', message.author.id);

    const member = message.guild.members.cache.get(message.author.id);

    console.log(message.author.id);
    console.log(member);
    if(message && message.content) {
        console.log(message.content);
        if(message.content == 'Hi') {

            member.roles.add('987237248955207700');
            message.reply({
                content: 'Hello'
            });
        }
    }
});

client.on(`messageReactionAdd`, (reaction, user) => {
    console.log('tetsss');
    //https://discord.com/channels/986561819525144636/986561819994886154/987237765672472607

    console.log('userId',user.id);

    const { name } = reaction.emoji;

    if(name == '🍎') {
        console.log('got apple');
    }


    console.log(name);
});

client.login(process.env.DISCORD_BOT_TOKEN);