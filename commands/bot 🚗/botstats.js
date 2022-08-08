
const config = require('../../config.json');
const Discord = require('discord.js');
cpuStat = require('cpu-stat'),  
module.exports = {
    name: "stats",
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
		cpuStat.usagePercent(function (error, percent, seconds) {
			if (error) {
			  return console.error(error) 
			}
			
	  
			const guild = client.guilds.cache.size.toLocaleString() 
			const user = client.users.cache.size.toLocaleString() 
			const channel = client.channels.cache.size.toLocaleString() 
			const Node = process.version 
			const CPU = percent.toFixed(2)  
			
			const embed = new Discord.MessageEmbed()
	  
			.setTitle('Bot Statistics')
			embed.addField('Servers', `**${guild}**`, true) 
			.addField('Users', `**${user}**`, true) 
			.addField('Channels', `**${channel}**`, true)
			.addField('Library', `**Discord.js**`, true)
			.addField('Node Version', `**${Node}**`, true)
			.addField('CPU Usage', `**${CPU}%**`, true)
			.setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
			.setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
			.setColor(config.color.main) 
			message.channel.send(embed) 
		}) 
	}
}