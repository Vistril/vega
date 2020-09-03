const { Command } = require('discord-akairo');

class Eval extends Command {
    constructor() {
        super('eval', {
            aliases: ['eval', 'js'],
            ownerOnly: true,
            args: [
                {
                    id: "code",
                    type: "string",
                    default: "'Hello World!'",
                    match: "rest"
                }
            ]
        })
    }

    exec({ channel, author }, args) {
        try {
            let evaled = eval(args.code);
            if (typeof evaled == "object") {
                evaled = require('util').inspect(evaled);
            }
            channel.send(`**Result**\n\`\`\`js\n${evaled}\n\`\`\``);
        } catch (err) {
            channel.send(`**Result**\n\`\`\`js\n${err}\n\`\`\``);
        }
    }
}

module.exports = Eval;