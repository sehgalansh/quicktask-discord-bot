//Kudo's discord quicktask bot v1.0
//mimics keyboard shortcuts for eve 
 var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//  logger settings
 logger.add(new logger.transports.Console, {
colorize: true
});
logger.level = 'debug';
 var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
     if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var url = args[1];
       
        args = args.splice(1);
        switch(cmd) {
            // types of commands
            case 'quicktask':
                const link = 'http://127.0.0.1:5000/quicktask/'+ url;
                // fetch(link)
                // .then(data=>{return data.json()})
                // .then(res=>{console.log(res)})     not using anymore
                 var xhr = new XMLHttpRequest();
                xhr.open('GET', link, true);
                xhr.send();
                 bot.sendMessage({
                    to: channelID,
                    message: 'Quick task request successful! Check your bot!'
                });
            break;
            case 'masslink':
                const mlink = 'http://127.0.0.1:5000/masslink/'+ url;
                    // fetch(link)
                    // .then(data=>{return data.json()})
                    // .then(res=>{console.log(res)})
                var xhr = new XMLHttpRequest();
                xhr.open('GET', mlink, true);
                xhr.send();
                bot.sendMessage({
                    to: channelID,
                    message: 'Mass link change request successful! Check your bot!'
                });
            break; 
             //cyber, PD quick task and other functions to be added here
         }
     }
}); 
