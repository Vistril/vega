const { Command, CommandHandler } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');
const Client = require('../../Main.js');

class Help extends Command {
    constructor() {
        super('help', {
            aliases: ['help', 'h'],
            description: "Displays info of bot and it's tasks",
            args: [
                {
                    id: "TaskToFind",
                    type: 'string',
                }
            ]
        });
    }

    fetchTaskInfo(task) {
        this.TaskViewer = new CommandHandler(this.client, {
            directory: process.cwd() + "/VegaCore/Tasks/"
        });
        let Task = this.TaskViewer.modules.map(e => e);
        return Task;
    }

    async exec({ author, channel, util }, args) {
        const TaskReq = this.fetchTaskInfo(args.TaskToFind);
        let embed = new MessageEmbed()
            .setTitle("I am VEGA")
            .setColor("")
            .setDescription("Hello. I am VEGA, the sentient intelligence assigned to Mars.")
            .addFields(
                { 
                    name: "What can I do?", 
                    value: "I can manage your server, play games, and do much more! Find out [how](https://pastebin.com/raw/SiEuLf2M)"
                }
            )
            .setTimestamp()
            .setFooter(`Requested by ${author.tag}`);
        util.send(require('util').inspect(TaskReq))
    }
}

module.exports = Help;