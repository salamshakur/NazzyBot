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
