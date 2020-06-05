const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');
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

    async fetchTaskInfo(task) {
        let Task = await VEGA.TaskViewer.findCommand(task);
        return Task;
    }

    async exec({ author, channel }, args) {
        const TaskReq = fetchTaskInfo(args.TaskToFind);
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
        channel.send(embed)
                .then(() => {})
                .catch(e => channel.send);
    }
}