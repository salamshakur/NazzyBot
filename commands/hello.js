module.exports = {
	name: 'hello',
	description: 'Hey!',
	execute(message) {
		message.channel.send('Why hello there ' + message.author.username + '!');
	},
};
