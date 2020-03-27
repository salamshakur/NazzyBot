const snekfetch = require('snekfetch');
var cheerio = require("cheerio");
var request = require("request");

const fs = require('fs');

module.exports = {
	name: 'send',
	description: 'Ask me to send you anything! For example: Say !send cats',
	async execute(message, args) {

		var search;

		if(!args.length) {
			return message.channel.send('You need to supply a send item!');
		}
		else
		{
			search = args.join(' ');
		}

		if(args[0] === 'cats') {
			const { body } = await snekfetch.get('https://aws.random.cat/meow');
			message.channel.send(body.file);
		}

		else if(args[0] === 'dogs') {
			const { body } = await snekfetch.get('https://dog.ceo/api/breeds/image/random');
			message.channel.send(body.message);
		}
		
		else {

			var config = JSON.parse(fs.readFileSync('./config.json'));
			console.log(config);

			var day	= config.day;
			var limit = config.limit;
			var count = config.count;
			var currDay = new Date().getDay();
			
			// If limit was exceeded or 24 hours has not been up, return
			if(limit < count)
			{
				return message.channel.send('Bah, humbug! You\'ve reached your daily limit!');
			}
			
			// If a new day has passed or values were null, reset counter
			if(day < currDay || day == null || count == null)
			{
				console.log('count been resetted! why?');
				console.log('day ' + day);
				console.log('currDay ' + currDay);
				count = 0;
			}
	
			// If limit was reached, stamp today's date to enable 24 hour waiting period
			if(limit == count)
			{
				day = currDay;
			}
			

			// else increment count, update json, and run command
			console.log('before ' + count);
			count++;
			console.log('after ' + count);

			let newConfig = {
				prefix: config.prefix,
				token: 	config.token,
				day:  	day,
				count: 	count,
				limit:  config.limit
			}
	
			let data = JSON.stringify(newConfig, null, 2);
			fs.writeFile('./config.json', data, err => {
				if(err) throw err;
				console.log('config file updated.')
			});

			var options = {
				url: "http://results.dogpile.com/serp?qc=images&q=" + search,
				method: "GET",
				headers: {
					"Accept": "text/html",
					"User-Agent": "Chrome"
				}
			};

			request(options, function(error, response, responseBody) {

				if (error) {
					return;
				}
		 
				$ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
		 
				var links = $(".image a.link");

				var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

				if (!urls.length) {
					return;
				}

				var max = urls.length;
				var min = 0;

				var random = Math.floor(Math.random() * (max - min)) + min;
		 
				message.channel.send( urls[random] );

			});
		}
	},
};
