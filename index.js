// Imported libraries
const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');

// Create the bot (client)
const bot = new Discord.Client();

// Create a collection of my command js files
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Import each command file and setting them
for(const file of commandFiles) {
	const command = require('./commands/' + file);
	bot.commands.set(command.name, command);
}

// Starts the bot...
bot.on('ready', () => {

	// Let me know if bot is connected and shows it's activity
	console.log(`${bot.user.username} is online!`);
	bot.user.setActivity('on Atom.io!');

	/*console.log('\nServers:');
	console.log('***********\n');

	// Shows me every server my bot is in
	bot.guilds.forEach((guild) => {
		console.log(`\n${guild.name}\n`);

		// Shows me every channel on each server my bot is in
		guild.channels.forEach((channel) => {
			console.log(`\tChannel: ${channel.name} - ${channel.type}`);
		})

		console.log('\n\t Member:');
		console.log('\t**********\n');

		// Shows me every member on each server
		guild.members.forEach((member) => {
			console.log(`\t\t${member.user.username} - ${member.id}`);
		})

	}) */

});

// When a message is sent...
bot.on('message', async message => {

	// If the messsage doesn't contain a prefix, is from another bot, or is a DM message, ignore
	if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;

	// Parse the message and converts the first argument into lowercase
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	// If command doesn't exist in my collection, ignore
	if (!bot.commands.has(command)){
    return;
  }
  else{
    try{

			// Otherwise, run the execute function inside command module
      bot.commands.get(command).execute(message, args);
    }
    catch(error) {

			// Catch exceptions thrown
			message.reply('there was an error trying to execute that command!');
      console.error(error);
    }
  }
});

// Login bot using special token
bot.login(config.token);
