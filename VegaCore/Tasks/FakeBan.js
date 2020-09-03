const { Command } = require('discord-akairo');

class FakeBan extends Command {
    constructor() {
        super('fakeban', {
            aliases: ['fakeban', 'fban', 'bam'],
            args: [
                {
                    id: "input",
                    default: "empty"
                }
            ]
        });
    }

    async exec(m, args) {
        let trustedIds = [
            "190612506085949441",
            "251909499189854209",
            "613143022590492702"
        ]
        if (!trustedIds.includes(m.author.id)) return;
        try {
            await m.delete();
        } catch (e) {}
        await m.channel.send(`**:white_check_mark: OK, banned ${args.input}.**`)
    }
}

module.exports = FakeBan;