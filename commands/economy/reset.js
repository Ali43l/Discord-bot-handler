const Discord = require("discord.js");
const config = require("../../config.json");
const { QuickDB } = require("quick.db");
const db = new QuickDB();
module.exports = {
  name: "money-reset",
  aliases: ["mreset"],
  description: "add money",
  args: true,
  usage: "<user>",
  guildOnly: true,
  ownerOnly: true,
  cooldown: 5,
  execute: async (client, message, args) => {
    var user = args[0];
    if (user.startsWith("<@") && user.endsWith(">")) user = user.slice(2, -1);
    if (!(user.length == 18)) return message.channel.send("invalid user")
    if (!args[0]) return message.channel.send("Please specify a user");

    const money = db.table("moneydb");
    await db.set(user,0);
    let balance = await money.get(user);

    const embed = new Discord.MessageEmbed()
      .setColor(config.color.main)
      .setTitle(`reset money`)
      .addFields(
        {
          name: `${config.emojis.arrow} user:`,
          value: `<@${user}>`,
          inline: true,
        },
        { name: "\u200B", value: "\u200B", inline: true },
        {
          name: `${config.emojis.arrow} id:`,
          value: `\`${user}\``,
          inline: true,
        },
        {
          name: `${config.emojis.coin} balance:`,
          value: `\`${balance}\``,
          inline: true,
        }
      )
      .setTimestamp();
    message.channel.send(embed);
  },
};
