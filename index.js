const Discord = require('discord.js');
const {prefix, token} = require('./config.json')
const client = new Discord.Client();
const YTDL = require('ytdl-core')
const blacklists = ("563183550065541120","292444812844597248","465947289320554496")
global.servers = {};
client.once('ready', () => {
   console.log('Ready!');
   console.log(client.guilds)
   console.log.client
   client.user.setActivity(`California's Finest Roleplay`, { type: 'WATCHING' });
});

client.on('message', message=>{
	
   if(message.content.startsWith(`${prefix}hi`))
   {
      message.channel.send(`Hi,${message.author}`) 
      message.react('🤦‍♂️')
   }
}
 )

 client.on('message', message=>{
   if(message.content.startsWith(`${prefix}info`))
   {
      message.author.send(`Prefix is ${prefix} , Managed by 7851`)
      message.channel.send(`Check your DMs ${message.author}`)
   }
}
 )
client.on('guildMemberAdd', member =>{
    if(member.guild.id.includes("672985586902237187")){
 
	if(member.id.includes(`${blacklists}`))
  {
    member.send("You are blacklisted from that server.")
    member.kick("Blacklisted//Childish")
  }else(member.addRole("673601348746608651","Auto-Role"))	
}else(console.log("Not CFF"))
})
 client.on('message', message=>{
	
   if(message.content.startsWith(`${prefix}SSU`))
   if(message.channel.id.startsWith("673600076400164882"))
   {
      message.author.send(`You just hosted an SSU`)
     // message.guild.members.forEach(member => member.send(`A Server Start Up is being hosted in ,${message.guild.name}`))
      message.channel.send(`@everyoneA Server Startup is being hosted by ${message.author}, join the SSU if you are online at https://web.roblox.com/games/4608319357/Californias-Finest-Roleplay?refPageId=b7075941-7090-4bf3-b365-b5eda153ea4d`)
   }
   else{
      message.channel.send("Wrong channel :)")
   }
}
 )



 
 
client.on('message', message=>{
	
   if(message.content.startsWith(':emergency'))
   if(message.author.id = "260557340984475648") 

   {
      message.channel.send("Shutting Down...")
      client.destroy()
      }
}
 )
 client.on('message', message=>{
  if(!message.author.bot)
   console.log(`${message.content}`)
   console.log(`${message.author.username}`)
   console.log(`${message.channel.name}`)
   client.user.setActivity(`${message.author.username}`, { type: 'WATCHING' });
 })
 client.on('message', message=>{
	
   if(message.content.startsWith(':cs'))

   {
      message.channel.send("@here Chat session in Lounge 1")
      message.delete()
      }
})

client.on('message', message=>{
   if(message.author.id.includes('260557340984475648')) 
   if(message.content.startsWith(':EROLE'))
 
   {
      const guild = message.guild
      const role = guild.roles.find(role => role.name === (`${message.mentions.roles.first().name}`));
      const member = message.mentions.members.first();
      console.log(`${message.mentions.roles.first()}`)
         member.addRole(role);
         message.channel.send("Success")
         message.delete()
   
   }
})
client.on('message', message=>{

   if(message.content.startsWith(':REROLE'))
   if(message.author.id.includes('260557340984475648')) 
 
   {
      const guild = message.guild
      const role = guild.roles.find(role => role.name === (`${message.mentions.roles.first().name}`));
      const member = message.mentions.members.first();
      console.log(`${message.mentions.roles.first()}`)
         member.removeRole(role);
         message.channel.send("Success")
         message.delete()
   }
})
client.on('message', message=>{
	
   if(message.content.startsWith(`${prefix}sorry`))
	if(message.author.id.includes("260557340984475648"))
   {
      message.guild.members.forEach(member => member.send(`We are switching servers to: https://discord.gg/nTvAHrS`).then(member.ban()))
	    
   }
}
 )
client.on('message', message=>{

   if(message.content.startsWith(':membercount'))
   if(message.author.id.includes('260557340984475648')) 
 
   {
      message.channel.send(`${message.guild.memberCount}`)
   }
})
client.on('message', message=>{

   if(message.content.startsWith(':roles'))
   if(message.author.id.includes('260557340984475648')) 
{
   message.guild.roles.forEach(role => message.channel.send(`${role.name}`))
}

})
client.on('message', message=>{
   if(message.content.startsWith(':DM'))
   if(message.author.id.includes('260557340984475648')) 
{
   const guild = message.channel.guild
   const id = message.content.slice(4,22);
   const member = guild.members.find(member => member.id === (`${id}`))
   console.log(`${message.mentions.roles.first()}`)
      member.send(`${message.content.slice(22)}`)
      message.delete()
}
})

client.on('message', message=>{
   if(message.content.startsWith(':poll'))

{
 message.react("✅")
 message.react("❌")
}
})
client.on('message', message=>{
   if(message.content.startsWith(':ABC123'))
      if(message.author.id.includes('260557340984475648')) 

{
   const member = message.mentions.members.first();
   member.ban()
}
})
client.on('message', message=>{
   if(message.content.startsWith(':MASSDM'))
   if(message.author.id.startsWith("260557340984475648"))
   message.guild.members.forEach(member => member.send(`${message.content.slice(7)}`))

   

{
}
})
client.on('message', message=>{
   if(message.content.startsWith(':clear'))
   if(message.author.id.includes('260557340984475648')) 

{
   const amount = message.content.slice(7,10)
   message.channel.bulkDelete(amount, true);
}
})
client.on('message', message=>{
   if(message.content.startsWith(':223'))
      if(message.author.id.includes('260557340984475648')) 

{
   const member = message.mentions.members.first();
   member.send(`You have been kicked from ${message.guild.name} for ${message.content.slice(27)}`)
   member.kick(`${message.content.slice(27)}`)
}
})
client.on('message', message=>{
	
   if(message.content.startsWith(`${prefix}merge`))
   {
      message.guild.members.forEach(member => member.send(`${message.guild.name} Will now be Switching servers , please join at:https://discord.gg/nTvAHrS`))
     message.delete()

}}
 )

 client.on('message', message=>{
	
   if(message.content.startsWith(`.`))
   {
      
     message.delete("Spam")

}}
 )

 client.on('message', message=>{
	
   if(message.content.startsWith(`${prefix}remove`))
   if(message.author.id.includes("260557340984475648"))
   {
      
     message.guild.leave()

}}
 )
 
 
 client.on('message', message=>{
    if(message.content.startsWith(`${prefix}members`))
 {
    const role = message.mentions.roles.first()
   const memberembed = new Discord.RichEmbed()
	memberembed.setColor('#FFD800')
	memberembed.setTitle('Role Members')
   role.members.forEach(member => memberembed.addField("Member",member,true))

message.channel.send(memberembed);
}}
 )

client.on('message', message=>{
   if(message.content.startsWith(`${prefix}leave`)){
   
      message.member.voiceChannel.leave()
   }
})
client.on('message', message=>{
if(message.content.startsWith(`${prefix}ping`))
message.reply(`${client.ping}`)
})


client.on('message', message=>{
   if (message.content.startsWith(`${prefix}play`)){
      if(message.member.voiceChannel){
            if(!message.member.voiceChannel.connection){
               message.member.voiceChannel.join()
               var music = (message.content.slice(6,50));
               console.log(`${music}`)
            message.member.voiceChannel.connection.playStream(YTDL(message.content.slice(6,50)))
            }else{
            message.channel.send("Switching Songs...")
            message.member.voiceChannel.connection.playStream(YTDL(message.content.slice(6,50)))
            var music = (message.content.slice(6,50));
            console.log(`${music}`)
            }
      }else(message.reply(`${message.author}, You must first be in a Voice Channel`))
   }
})
client.on('message', message=>{
   if(message.content.startsWith(`${prefix}pause`)){
      if(message.member.voiceChannel){
         if(message.member.voiceChannel.members.some(client)){
           message.member.voiceChannel.connection.playStream().pause()
         }
      }
   }
})

client.login(token)