const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
	name: 'battle',
	description: 'Challenge your opponent!',
	execute(message, args, bot) {

        var name = null;
        var avatar = null;

        if(!args.length){
            return message.channel.send('Tag a person please!');
        }

        if(message.mentions.everyone == true){
            return message.channel.send('Bruuuuh. Don\'t be that guy.');
        }

        var player = message.author;
        var playerName = player.username;
        var playerAvatar = player.avatarURL;

        var opponent = message.mentions.users.first();
        var opponentName = opponent.username;
        var opponentAvatar = opponent.avatarURL;

        if(opponent == null || opponent == undefined){
            return message.channel.send('Not a valid person bro!');
        }

        function getRandomInt() {
            var min = 0;
            var max = 100;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        var playerRoll = getRandomInt();
        var opponentRoll = getRandomInt();

        if(playerRoll > opponentRoll)
        {
            name = playerName;
            avatar = playerAvatar;
        }
        else if (playerRoll < opponentRoll)
        {
            name = opponentName;
            avatar = opponentAvatar;
        }
        else
        {
            name = 'It\'s a tie! What are the odds';
            avatar = bot.user.avatarURL;
        }

        const embed = new Discord.RichEmbed()
            .setAuthor(playerName + ' VS ' + opponentName)
            .setColor("#FF0000")
            .addField(playerName + ' rolls', playerRoll, true)
            .addField(opponentName + ' rolls', opponentRoll, true)
            .addField('The winner is: ', name + '!', false)
            .setThumbnail(avatar);

        message.channel.send(embed);
                
	},
};
