const who = require('./commands/who.js');
const quote = require('./commands/quotes.js');
const ping = require('./commands/ping.js');
const help = require('./commands/help.js');
const commands = {
  who,quote,ping,help,
}
module.exports = async function(msg) {
    console.log(msg.content);
      let tokens = msg.content.split(' ');
      let command = tokens.shift();
      if (command.charAt(0) === '.') {
        command = command.substring(1);
        commands[command](msg, tokens);
      }
}