const Discord = require("discord.js");
const config = require("../../config.json");
const db = require('quick.db')
module.exports = {
  name: "balance",
  aliases: ["bal"],
  description: "",
  // args: true,
  usage: "",
  guildOnly: true,
  // ownerOnly: true,
  cooldown: 3,
execute(client, message, args) {
//     const economy = db.table('economy')
// await economy.set('myBalance', 500) // -> 500
// let bal = await economy.get('myBalance') // -> 500
//     message.channel.send(bal);
  },
};
