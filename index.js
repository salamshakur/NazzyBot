const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');

const bot = new Discord.Client();

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
	const command = require('./commands/' + file);
	bot.commands.set(command.name, command);
}

bot.on('ready', () => {
	console.log(`${bot.user.username} is online!`);
	bot.user.setActivity('on Atom.io!');
});

bot.on('message', async message => {
	if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (!bot.commands.has(command)){
    return;
  }
  else{
    try{
      bot.commands.get(command).execute(message, args);
    }
    catch(error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
  }
});

bot.login(config.token);
