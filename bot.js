const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [`+help ON ${client.guilds.size} Servers`,`.help ${client.users.size} Users`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/clo_wiin`);
    }, ms);

});


client.login('NDU0NzkzODA2MjA2NzMwMjYw.DfypiQ.pPtOeGzrDYOdFNgRUIQFQMT0Roo');


