const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
    name: "about",
	aliases: [""],
	description: "",
	// args: true,
	usage: "",
	guildOnly: true,
	// ownerOnly: true,
	cooldown: 3,
	execute(client, message, args)  {
		let messageArry = message.content.split(" ")
		let cmd = messageArry[0]; 
		const about = new Discord.MessageEmbed()
		.setTitle('About')
		.setDescription(`**${client.user.tag} is a multifunctional bot that simplifies server management, Created by ALIEN#0028**\n**Also features Games , Fun , NSFW and much more**`)
		.setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		.setColor(config.color.main)
		message.channel.send(about)
	}
}