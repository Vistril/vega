const { AkairoClient, CommandHandler } = require('discord-akairo');

class Main extends AkairoClient {
    constructor() {
        super({
            ownerID: "251909499189854209"
        }, {
            disableEveryone: true
        });

        this.TaskViewer = new CommandHandler(this, {
            directory: "./VegaCore/Tasks/",
            prefix: "vega "
        });
    }

    ready() {
        console.log("Logged in as " + this.user.tag);
        this.TaskViewer.loadAll();
    }

    main() {
        this.on("ready", () => this.ready());
        if (!process.env.TOKEN) require('dotenv').config();
        this.login(process.env.TOKEN);
    }
}

module.exports = Main;