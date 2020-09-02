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

    async exec({ channel }) {
        channel.send(`My response time is ${~~this.client.ws.ping}.`)
    }
}

module.exports = Ping;