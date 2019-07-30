const snekfetch = require('snekfetch');

module.exports = {
	name: 'send',
	description: 'Ask me to send you anything! For example: Say !send cats',
	async execute(message, args) {

		if(!args.length) {
			return message.channel.send('You need to supply a send item!');
		}

		if(args[0] === 'cats') {
			const { body } = await snekfetch.get('https://aws.random.cat/meow');
			message.channel.send(body.file);
		}

		if(args[0] === 'dogs'){
			const { body } = await snekfetch.get('https://dog.ceo/api/breeds/image/random');
			message.channel.send(body.message);
		}

	},
};
