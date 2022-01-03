const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
  name: "developer",
   aliases: ["dev"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------
    const embed = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/909806857588191233/911526088197439498/standard_47.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/911165468067385365/911542045095657522/Comp_1-min_4.gif")
    .setDescription('Here Is My `Developer info`');

    const embed1 = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/909806857588191233/911526088197439498/standard_47.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/911165468067385365/911542045095657522/Comp_1-min_4.gif")
    .setDescription('Here Is My `Developer info`');

    const embed2 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail("https://cdn.discordapp.com/attachments/911165468067385365/911542045095657522/Comp_1-min_4.gif")
    .setDescription(`> <:Youtube:911537245918474251>
 | Youtube
DEVIL NISHANT - [Click Here For Link](https://www.youtube.com/channel/UCzAGQrMCsPo-NOqfFUW0Kjg)
> <:Discord:911534962304516126> | Discord Server
DEVIL'S HOMETOWN - [Click Here To Join](https://discord.gg/XeMGkXUH6Y)
> <:repl:911534961776033812> | Replit
DEVIL NISHANT - [Click Here To View Replit](https://replit.com/@DEVILNISHANT)
> <:GITHUB:911534962010886156> | Github
DEVIL NISHANT - [Click Here For Link](https://github.com/NISHAHT)`);

    let button1 = new MessageButton()
    .setLabel(`BACK`)
    .setEmoji("833802907509719130")
    .setID(`help1`)
    .setStyle("blurple");

    let button2 = new MessageButton()
    .setLabel(`WHITE DEVIL </>#5308`)
    .setID(`help2`)
    .setStyle("blurple");
 
    let row = new MessageActionRow()
    .addComponents(button1, button2);
   

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

        if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }
        if(b.id == "help2") {

            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }


    })

    collector.on('end', (b) => {
        MESSAGE.edit(`This command menu is expired! Type the command again to view.`)
    })

       
    }
  };