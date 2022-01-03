const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "invite",
  aliases: ["info"],
  description: "Shows all commands of the bot",

  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("My Info")
      .setDescription(`> <:Youtube:911537245918474251>| Youtube
Boobs - [Click Here For Link](https://www.youtube.com/)
> <:Discord:911534962304516126> | Discord Server
Pussy - [Click Here To Join](https://www.youtube.com/)
> <:repl:911534961776033812> | Replit
Dick inside pussy - [Click Here To View Replit](https://www.youtube.com/)
> <:GITHUB:911534962010886156> | Github
Pussy came Girl pregnent - [Click Here For Link](https://www.youtube.com/)`)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("Click on these buttons to know more about me!")
      .setColor("#FFFFF0")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Invite Me') 
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=927524416789807185&permissions=1240410213334&scope=bot`)

      let button2 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel("THX FOR INVITING")
      .setID('button2')

      message.channel.send('INVITE ME :>')
 
      return message.channel.send(helpEmbed,{
        button: [button1,button2],
      });

  },
};