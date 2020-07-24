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
	bot.user.setActivity('with COVID-19!');

});

// When a message is sent...
bot.on('message', async message => {

	// If the messsage doesn't contain a prefix, is from another bot, or is a DM message, ignore
	if (!message.content.startsWith('!')) return;
	if (message.author.bot) return;
	if (message.channel.type === 'dm') return;

	// Parse the message and converts the first argument into lowercase
	const args = message.content.slice('!'.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	// If command doesn't exist in my collection, ignore
	if (!bot.commands.has(command)) 
	{
		message.channel.send('That command does not exist, sorry bud.');
    	return;
	}
	else 
	{
		try 
		{
			// Otherwise, run the execute function inside command module
			bot.commands.get(command).execute(message, args, bot);
			// message.channel.send(bot.commands.get(command).description);
		}
		catch(error) 
		{
			// Catch exceptions thrown
			message.channel.send('There was an error trying to execute that command!');
			console.error(error);
		}
	}
});

// Login bot using special token
bot.login(process.env.BOT_TOKEN);
