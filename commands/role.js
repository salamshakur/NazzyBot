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
			var member = message.mentions.members.first();

			// Get that members permissions
			var has_invite = member.hasPermission("CREATE_INSTANT_INVITE");
			var has_kick = member.hasPermission("KICK_MEMBERS");
			var has_ban = member.hasPermission("BAN_MEMBERS");
			var has_admin = member.hasPermission("ADMINISTRATOR");
			var has_manageChannel = member.hasPermission("MANAGE_CHANNELS");
 			var has_manageServer = member.hasPermission("MANAGE_GUILD");
			var has_addreaction = member.hasPermission("ADD_REACTIONS");
			var has_readmessages = member.hasPermission("READ_MESSAGES");
			var has_sendmessages = member.hasPermission("SEND_MESSAGES");
			var has_sendTTSmessages = member.hasPermission("SEND_TTS_MESSAGES");
			var has_manageMessages = member.hasPermission("MANAGE_MESSAGES");
			var has_embedLinks = member.hasPermission("EMBED_LINKS");
			var has_attachFiles = member.hasPermission("ATTACH_FILES");
			var has_readMessageHistory = member.hasPermission("READ_MESSAGE_HISTORY");
			var has_mentionEveryone = member.hasPermission("MENTION_EVERYONE");
			var has_externalEmojis = member.hasPermission("EXTERNAL_EMOJIS");
			var has_connect = member.hasPermission("CONNECT");
			var has_speak = member.hasPermission("SPEAK");
			var has_muteMembers = member.hasPermission("MUTE_MEMBERS");
			var has_deafenMembers = member.hasPermission("DEAFEN_MEMBERS");
			var has_moveMembers = member.hasPermission("MOVE_MEMBERS");
			var has_useVAD = member.hasPermission("USE_VAD");
			var has_changeNickname = member.hasPermission("CHANGE_NICKNAME");
			var has_manageNickname = member.hasPermission("MANAGE_NICKNAMES");
			var has_manageRolesOrPermissions = member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");
			var has_manageWebhooks = member.hasPermission("MANAGE_WEBHOOKS");
			var has_emojis = member.hasPermission("MANAGE_EMOJIS");

			// TODO: create an embed message to show what this user can and cannot do!
			
		},
	};
