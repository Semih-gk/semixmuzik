const Discord = require("discord.js");
const config = require("../settings/config.json");

module.exports.run = async (client, message, args) => {
  let ertassla = new Discord.MessageEmbed()
    .setAuthor(client.user.username + " Commands")
    .setColor(config.cyan)
    .setDescription(
      `**Avatar: Etiketlediğin kişinin profil resmini gösterir.** \`[:pp]\`\n\n**Play: Muzik ismi ve ya url ile muzik açabilirsiniz. ** \`[:play]\`\n\n**Now Playing: Şu anda çalan şarkıyı gösterir. ** \`[:np]\`\n\n**Pause: Çalan şarkıyı durdurur. **\`[:pause]\`\n\n**Resume: Durdurulan şarkı devam eder. **\`[:resume]\`\n\n**Stop: Muzik durar ve bot odadan çıkar. **\`[:stop]\`\n\n**Skip: Çalan şarkıyı değiştirir ve sıradaki 2. şarkıyı çalar. **\`[:skip]\`\n\n**Queue: Muzik sırasını gösterir. **\`[:queue]\`\n\n**Bot bilgilerini gösterir. **\`[:stats]\`\n\n** **\n\n**Clean: Belirtilen sayıda mesaj siler.** }\`[:clean]\``
    )
    .setFooter(`Semix`, `${client.user.avatarURL()}`)
    .setTimestamp();
  message.channel.send(ertassla);
};
module.exports.help = {
  name: "help",
  aliases: []
};
