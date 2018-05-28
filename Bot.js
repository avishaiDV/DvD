const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDQ5MjMxNDI5NDQ5MTU0NTYw.De3H6A.oiPmF9ui8PHHt5ifdb-0D-B2n4A);
