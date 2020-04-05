const fs = require('fs');
const Discord = require('discord.js');

const readline = require('readline');
const {google} = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = 'token.json';

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
                
        // // Load client secrets from a local file.
        // fs.readFile('credentials.json', (err, content) => {
        //     if (err) return console.log('Error loading client secret file:', err);

        //     // Authorize a client with credentials, then call the Google Sheets API.
        //     authorize(JSON.parse(content), test);
        // });
        
        // // Check for authorization
        // function authorize(credentials, callback) {
        //     const {client_secret, client_id, redirect_uris} = credentials.installed;
        //     const oAuth2Client = new google.auth.OAuth2(
        //         client_id, client_secret, redirect_uris[0]);
        
        //     // Check if we have previously stored a token.
        //     fs.readFile(TOKEN_PATH, (err, token) => {
        //     if (err) return getNewToken(oAuth2Client, callback);
        //     oAuth2Client.setCredentials(JSON.parse(token));
        //     callback(oAuth2Client);
        //     });
        // }
        
        // // Get and store new token if no authorization was found
        // function getNewToken(oAuth2Client, callback) {
        //     const authUrl = oAuth2Client.generateAuthUrl({
        //     access_type: 'offline',
        //     scope: SCOPES,
        //     });
        //     console.log('Authorize this app by visiting this url:', authUrl);
        //     const rl = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout,
        //     });
        //     rl.question('Enter the code from that page here: ', (code) => {
        //     rl.close();
        //     oAuth2Client.getToken(code, (err, token) => {
        //         if (err) return console.error('Error while trying to retrieve access token', err);
        //         oAuth2Client.setCredentials(token);

        //         // Store the token to disk for later program executions
        //         fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        //         if (err) return console.error(err);
        //         console.log('Token stored to', TOKEN_PATH);
        //         });
        //         callback(oAuth2Client);
        //     });
        //     });
        // }

        // function test(auth) {
        //     const sheets = google.sheets({version: 'v4', auth});
        //     sheets.spreadsheets.values.get({
        //     spreadsheetId: '1hS0N0urF1qQYCQ9Kea-cOUpnmA8K6qk5E7_GM0gOcEA',
        //     range: 'Sheet1!A2:C',
        //     }, (err, res) => {
        //     if (err) return console.log('The API returned an error: ' + err);
        //     const rows = res.data.values;
        //     console.log(rows);
        //     var i = 0;
        //     if (rows.length) {
                
        //         console.log(rows[i])
        //         i++;
        //         // console.log('Names, Wins, Losses:');

        //         // Print columns A and E, which correspond to indices 0 and 4.
        //         // rows.map((row) => {
        //         // console.log(`${row[0]}, ${row[1]}, ${row[2]}`);
        //         // });
        //     } else {
        //         console.log('No data found.');
        //     }
        //     });
        // }
	},
};
