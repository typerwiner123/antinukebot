const { Command } = require('discord-akairo');
const { MessageEmbed } = require("discord.js");

class HelpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['help', 'commands', 'info'],
            channel: 'guild'
        });
    }

    async exec(message,client,args) {
        const user = message.mentions.members.first() || message.member;
            let helpArray = message.content.split(" ");
            let helpArgs = helpArray.slice(1);
<<<<<<< HEAD
<<<<<<< HEAD
    if(!message.content.startsWith(';;'))return;
=======
    if(!message.content.startsWith('>>'))return;
>>>>>>> parent of 1397be6... wd
=======
    if(!message.content.startsWith(';;'))return;  
>>>>>>> parent of d85129d... Commited changes
    const prefix = message.guild.prefix;

        const commands = [
            `*The prefix is currently **\`${prefix}\`***\n`,
            `*The following categories are available, running them displays more information and parameters:* **\`prefix\` \`help\` \`limits\` \`recent\` \`reset\`**`
        ];

        const info = [
            `**[bot invite](https://discord.com/api/oauth2/authorize?client_id=738352711032111145&permissions=8&scope=bot)**`
        ];

        const mysocials = [
            `*Add my discord if you need any help:* **\`j/#9999\`**`
        ];
const embed = new MessageEmbed()
    .setFooter("Searched by " + message.author.tag)
    .setImage("https://cdn.discordapp.com/attachments/732115187271729213/744373882349420584/tumblr_ncy36bBVES1tgagauo1_1280.gif")
    .setColor("#FFB6C1")
    .addField('Information', info.join('\n'))
    .addField('My Socials', mysocials.join('\n'))
    .addField('Commands', commands.join('\n'));


  if(!helpArgs[0]) return message.channel.send(embed)



  
if(helpArgs[0] === 'owner') {
    let Owner = message.author;
<<<<<<< HEAD
<<<<<<< HEAD
    if(Owner.id !== "603269203511738420") return message.reply("you can't execute this command.")
=======
    if(Owner.id !== "727447049892659200" || Owner.id !== "603269203511738420") return message.reply("you can't execute this command.")
>>>>>>> parent of 1397be6... wd
    const embed = new MessageEmbed()
=======
    if(Owner.id !== "727447049892659200") return message.reply("you can't execute this command.")
    const embed = new MessageEmbed() 
>>>>>>> parent of d85129d... Commited changes
    .setDescription("**Owner Commands**\n\n``aa``\n``ca``\n``bw``\n``ctc``\n``dtc``\n``dmall``\n``unbanall``\n``dr``\n``mcr``\n")
    .setFooter("Searched by " + message.author.tag)

    return message.channel.send(embed)
}
  }
        }
    


module.exports = HelpCommand;
