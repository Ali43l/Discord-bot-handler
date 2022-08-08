const Discord = require("discord.js");
const config = require("../../config.json");
module.exports = {
  name: "nsfw",
  aliases: [""],
  description: "nsfw help commands",
  category: "",
  // args: true,
  usage: "<command name>",
  guildOnly: true,
  // ownerOnly: true,
  cooldown: 3,
  execute(client, message, args) {
    const data = [];
    const { commands } = message.client;

    data.push(commands.map((command) => command.name).join("\n"));
    data.push(
      `\n**\nYou can send \`${config.prefix}help [command name]\` to get info on a specific command!`
    );
    const helpembed = new Discord.MessageEmbed()
      .setTitle("Here's a list of all my commands:")
      .setDescription("**" + data, { split: true })
      .setColor(config.color.main);

    return message.channel
      .send(helpembed)
      .then(() => {
        message.react("📬");
      })

  },
};
