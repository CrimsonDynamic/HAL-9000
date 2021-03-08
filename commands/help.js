const Discord = require('discord.js');
module.exports = function(msg, args,client,user){
      const exampleEmbed = new Discord.MessageEmbed()
        .setColor('red')
        //.attachFiles(['./assets/Cecille.jpg'])
        .setTitle('Help')
        //.setURL('https://discord.js.org/')
        .setAuthor('HAL-9000', 'https://i.imgur.com/a/F0sxS5m',)
        .setDescription('This is the help page')
        .setThumbnail('attachment://Cecille.jpg')
        .addFields(
            { name: '.ping', value: 'Bot responds with Pong! (Used to test if the bot is alive)' },
            { name: '.quote', value: 'This gives a movie quote (Someday gonna make an add quote function so you can add your own quotes)'},
            { name: '.who', value:'Says who the bot is'},
            { name: '.pun', value: 'Not implemented yet!'}
        )
        .setTimestamp()
        .setFooter('HAL-9000');
    msg.channel.send(exampleEmbed);
 }