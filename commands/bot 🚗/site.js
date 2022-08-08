
const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
    name: "site",
	aliases: [""],
	description: "",
	// args: true,
	usage: "",
	guildOnly: true,
	// ownerOnly: true,
	cooldown: 3,
	execute(client, message, args) {
		let messageArry = message.content.split(" ")
		let cmd = messageArry[0]; 
		const server = new Discord.MessageEmbed()
		.setColor(config.color.main)
		.setTitle('Website')
		.setDescription('**[Click Here](https://dsc.gg/da1k)**')
		.setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		message.channel.send(server)
	}
}