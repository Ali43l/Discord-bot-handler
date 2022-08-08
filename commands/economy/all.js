const Discord = require("discord.js");
const config = require("../../config.json");
const { QuickDB } = require("quick.db");
const db = new QuickDB();
module.exports = {
  name: "all",
  aliases: [""],
  description: "",
//   args: true,
  usage: "<amount>",
  guildOnly: true,
  // ownerOnly: true,
  cooldown: 3,
  execute: async (client, message, args) => {
    const money = db.table("money");
    let all = await money.all()
    console.log(all)
    const embed = new Discord.MessageEmbed()
    .setColor(config.color.main)
    .setTitle(`all`)
    .setDescription(`${all}`);
    message.channel.send(embed);
    await money.deleteAll()
  },
};
