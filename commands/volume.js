const Discord = require("discord.js");
const config = require("../settings/config.json")
module.exports.run= async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel)return message.reply("Üzgünüm ama müzik çalmak için bir ses kanalında olmanız gerekiyor", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.reply("Bu sunucuda hiçbir şey oynatılmıyor.", message.channel);
    if (!args[0])return message.channel.send(`Mevcut Ses seviyesi: **${serverQueue.volume}**`);
     if(isNaN(args[0])) return message.channel.send(':notes: Sadece numarayı belirtmeniz gerekiyor.').catch(err => console.log(err));
    if(parseInt(args[0]) > 150 ||(args[0]) < 0) return message.reply('150 nin üstünde ve 0 ın altında sayı seçemezsin',message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    let xd = new Discord.MessageEmbed()
    .setDescription(`Ses seviyesi: **${args[0]/1}/100**`)
    .setAuthor("Ses seviyesi değiştirildi.")
    .setColor("#7289DA")
    return message.channel.send(xd);
}
module.exports.help = {
name: "volume",
aliases: ["vol", "vols", "v"]
}