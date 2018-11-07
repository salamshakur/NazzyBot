module.exports = {
	name: 'who',
	description: 'Ask me who and I\'ll tell the channel\'s admins, certain roles, ect!',
	async execute(message, args) {

    if(!args.length) {
      return message.channel.send('You need to supply a type term!');
    }

    if(args[0] === 'admin') {
			var myRole = message.guild.roles.find(role => role.name === 'Admin #2');
			var member = message.guild.roles.get(myRole.id).members;
			//var find = message.guild.roles.find('name', 'Admin #2');
			console.log(member);
		}
	},
};
