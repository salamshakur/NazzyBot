const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports = {
	name: 'who',
	description: 'Ask me who and I\'ll tell the channel\'s admins, roles, ect!',
	async execute(message, args) {

			// Get the server ID that the message was sent on
			//var id = message.guild.id;

			var members = message.guild.members;
			//console.log(members);

			members.forEach((member) => {
				var id = member.id;

				var perms = member.permissions;
				var name = member.user.username;

				if(perms.has("KICK_MEMBERS")){
					console.log(name + " can kick members!");
				}else{
					console.log(name + "cannot kick!");
				}


			})

		},
	};
