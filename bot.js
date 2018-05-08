const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Pls Wait For Bot He Will Updated');
  	}
});

client.on('message', message => {
    if (message.content === '!hi') {
    	message.reply('WELCOM IN DISCORD SERVER ***__DYZER_YT__***');
  	}
});

client.on('message', message => {
    if (message.content === '!Rules') { 
     	message.reply('***__DYZER_YT__***  
•==============================•
•1► :no_entry_sign: لا تنشر سيرفرات دسكورد بالعام او بالخاص

•2►:no_entry_sign: عدم السب والشتم على الادارة والأعضاء

•3►:no_entry_sign: احترم اللاعبين الاّخرين ولا تزعجهم

•4►:no_entry_sign: ممنوع طلب الحسابات

•5►:no_entry_sign: ممنوع السبام
•==============================•');
                      
    }
});

client.on('message', message => {
    if (message.content === '-Channel') {
    	message.reply('Subscrbie***__DYZER_YTChannel__***:https://www.youtube.com/channel/UC6Zwte0sirqK2oAoy3AaBbA');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
