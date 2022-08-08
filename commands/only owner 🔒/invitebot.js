const Discord = require("discord.js");
const config = require("../../config.json");
module.exports = {
  name: "invitebot",
  description: "bot invite link",
  aliases: ["invbot"],
  guildOnly:true,
  ownerOnly:true,
  args: true,
  usage: "<client id>",
  cooldown: 3,
  execute(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor(config.color.main)
      .setTitle(`Invite bot`)
      .setDescription(
        `**<@${args[0]}> [Click here](https://discord.com/api/oauth2/authorize?client_id=${args[0]}&permissions=0&scope=bot)**`,
        true
      )
    message.channel.send(embed);
  },
};
