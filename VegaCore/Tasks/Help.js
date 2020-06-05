const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');
const { inspect } = require('util');
const Client = require('../../Main.js');
const VEGA = new Client();

class Help extends Command {
    constructor() {
        super('help', {
            aliases:['help', 'h'],
            description:"Displays info of bot and it's tasks",
            args: [
                {
                    id: "TaskToFind",
                    type: 'string',
                }
            ]
        });
    }

    fetchTaskInfo(task) {
        let Task = VEGA.TaskViewer.findCommand(task);
        return Task;
    }

    async exec({ author, channel }, args) {
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
        if (!args.TaskToFind) {
            await channel.send(embed);
        } else {
            await channel.send(VEGA.TaskViewer.findCommand(args.TaskToFind));
        }
    }
}

module.exports = Help;