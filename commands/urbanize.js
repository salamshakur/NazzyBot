const snekfetch = require('snekfetch');
const Discord = require('discord.js');
const trim = (str, max) => (str.length > max) ? `${str.slice(0, max - 3).replace(/[\[\]']+/g,'')}...` : str.replace(/[\[\]']+/g,'');

module.exports = {
	name: 'urb',
	description: 'I\'ll look up a word for you using Urban Dictionary! Just type !urbanize and a word.',
	async execute(message, args) {

		if(!args.length) {
			return message.channel.send('You need to supply a search term!');
		}

		const { body } = await snekfetch.get('https://api.urbandictionary.com/v0/define').query({ term: args.join(' ') });
		const [ answer ] = body.list;

		if(!body.list.length) {
			return message.channel.send(`No results found for **${args.join(' ')}**`);
		}
		else{
			const embed = new Discord.RichEmbed()
				.setColor('#2966c6')
				.setTitle(answer.word)
				.setURL(answer.permalink)
				.addField('Definition', trim(answer.definition, 1024))
				.addField('Example', trim(answer.example, 1024))
				.addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);

			message.channel.send(embed);
		}

	},
};
