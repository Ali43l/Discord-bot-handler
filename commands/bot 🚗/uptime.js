
const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
    name: "uptime",
	aliases: [""],
	description: "",
	// args: true,
	usage: "",
	guildOnly: true,
	// ownerOnly: true,
	cooldown: 3,
	execute(client, message, args) {
		let days = Math.floor(client.uptime / 86400000);
		let hours = Math.floor(client.uptime / 3600000) % 24;
		let minutes = Math.floor(client.uptime / 60000) % 60;
		let seconds = Math.floor(client.uptime / 1000) % 60;

		const uptimeembed = new Discord.MessageEmbed()
		.setTitle('Uptime')
		.setDescription(`**Normal bot uptime is more than a week, if the bot uptime was less than a week, it means that a new update has come for the bot or its bugs have been fixed, For more details join our [support server](https://dsc.gg/1dk)** \n**My uptime is ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} second**`)
		.setColor(config.color.main)
		.setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		message.channel.send(uptimeembed)
	}
}