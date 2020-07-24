// const Discord = require('discord.js');
// //const bot = new Discord.Client();

// module.exports = {
// 	name: 'stats',
// 	description: 'Only my creator can use this command!',
// 	async execute(message, args, bot) {

// 		if(message.author.id != config.ownerID) {
//       return message.channel.send('Sorry! This command is reserve for my creator only!');
//     }

//     console.log('\nServers:');
//     console.log('***********\n');

//     // Shows me every server my bot is in
//     bot.guilds.forEach((guild) => 
//     {
//       console.log(`\n${guild.name}\n`);

//       // Shows me every channel on each server my bot is in
//       guild.channels.forEach((channel) => 
//       {
//         console.log(`\tChannel: ${channel.name} - ${channel.type}`);
//       })

//       console.log('\n\t Member:');
//       console.log('\t**********\n');

//       // Shows me every member on each server
//       guild.members.forEach((member) => 
//       {
//         console.log(`\t\t${member.user.username} - ${member.id}`);
//       })

//     })

// 	},
// };
