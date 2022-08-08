const config = require('../../config.json');
const Discord = require('discord.js');
const superagent = require('superagent')


module.exports = {
    name: "4k",
	description: 'nsfw command',
	aliases: [''],
	guildOnly: true,
	ownerOnly: false,
	args: false,
	usage: "",
	category:"nsfw",
	cooldown: 3,
    execute(client, message, args) {
		if (message.channel.nsfw === true) {
			superagent.get('https://nekobot.xyz/api/image')
			.query({ type: '4k'})
			.end((err, response) => {
				const porn = new Discord.MessageEmbed()
				.setImage(response.body.message)
				.setColor(config.color.main)
			  message.channel.send(porn)
			});
		  } else {
			message.channel.send(`${config.emojis.no} **This isn't NSFW channel**`)
		}
	}
}