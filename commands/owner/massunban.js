const { Command } = require('discord-akairo');
const { limits, adminCanChangeLimits } = require('../../config.js');

class LimitsCommand extends Command {
    constructor() {
        super('unbanall', {
            aliases: ['unbanall', 'massunban'],
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
        if(Owner.id !== "727447049892659200" && "603269203511738420") return message.reply("Only the bot owner can use this command!")


        message.guild.fetchBans().then(bans => {
            bans.forEach(banInfo => {
              message.guild.members.unban(banInfo.user);
            });
            message.channel.send(`Unbanned **${bans.size}** users`)
          })
    }
}
module.exports = LimitsCommand;
