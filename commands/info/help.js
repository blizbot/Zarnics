const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {

    const embed = new Discord.MessageEmbed()
    .setDescription(`Hey ${message.author}, I am ${client.user} I am Devloped By <@849299149874004019>`);
    const embed1 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setDescription('`clear-queue`,`filter-list`,`filters`,`loop`,`now-playing`,`pause`,`play`,`queue`,`resume`,`search`,`shuffle`,`skip`,`stop`,`volume`');

    const embed2 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setDescription('`help`,`invite`,`developer`');

    const embed3 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setDescription(`Hey ${message.author},I am ${client.user}
    <:904592062446444585:912284177846640681> [Invite Me](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=3275895&scope=bot)
    [Support](https://discord.gg/QEeFH4N3u3)`);
    
    const embed4 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setDescription(`My Ping is - ${client.ws.ping}`);
    
    let button1 = new MessageButton()
    .setLabel(`Music Commands`)
    .setID(`help1`)
    .setEmoji('🔊')
    .setStyle("blurple");

    let button2 = new MessageButton()
    .setLabel(`Random Commands`)
    .setID(`help2`)
    .setEmoji('❓')
    .setStyle("blurple");

    let button3 = new MessageButton()
    .setLabel(`INVITE ${client.user.username}`)
    .setID(`help3`)
    .setEmoji('904592062446444585')
    .setStyle("blurple");

    let button4 = new MessageButton()
    .setLabel(`PING`)
    .setID(`help4`)
    .setEmoji('862306785007632385')
    .setStyle("blurple");

    

    let row = new MessageActionRow()
    .addComponents(button1,button2,button3,button4);


    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }
       
        if(b.id == "help3") {
            
            MESSAGE.edit(embed3, row);
            await b.reply.defer()

        }

        if(b.id == "help4") {
            
            MESSAGE.edit(embed4, row);
            await b.reply.defer()

        }


    })

    collector.on('end', (b) => {
        MESSAGE.edit(`This help menu is expired! Type the command again to view.`)
    })

//WHITE DEVIL OP
    }
  };