module.exports = {
	name: 'hello',
	description: 'Hey!',
	execute(message) {
		message.channel.send('Wazzup ' + message.author.username + '?');
	},
};
