const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const config = require("../config.json");
module.exports = {
  name: "ready",
  execute: async (client) => {

    //
    const activities = [
        {activity: { name: `0` },status: 'online'},
        {activity: { name: `1` },status: 'dnd'},
        {activity: { name: `2` },status: 'idle'},
        {activity: { name: '3', type: 'STREAMING', url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }},
    ];

    let x = 0;
    setInterval(() => {
      if (x >= activities.length) x = 0;
      client.user.setPresence(activities[x]);
      x++;
    }, 10000);
    //
    console.log("Started streaming " + (config.youtubeLink) + ` as ${client.user.tag}`);
    let channel = client.channels.cache.get(config.channelId) || await client.channels.fetch(config.channelId)
  
    if(!channel) return;
    const connection = await channel.join();
    connection.play(ytdl(config.youtubeLink))

    setInterval(async function() {
      if(!client.voice.connections.get(config.guildId)) {
        let channel = client.channels.cache.get(config.channelId) || await client.channels.fetch(config.channelId)
        if(!channel) return;
    
        const connection = await channel.join()
        connection.play(ytdl(config.youtubeLink))
      }
    }, 20000)
    //
    console.log(`RUN SHOD `);
  },

};
