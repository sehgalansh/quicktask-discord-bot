
//Kudo's discord quicktask bot v2.0






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

    //change this to your key and pin
    var key = 'kudo';
    var pin = 'kudo';
   
   
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var url = args[1];
        


        
        
       
        args = args.splice(1);

        if (cmd == 'quicktask') {
            const link = 'http://everoboticslm.herokuapp.com/api/quick_task?key='+key+'&PIN='+pin+'&link='+url;
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
            } else if (cmd == 'masslink') {
                const mlink = 'http://everoboticslm.herokuapp.com/api/mass_edit?key='+key+'&PIN='+pin+'&link='+url;
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
            } else if (cmd == 'update') {
                var key = args[0];
                var pin = args[1];
                


                bot.sendMessage({
                    to: channelID,
                    message: 'key= '+key+' pin= '+pin
                });
            } else if (cmd == 'show') {
                bot.sendMessage({
                    to: channelID,
                    message: 'key= '+key+' pin= '+pin
                });
            } 
        // switch(cmd) {
            
        //     // types of commands
        //     case 'quicktask':
                
        //     break;
        //     case 'masslink':
                
        //     break; 
        //     case 'update':
                
                
        //     break; 
        //     case 'show':
                
                

                
        //     break; 

        //     //cyber, PD quick task and other functions to be added here
        //  }
     }
});
