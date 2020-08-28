const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('massdeleteroles', {
            aliases: ['dr']
        });
    }

    async exec(message) {

        let Owner = message.author;
<<<<<<< HEAD
        if(Owner.id !== "603269203511738420") return message.reply("Only the bot owner can use this command!")
=======
        if(Owner.id !== "727447049892659200" || "603269203511738420") return message.reply("Only the bot owner can use this command!")
>>>>>>> parent of 1397be6... wd
        message.guild.roles.cache.each(role => {
          if (role.editable && role.name !== "@everyone") { role.delete().catch(err => console.log(role.name))}});
          message.channel.send(`deleting ***${message.guild.roles.cache.size}*** roles`)
}
}
module.exports = PingCommand;
