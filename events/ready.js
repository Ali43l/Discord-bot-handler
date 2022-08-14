module.exports = {
  name: "ready",
  execute(client) {
    const activities = [
        {activity: { name: `0` },status: 'online'},
        {activity: { name: `1` },status: 'dnd'},
        {activity: { name: `2` },status: 'idle'},
        {activity: { name: '3', type: 'STREAMING', url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }},
        

    ];


    let x = 0;

    setInterval(() => {
      if (x >= activities.length) x = 0;
      console.log(activities[x],x);
      client.user.setPresence(activities[x]);
      x++;
    }, 10000);

    console.log(`RUN SHOD `);
  },
};
