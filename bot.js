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

client.on('message', message => {
    if (message.content === '!hi') {
    	message.reply('WELCOM IN DISCORD SERVER ***__DYZER_YT__***');
  	}
});

});

client.on('message', message => {
    if (message.content === '!Rules') {
    	message.reply('***__DYZER_YT__***  
1- No Spaming 
2- No Give me Rank
3- No Give me a Account Minecraft
4- No Send any Discord server here 
5- No Send Any Video in Chat
6- No How You Create Bot or Som');
  	}
});

});

client.on('message', message => {
    if (message.content === '-Channel') {
    	message.reply('Subscrbie***__DYZER_YTChannel__***:https://www.youtube.com/channel/UC6Zwte0sirqK2oAoy3AaBbA');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
