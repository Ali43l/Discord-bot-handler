
const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
    name: "botinfo",
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
		let botinfo = new Discord.MessageEmbed()
		.setColor(config.color.main) 
		.setThumbnail(client.user.avatarURL({ format: "png", dynamic: true, size: 2048 }))
		.setTitle("Bot Info")
		.addField(`Bot Name`, `**${client.user.username}**`, true)
		.addField(`ID`, `**${client.user.id}**`)
		.addField(`Developer`, `**<@806409576534245377>**`)
		.addField(`Website`, `**[https://dsc.gg/da1k](https://dsc.gg/da1k)**`)
		.addField(`Server`, `**[Click Here](https://dsc.gg/1dk)**`)
		.addField(`Discord.js Version`, `**${Discord.version}**`, true)
		.setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		message.channel.send(botinfo)
	}
}