const Discord = require("discord.js");
const config = require("../settings/config.json")
module.exports.run= async(client, message, args) => {
let cse = new Discord.MessageEmbed()
.setTitle("Bot Info")
.setColor(config.cyan)
.setThumbnail(client.user.avatarURL())
.setTimestamp()
.addField("Total Servers", `\`${client.guilds.cache.size}\``)
.addField("Total Users", `\`${client.users.cache.size}\``)
.addField("Total Channels", `\`${client.channels.cache.size}\``)
.addField("Memory Usage",`\`${(process.memoryUsage().heapUsed / 5000 / 5000).toFixed(2)} MB\``)
.setFooter("Semix ")
message.channel.send(cse)
message.react("📊")
}
module.exports.help = {
name: "stats",
  aliases: ["s"]
}