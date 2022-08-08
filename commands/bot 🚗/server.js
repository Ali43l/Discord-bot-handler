
const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
    name: "server",
	aliases: [""],
	description: "",
	// args: true,
	usage: "",
	guildOnly: true,
	// ownerOnly: true,
	cooldown: 3,
	execute(client, message, args) {
		if(message.author.bot || message.channel.type == "dm") return;
		let messageArry = message.content.split(" ")
		let cmd = messageArry[0]; 
		const server = new Discord.MessageEmbed()
		.setColor(config.color.main)
		.setTitle('Server')
		.addField('Support Server', '**[Click Here](https://dsc.gg/1dk)**', true)
		.setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		message.channel.send(server)
	}
}