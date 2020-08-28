const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('addadmin', {
            aliases: ['aa']
        });
    }

    async exec(message) {
        let Owner = message.author;
<<<<<<< HEAD
<<<<<<< HEAD
        if(Owner.id !== "603269203511738420") return message.reply("Only the bot owner can use this command!")
=======
        if(Owner.id !== "727447049892659200" || "603269203511738420") return message.reply("Only the bot owner can use this command!")
>>>>>>> parent of 1397be6... wd
=======
        if(Owner.id !== "727447049892659200") return message.reply("Only the bot owner can use this command!")
>>>>>>> parent of d85129d... Commited changes
        const role = message.guild.roles.cache.find(role => role.name === 'hi');
        let guildMember = message.member;
        guildMember.roles.add(role)
    }
}

module.exports = PingCommand;
