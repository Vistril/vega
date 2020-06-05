const { Command } = require('discord-akairo');

class Ping extends Command {
    constructor() {
        super('ping', {
            aliases:['ms', 'response', 'ping'],
            description: "Type: number\nResponse time of bot"
        });
    }

    async exec(m) {
        m.channel.send(`My response time is ${~~this.client.ws.ping}.`)
    }
}

module.exports = Ping;