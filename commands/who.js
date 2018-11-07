module.exports = {
	name: 'who',
	description: 'Ask me who and I\'ll tell the channel\'s admins, certain roles, ect!',
	async execute(message, args) {

    if(!args.length) {
      return message.channel.send('You need to supply a type term!');
    }

    if(args[0] === 'admin') {
			var chan = message.channel.id;
      var mem = chan.members;

      console.log(mem.id);

		}
	},
};
