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
			//var username = member.user.username;

			//console.log("test...");

			// Get that members permissions
			const invite = (member.hasPermission("CREATE_INSTANT_INVITE"))? "Can create invites" : "Cannot create invite";
			const kick = (member.hasPermission("KICK_MEMBERS"))? "Can kick members" : "Cannot kick members";
			const ban = (member.hasPermission("BAN_MEMBERS"))? "Can ban users" : "Cannot ban users";
			const admin = (member.hasPermission("ADMINISTRATOR"))? "Is admin" : "Is not admin";
			const manageChannel = (member.hasPermission("MANAGE_CHANNELS"))? "Can manage channels" : "Cannot manage channels";
 			const manageServer = (member.hasPermission("MANAGE_GUILD"))? "Can manage servers" : "Cannot manage servers";
			const addreaction = (member.hasPermission("ADD_REACTIONS"))? "Can add reactions" : "Cannot add reactions";
			const readmessages = (member.hasPermission("READ_MESSAGES"))? "Can read messages" : "Cannot read messages";
			const sendmessages = (member.hasPermission("SEND_MESSAGES"))? "Can send messages" : "Cannot send messages";
			const sendTTSmessages = (member.hasPermission("SEND_TTS_MESSAGES"))? "Can send TTS messages" : "Cannot send TTS messages";
			const manageMessages = (member.hasPermission("MANAGE_MESSAGES"))? "Can manage messages" : "Cannot manage messages";
			const embedLinks = (member.hasPermission("EMBED_LINKS"))? "Can embed links" : "Cannot embed links";
			const attachFiles = (member.hasPermission("ATTACH_FILES"))? "Can attach files" : "Cannot attach files";
			const readMessageHistory = (member.hasPermission("READ_MESSAGE_HISTORY"))? "Can read message history" : "Cannot read message history";
			const mentionEveryone = (member.hasPermission("MENTION_EVERYONE"))? "Can mention everyone" : "Cannot mention everyone";
			const externalEmojis = (member.hasPermission("EXTERNAL_EMOJIS"))? "Can manage external emojis" : "Cannot manage external emojis";
			const connect = (member.hasPermission("CONNECT"))? "Can connect to a voice channel" : "Cannot connect to a voice channel";
			const speak = (member.hasPermission("SPEAK"))? "Can speak in a voice channel" : "Cannot speak in a voice channel";
			const muteMembers = (member.hasPermission("MUTE_MEMBERS"))? "Can mute members" : "Cannot mute members";
			const deafenMembers = (member.hasPermission("DEAFEN_MEMBERS"))? "Can deafen members" : "Cannot deafen members";
			const moveMembers = (member.hasPermission("MOVE_MEMBERS"))? "Can move members" : "Cannot move members";
			const useVAD = (member.hasPermission("USE_VAD"))? "Can use voice-activity-detection" : "Cannot use voice-activity-detection";
			const changeNickname = (member.hasPermission("CHANGE_NICKNAME"))? "Can change nickname" : "Cannot change nickname";
			const manageNickname = (member.hasPermission("MANAGE_NICKNAMES"))? "Can manage nickname" : "Cannot manage nickname";
			const manageRolesOrPermissions = (member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS"))? "Can manage permissions & roles" : "Cannot manage permissions & roles";
			const manageWebhooks = (member.hasPermission("MANAGE_WEBHOOKS"))? "Can manage webhooks" : "Cannot manage webhooks";
			const emojis = (member.hasPermission("MANAGE_EMOJIS"))? "Can manage emojis" : "Cannot manage emojis";

			// TODO: create an embed message to show what this user can and cannot do!
			const embed = new Discord.RichEmbed()
				.setTitle("User - ") // add user here
				.setAuthor("Nazzy")
				.setColor("#2966c6")
				
		},
	};
