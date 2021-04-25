const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
	name: 'battle',
	description: 'Challenge your opponent!',
	execute(message, args, bot) {

        if(!args.length){
            return message.channel.send('Tag a person please!');
        }

        if(message.mentions.everyone == true){
            return message.channel.send('Bruuuuh. Don\'t be that guy.');
        }

        const player = message.author.username
        const opponent = message.mentions.users.first().username;

        if(opponent == null){
            return message.channel.send('Not a valid person bro!');
        }

        function getRandomInt() {
            var min = 0;
            var max = 100;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        var playerRoll = getRandomInt();
        var opponentRoll = getRandomInt();
        var result = null;
        var thumbnail = null;

        if(playerRoll > opponentRoll)
        {
            result = player;
            thumbnail = message.author.avatarURL;
        }
        else if (playerRoll < opponentRoll)
        {
            result = opponent;
            thumbnail = message.mentions.members.first().user.avatarURL;
        }
        else
        {
            result = 'It\'s a tie! What are the odds';
            thumbnail = bot.user.avatarURL;
        }

        const embed = new Discord.RichEmbed()
            .setAuthor(player + ' VS ' + opponent)
            .setColor("#FF0000")
            .addField(player + ' rolls', playerRoll, true)
            .addField(opponent + ' rolls', opponentRoll, true)
            .addField('The winner is: ', result + '!', false)
            .setThumbnail(thumbnail);

        message.channel.send(embed);
                
	},
};
