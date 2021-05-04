const { client } = require('../index.js');
const chalk = require("chalk");

client.on("ready", async () => {

    console.log(chalk.cyan(`============================================`));
    console.log(chalk.cyan(`||             Semih#0700         ||`));
    console.log(chalk.cyan(`||              Semix Muzik        ||`));
    console.log(chalk.cyan(`============================================`));


    await client.user.setActivity(":help", {type: "LISTENING"})


});