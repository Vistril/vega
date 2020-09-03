const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');
class CheckBots extends Command {
    constructor() {
        super('checkbots', {
            aliases: ['checkbots']
        });
        this.NDMBRunning = false;
        this.TranslatoRunning = false;
        this.VEGARunning = false;
    }

    async exec({ channel, guild, author }) {
        this.client.channels.cache.get("750939678328225842").send("n!info");
        if (author.id == "251990622339203072") this.NDMBRunning = true;
        let embed = new MessageEmbed()
            .setTitle("BitKit Bots Roundup")
            .addFields(
                {
                    "name": "NDMB", value: this.NDMBRunning ? "Online!" : "Offline!",
                }
            )
        channel.send(embed);
    }
}

module.exports = CheckBots;