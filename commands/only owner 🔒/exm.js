const Discord = require("discord.js");
const config = require("../../config.json");
module.exports = {
  name: "exm",
  aliases: [""],
  description: "",
  // args: true,
  usage: "",
  guildOnly: true,
  // ownerOnly: true,
  cooldown: 3,
  execute(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor(config.color.main)
      .setTitle(`1`)
      .setDescription(`1`);
    message.channel.send(embed);
  },
};
