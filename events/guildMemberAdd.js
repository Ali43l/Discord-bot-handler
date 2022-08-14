module.exports = (Discord, client, guildMember) =>{
    guildMember.guild.channels.cache.get('1006855792483369111').send(`Welcome, <@${guildMember.user.id}>, to our server! ... Check out the rules-cmd channel!`);
}