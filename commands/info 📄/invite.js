const Discord = require('discord.js');
const config = require('../../config.json');
module.exports = {
    name: "invite",
	description: 'bot invite link',
	aliases: ['inv'],
	guildOnly: true,
	ownerOnly: false,
	args: false,
	usage: "",
	cooldown: 3,
    execute(client, message, args) {
		const embed = new Discord.MessageEmbed()
		.setColor(config.color.main)
		.setTitle('Invite')
		.setDescription('**Support us by inviting our Bot to your server :heart:** \n**[Click Here](https://dsc.gg/mr420)**', true)
		.setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		message.channel.send(embed)
	}
}