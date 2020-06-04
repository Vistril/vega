const { Command } = require('discord-akairo');

class Ping extends Command {
    constructor() {
        super('ping', {
            aliases:['ms', 'response', 'ping']
        });
    }
}

module.exports = Ping;