const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports = {
	name: 'role',
	description: 'I\'ll tell you what permissions a tagged person has!',
	async execute(message, args) {

			if(!args.length){
				return message.channel.send('Tag a person please!');
			}

			// Get member that was tagged
			const member = message.mentions.members.first();

			// Create an embed message
			const embed = new Discord.RichEmbed()
				.setTitle("User - " + member) // add user here
				.setColor("#0x00AE86")

				// TODO: FIX ERROR, MAX 25 FIELDS, HAVE 27!
				.addField("Can create invites?", member.hasPermission("CREATE_INSTANT_INVITE").toString())
				.addField("Can kick members?", member.hasPermission("KICK_MEMBERS").toString())
				.addField("Can ban members?", member.hasPermission("BAN_MEMBERS").toString())
				.addField("Is admin?", member.hasPermission("ADMINISTRATOR").toString())
				.addField("Can manage channels?", member.hasPermission("MANAGE_CHANNELS").toString())
				.addField("Can manage servers?", member.hasPermission("MANAGE_GUILD").toString())
				.addField("Can add reactions?", member.hasPermission("ADD_REACTIONS").toString())
				.addField("Can read messages?", member.hasPermission("READ_MESSAGES").toString())
				.addField("Can send messages?", member.hasPermission("SEND_MESSAGES").toString())
				.addField("Can send Text-to-speech messages?", member.hasPermission("SEND_TTS_MESSAGES").toString())
				.addField("Can manage messages?", member.hasPermission("MANAGE_MESSAGES").toString())
				.addField("Can embed links?", member.hasPermission("EMBED_LINKS").toString())
				.addField("Can attach files?", member.hasPermission("ATTACH_FILES").toString())
				.addField("Can read message history?", member.hasPermission("READ_MESSAGE_HISTORY").toString())
				.addField("Can mention everyone?", member.hasPermission("MENTION_EVERYONE").toString())
				.addField("Can manage external emojis?", member.hasPermission("EXTERNAL_EMOJIS").toString())
				.addField("Can connect to a voice channel?", member.hasPermission("CONNECT").toString())
				.addField("Can speak in a voice channel?", member.hasPermission("SPEAK").toString())
				.addField("Can mute members?", member.hasPermission("MUTE_MEMBERS").toString())
				.addField("Can deafen members?", member.hasPermission("DEAFEN_MEMBERS").toString())
				.addField("Can move members?", member.hasPermission("MOVE_MEMBERS").toString())
				.addField("Can use voice-activity-detection?", member.hasPermission("USE_VAD").toString())
				.addField("Can change nickname?", member.hasPermission("CHANGE_NICKNAME").toString())
				//.addField("Can manage nickname?", member.hasPermission("MANAGE_NICKNAME").toString())
				//.addField("Can manage permissions & roles?", member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS").toString())
				//.addField("Can manage webhooks?", member.hasPermission("MANAGE_WEBHOOKS").toString())
				.addField("Can manage emojis?", member.hasPermission("MANAGE_EMOJIS").toString());

			// Send the embed message
	 		message.channel.send(embed);
		},
	};
