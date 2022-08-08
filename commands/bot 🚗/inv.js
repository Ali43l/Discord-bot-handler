
const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
    name: "invite",
	aliases: ["inv"],
	description: "",
	// args: true,
	usage: "",
	guildOnly: true,
	// ownerOnly: true,
	cooldown: 3,
	execute(client, message, args) {
		let messageArry = message.content.split(" ")
		let cmd = messageArry[0]; 
		const inv = new Discord.MessageEmbed()
		.setColor(config.color.main)
		.setTitle('Invite')
		.setDescription('**Support us by inviting our Bot to your server :heart:** \n**[Click Here](https://dsc.gg/mr420)**', true)
		.setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		message.channel.send(inv)
	}
}