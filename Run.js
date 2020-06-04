const interface = require("./Main.js");
const Main = new interface();

if (Main.main == undefined) {
    throw new ReferenceError("Main method not found in " + process.argv[2] + ".js")
} else {
    console.log(Main.main());
}