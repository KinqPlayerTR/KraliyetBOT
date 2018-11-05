const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = class TavsiyeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'davet',
            group: 'sunucu',
            memberName: 'davet',
            description: 'Bulunduğunuz sunucunun davet linkini verir.',
        });
    }

async run(msg) {
    
    let davet;
    if (msg.channel.permissionsFor(this.client.user).has("CREATE_INSTANT_INVITE")) {
        await msg.channel.createInvite({temporary: false, maxAge: 0, maxUses: 0, unique: false}).then(i => { davet = i.url });
    } else davet = 'Davet linkini almak için yeterli yetkim yok.';

    const embed = new RichEmbed()
    .setColor("RANDOM")
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .addField(`${msg.guild.name} Sunucusunun Davet Linki`, davet)
    .setThumbnail(msg.guild.iconURL)
    .setTimestamp()
    return msg.channel.send({embed})
    }
}
