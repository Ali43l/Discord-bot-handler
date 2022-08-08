const Discord = require("discord.js");
const config = require("../../config.json");
module.exports = {
  name: "ping",
  description: "bot's ping",
  aliases: ["p"],
  guildOnly: true,
  ownerOnly: false,
  args: false,
  usage: "",
  cooldown: 3,
  execute(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor(config.color.main)
      .setTitle(`Pong!`)
      .setDescription(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms.\n 🏓 API Latency is ${Math.round(client.ws.ping)}ms`);
    message.channel.send(embed);
  },
};
