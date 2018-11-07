const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports = {
	name: 'role',
	description: 'I\'ll tell you what permissions a tagged person has!',
	async execute(message, args) {

			if(!args.length){
				return message.channel.send('Tag a person please!');
			}

			var member = args[0];
			console.log(member);

			//var members = message.guild.members;

			//members.forEach((member) => {
				//var id = member.id;

				//var perms = member.permissions;
				//var name = member.user.username;




			//})

		},
	};
