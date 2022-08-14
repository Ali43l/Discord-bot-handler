const Discord = require("discord.js");
const config = require("../../config.json");
const { QuickDB } = require("quick.db");
const db = new QuickDB();
module.exports = {
  name: "ml",
  aliases: ["ml"],
  description: "balance",
  // args: true,
  usage: "",
  guildOnly: true,
  // ownerOnly: true,
  cooldown: 3,
  execute: async (client, message, args) => {
    const moneydb = db.table("moneydb");
    const money = await moneydb.all();
    money.sort(function (a, b) {
      return b.value - a.value;
    });
    money.length = 10;
    var finalLb = "";
    for (var i in money) {
      finalLb += `**${money.indexOf(money[i]) + 1}. <@${
        client.users.cache.get(money[i].id)
          ? client.users.cache.get(money[i].id).id
          : (money[i].id)+"Unknown#0000"
      }>** - **${money[i].value}** 🪙\n`;
    }
    const embed = new Discord.MessageEmbed()
      .setTitle(`Money Leaderboard`)
      .setColor(config.color.main)
      .setDescription(`${finalLb}`)
      .setFooter(
        `${client.user.username}`,
        client.user.displayAvatarURL({
          format: "png",
          dynamic: true,
          size: 1024,
        })
      )
      .setTimestamp();
    message.channel.send(embed);
  },
};
