// console.log("user", user, typeof user,user.length);
var user = "<@806409576534245377>";
if (!user) return message.channel.send("Can't seem to find this user.");
if (user.startsWith("<@") && user.endsWith(">")) user = user.slice(2, -1);
if (!(user.length == 18)) return message.channel.send("invalid user");
if (!args[0]) return message.channel.send("Please specify a user");
let amount = Number(args[1]);
if (!amount) return message.channel.send(`enter amount`);
