const Discord = require("discord.js");
const config = require("../../config.json");
const { QuickDB } = require("quick.db");
const db = new QuickDB();
module.exports = {
  name: "remove-money",
  aliases: [""],
  description: "remove money",
  args: true,
  usage: "<user> <amount>",
  guildOnly: true,
  ownerOnly: true,
  cooldown: 5,
  execute: async (client, message, args) => {
    var user = args[0];
    if (!user) return message.channel.send("Can't seem to find this user.");
    if (user.startsWith("<@") && user.endsWith(">")) user = user.slice(2, -1);
    if (!(user.length == 18)) return message.channel.send("invalid user");
    if (!args[0]) return message.channel.send("Please specify a user");
    let amount = Number(args[1]);
    var x;
    if (!amount || amount == 0) return message.channel.send(`enter amount`);
    else if (amount > 0) x = "-";
    else if (amount < 0) return;


    const money = db.table("money");
    let balance = await money.get(user);
    if (amount>balance)return message.channel.send("amount is more than the balance");
    amount = amount*(-1)
    await money.add(user, amount);
    const embed = new Discord.MessageEmbed()
      .setColor(config.color.main)
      .setTitle(`remove money`)
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
          name: `${config.emojis.coin} amount:`,
          value: `\`${x}${amount}\``,
          inline: true,
        },
        { name: "\u200B", value: "\u200B", inline: true },
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
