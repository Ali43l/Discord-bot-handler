const Discord = require("discord.js");
const config = require("../../config.json");
const { QuickDB } = require("quick.db");
const db = new QuickDB();
module.exports = {
  name: "balance",
  aliases: ["bal"],
  description: "",
  // args: true,
  usage: "",
  guildOnly: true,
  // ownerOnly: true,
  cooldown: 3,
	execute: async(client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setColor(config.color.main)
      .setTitle(`1`)
      .setDescription(`1`);
    message.channel.send(embed);
  },
};
