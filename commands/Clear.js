const Discord = require('discord.js');
const config = require("../settings/config.json");
exports.run = function(client, message, args) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Yeterli izniniz yok!").then(z => z.delete({timeout: 8000}))
  if(!args[0]) return message.reply("Mesaj sayısı belirtmelisin.").then(x => x.delete({timeout: 8000}));
  message.channel.bulkDelete(args[0]).then(() => { message.channel.send(new Discord.MessageEmbed().setDescription("Mesajlar Başarıyla Silindi.").setColor(config.cyan).setTimestamp().setFooter(`${message.author.username} tarafından istendi.`))})
};

exports.help = {
  name: 'clean',
  aliases: []
};
