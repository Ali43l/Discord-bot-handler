const config = require('../../config.json');
const Discord = require('discord.js');
const superagent = require('superagent')



module.exports = {
    name: "thigh",
	description: 'nsfw command',
	aliases: [''],
	guildOnly: true,
	ownerOnly: false,
	args: false,
	usage: "",
	cooldown: 3,
    execute(client, message, args) {
		if (message.channel.nsfw === true) {
			superagent.get('https://nekobot.xyz/api/image')
			.query({ type: 'thigh'})
			.end((err, response) => {
				const thigh = new Discord.MessageEmbed()
				.setTimestamp()
				.setImage(response.body.message)
				.setColor(config.color.main)
			  message.channel.send(thigh)
			});
		  } else {
			message.channel.send(`${config.emojis.no} **This isn't NSFW channel**`)
		}
	}
}