
//DBD.JS
const dbddb = require('dbd.db')
const dbdjs = require('dbdjs.db')

const dbd = dbddb('database')
const col = dbd.collection({ name: 'Variables' })
const db = new dbdjs.Database({
  path: "./database/",
  tables: [{ name: "main" }]
})

db.once('ready', async () => {
  const all = await col.find({})

  for (const obj of all) {
    if (obj.variable) {
      if (obj.varID == '0') await db.set("main", `${obj.variable}`, obj.value)
      else await db.set("main", `${obj.variable}_${obj.varID}`, obj.value)
    } else if (obj.guild) {
      await db.set("main", `invite-tracker_${obj.guild}_${obj.id}`, {
        inviter: {
          id: obj.inviter.id,
          code: obj.inviter.code
        },
        real: obj.real,
        fake: obj.fake
      })
    }
  }
})

db.connect()


const aoi = require('aoi.js')
const bdfd = new aoi.Bot({
  autoUpdate: true,
  sharding: false,
  shardAmount: 2,
  token: "ODI4MjAzMjMzOTg1NTYwNTg2.YGmKXg.qMWkx2Q-yqv8Z-ObnuqLcIrH6YU",
  prefix: [".", "<@!828203233985560586>", "<@828203233985560586>"],
  mobile: true,
  suppressAll: false,
  errorMessage: `{description:**Er ging iets mis tijdens het gebruiker van dat commando!**}{color:FF0000}`
})

bdfd.onMessage({
  guildOnly: false,
  respondToBots: false
})
bdfd.status({
  text: "Kippieldv Bot | .help",
  type: "COMPETING",
  status: "idle",
  time: 12
})
bdfd.status({
  text: ".help | Kippieldv Bot",
  type: "COMPETING",
  status: "idle",
  time: 12
})
//DB-Script
/*const Dlang = require('discordbot-script')
const bot = new Dlang({
  token: "ODI4MjAzMjMzOTg1NTYwNTg2.YGmKXg.qMWkx2Q-yqv8Z-ObnuqLcIrH6YU",
  prefix: [".", "<@!828203233985560586>", "<@828203233985560586>"]
})
bot.MessageEvent()*/

bdfd.loadCommands(`./Commands/`)
//Tickets


//Kick
bdfd.command({
  name: "kick",
  code: `
 $reply[$messageID;
 $color[$getUserVar[Kleur]]
 $kick[$mentioned[1];$messageSlice[1;2000]]
 $title[Kick]
 $description[
 Gekicked: <@$mentioned[1]>
 Gekicked Door: <@$authorID>
 Reden: $messageSlice[1;2000]]
 $onlyIf[$findUser[$message!=$clientID;{title:Oeps..}{description:Ik kan mezelf niet kicken!}]
 $onlyIf[$findUser[$message!=$authorID;{title:Oeps..}{description:Je kan jezelf niet kicken!}{color:FF0000}]
 $onlyIf[$message!=;{title:Oeps..}{description:Wie wil je kicken?}{color:FF0000}]
 $onlyIf[$messageSlice[1;2000]!=;{title:Oeps..}{description:Wat is je reden?}{color:FF0000}]
$onlyIf[$getUserVar[BadgeStaff]==<:Staff:868120936992358460>;Je hebt perms nodig (Tijdelijke error!)]


 `
});
//Ban
bdfd.command({
  name: "ban",
  code: `
 $color[$getUserVar[Kleur]]
 $ban[$mentioned[1];$messageSlice[1;2000]]
 $title[Ban]
 $description[
 Banned: $mentioned[1]
 Gebanned Door: <@$authorID>
 Reden: $messageSlice[1;2000]]
  $onlyIf[$findUser[$message!=$clientID;{title:Oeps..}{description:Ik kan mezelf niet kicken!}]
 $onlyIf[$findUser[$message!=$authorID;{title:Oeps..}{description:Je kan jezelf niet bannen!}{color:FF0000}]
 $onlyIf[$message!=;{title:Oeps..}{description:Wie wil je bannen?}{color:FF0000}]
 $onlyIf[$messageSlice[1;2000]!=;{title:Oeps..}{description:Wat is je reden?}{color:FF0000}]
$onlyIf[$getUserVar[BadgeStaffPlus]==<:Staff_Plus:868489831695650866>;Je hebt perms nodig (Tijdelijke error!)]


 `
});
bdfd.command({
name: "createslash",
code: `$createSlashCommand[$guildID;youtube;Laat de linkjes van youtube zien]
$createSlashCommand[$guildID;discord;Laat de discord invite link zien]
$createSlashCommand[$guildID;steam;Laat de linkjes van steam zien]
$createSlashCommand[$guildID;twitch;Laat de linkjes van twitch zien]
$createSlashCommand[$guildID;tiktok;Laat de linkjes van TikTok zien]
$createSlashCommand[$guildID;embed;Stuurt een embed;kanaal:Het kanaal waarnaar ik de embed moet sturen:true:7;titel:De titel voor de embed:true:3;beschrijving:De beschrijving voor de embed:true:3;kleur:De kleur voor de embed:true:3;footer:De footer voor de embed:false:3;afbeelding:De afbeelding voor de embed:false:3]
$createSlashCommand[$guildID;help;Laat alle commando's zien;categorie:De categorie (Alle categoriën staan in /help zonder optie):false:3]
$createSlashCommand[$guildID;suggestie;Verstuurt een suggestie;suggestie:Jouw suggestie voor de server/bot:true:3]
$reply[$messageID;{title:Slash Commands}{description:De slash commands zijn gemaakt!}{color:$getUserVar[Kleur]};$getUserVar[Pings]]
$onlyForIDs[699320106978639874;689192849719296056;]
`

})

bdfd.command({
name: "createslashec",
code: `$createSlashCommand[$guildID;leaderboard;Laat het leaderboard zien]

$reply[$messageID;{title:Slash Commands}{description:De slash commands voor economy zijn gemaakt!}{color:$getUserVar[Kleur]};$getUserVar[Pings]]
$onlyForIDs[699320106978639874;689192849719296056;]
`

})
//Custom Command 2
bdfd.command({
  name: "youtube",
  code: `$reply[$messageID;$customEmoji[slashcommand] <t:1643846400:R> reageer ik niet meer op normale commands (zoals \`.help\`), dit omdat discord een nieuw iets uibrengt dat dit stopt! Gebruik mijn slash commands!;$getUserVar[Pings]]
  
  `
})
let DevMode = "$interactionReply[⚠️ Developer Mode!;]"
bdfd.interactionCommand({
  name: "youtube",
  code: `
  $interactionReply[;{title:YouTube}
  {description:[Mijn YouTube](https://www.youtube.com/channel/UCJOSqi2Z3JapL6xFPZ0vOUw)}
  {footer:Kippieldv Bot}
  {color:$getUserVar[Kleur]}]

  `
})
//Custom Command 3
bdfd.command({
  name: "instagram",
  aliases: ["insta"],
  code: `$reply[$messageID;$customEmoji[slashcommand] <t:1643846400:R> reageer ik niet meer op normale commands (zoals \`.help\`), dit omdat discord een nieuw iets uibrengt dat dit stopt! Gebruik mijn slash commands!;$getUserVar[Pings]]
  `
})
bdfd.interactionCommand({
  name: "instagram",
  code: `$interactionReply[;{title:Instagram}
  {description:[Mijn Instagram](https://www.instagram.com/Kippieldv/)
  [6 Katten Instagram](https://www.instagram.com/6katten/)}
  {footer:Kippieldv Bot}
  {color:$getUserVar[Kleur]}]
  `
})
//Custom Command 4
bdfd.command({
  name: "discord",
  code: `$reply[$messageID;$customEmoji[slashcommand] <t:1643846400:R> reageer ik niet meer op normale commands (zoals \`.help\`), dit omdat discord een nieuw iets uibrengt dat dit stopt! Gebruik mijn slash commands!;$getUserVar[Pings]]
  `
})
bdfd.interactionCommand({
  name: "discord",
  code: `$interactionReply[;{title:Discord}
  {description:[Discord Invite Link](https://discord.gg/gSWXUkB)}
  {footer:Kippieldv Bot}
  {color:$getUserVar[Kleur]}]
  `
})
//Custom Command 5
bdfd.command({
  name: "steam",
  code: `$reply[$messageID;$customEmoji[slashcommand] <t:1643846400:R> reageer ik niet meer op normale commands (zoals \`.help\`), dit omdat discord een nieuw iets uibrengt dat dit stopt! Gebruik mijn slash commands!;$getUserVar[Pings]]
  `
})
bdfd.interactionCommand({
  name: "steam",
  code: `$interactionReply[;{title:Steam}
  {description:[Mijn Steam Groep](http://steamcommunity.com/groups/kippenhok)}
  {footer:Kippieldv Bot}
  {color:$getUserVar[Kleur]}]
  `
})
//Custom Command 6
bdfd.command({
  name: "twitch",
  code: `$reply[$messageID;$customEmoji[slashcommand] <t:1643846400:R> reageer ik niet meer op normale commands (zoals \`.help\`), dit omdat discord een nieuw iets uibrengt dat dit stopt! Gebruik mijn slash commands!;$getUserVar[Pings]]
  `
})
bdfd.interactionCommand({
  name: "twitch",
  code: `$interactionReply[;{title:Twitch}
  {description:[Mijn Twitch](https://www.twitch.tv/Kippieldv)}
  {footer:Kippieldv Bot}
  {color:$getUserVar[Kleur]}]
 `
})
//Custom Command 7https://www.tiktok.com/@sanneldv
bdfd.command({
  name: "tiktok",
  code: `$reply[$messageID;$customEmoji[slashcommand] <t:1643846400:R> reageer ik niet meer op normale commands (zoals \`.help\`), dit omdat discord een nieuw iets uibrengt dat dit stopt! Gebruik mijn slash commands!;$getUserVar[Pings]]
  `
})
bdfd.interactionCommand({
  name: "tiktok",
  code: `$interactionReply[;{title:TikTok}
  {description:[Mijn TikTok](https://www.tiktok.com/@sanneldv)}
  {footer:Kippieldv Bot}
  {color:$getUserVar[Kleur]}]
  `
})
//EmbedSender
bdfd.command({
  name: "embed",
  aliases: ["embedmsg,embed-bericht"],
  code: `
$reply[$messageID;$customEmoji[slashcommand] <t:1643846400:R> reageer ik niet meer op normale commands (zoals \`.help\`), dit omdat discord een nieuw iets uibrengt dat dit stopt! Gebruik mijn slash commands!;$getUserVar[Pings]]
$onlyIf[$getUserVar[BadgeStaff]==<:Staff:868120936992358460>;Je hebt perms nodig (Tijdelijke error!)]
`})
//$[{title:Oeps..}{description:Er is iets fout gegaan! Probeer het opnieuw!}{color:FF0000}]`})
bdfd.interactionCommand({
  name: "embed",
  code: `
$channelSendMessage[$message[1];{title:$message[2]}{description:$message[3]}{color:$message[4]}{footer:$message[5]}{image:$message[6]}]
$interactionReply[Bericht gestuurd! $customEmoji[ja];]
$onlyIf[$getUserVar[BadgeStaff]==<:Staff:868120936992358460>;Je hebt perms nodig (Tijdelijke error!)]
`
})

//tEMPMUTE
bdfd.command({
  name: "tempmute",
  code: `
$giveRole[$findUser[$message[1]];815165956799856651]
$channelSendMessage[$channelID;{title:Mute}{description:**Gebruiker:** <@$findUser[$message[1]]> ($findUser[$message[1]])
**Tijd:** $message[2]
**Moderator:** $authorID
**Reden:** $replaceText[$replaceText[$message;$message[1];];$message[2];]}{color:GREEN}]
$setTimeout[$message[2];Gebruiker: $findUser[$message[1]]
reason: $getObjectProperty[reason]
mod: $authorID
time: $message[2]]
$addObjectProperty[reason;$replaceText[$replaceText[$message;$message[1];];$message[2];]]
$createObject[{}]

$onlyIf[$rolePosition[$highestRole]!=$rolePosition[$highestRole[$findUser[$message[1]]]];Je kan je eigen rol niet muten]
$onlyIf[$rolePosition[$highestRole]<=$rolePosition[$highestRole[$findUser[$message[1]]]];Je kan hogere mensen niet muten]
$onlyIf[$findUser[$message[1]]!=$authorID;Je kan jezelf niet muten]
$onlyIf[$message[2]!=;Geef een tijd op]
$argsCheck[>2;De argumenten missen]
$onlyIf[$findUser[$message[1]]!=;Gebruiker bestaat niet]

`
});
bdfd.timeoutCommand({
  code: `$sendDM[$timeoutData[Gebruiker];{title:Unmute}{description:**Gebruiker:** <@$timeoutData[Gebruiker]> ($timeoutData[Gebruiker])
**Tijd:** $timeoutData[time]
**Moderator:** $userTag[$timeoutData[mod]]
**Reden:** $timeoutData[reason]}{color:GREEN}]
$sendDM[$timeoutData[mod];{title:Unmute}{description:**Gebruiker:** <@$timeoutData[Gebruiker]> ($timeoutData[Gebruiker])
**Tijd:** $timeoutData[time]
**Moderator:** $userTag[$timeoutData[mod]]
**Reden:** $timeoutData[reason]}{color:GREEN}]
$takeRole[$timeoutData[Gebruiker];815165956799856651]`
});
bdfd.variables({
  prefix: "."
})
//$onlyIf[$rolePosition[$highestRole[$clientID]<$rolePosition[$roleID[$getServerVar[mute]]];{title:Oeps..}{description:**Mijn rol moet hoger zijn dan <@&$roleID[$getServerVar[mute]]>!**}{color:FF0000}]
//$onlyIf[$rolePosition[$highestRole[$clientID]<$rolePosition[$highestRole[$mentioned[1]]];{title:Oeps..}{description:**Mijn rol moet hoger zijn dan die van <@$mentioned[1]>!**}{color:FF0000}]
//$onlyIf[$roleExists[$getServerVar[mute]]!=true;{title:Oeps..}{description:**Mute rol bestaat niet!**}{color:FF0000}]
//$onlyIf[$userExists[$mentioned[1]]==true;{title:Oeps..}{description:**Gebruiker bestaat niet!**}{color:FF0000}]


//Tempmute Variabelen

bdfd.variables({
  mute: "Tandloos"
})
bdfd.command({
  name: "muterol",
  code: `$setServerVar[mute;Tandloos]
$title[Mute rol]
$editIn[3s;{description:Klaar!}{color:$getUserVar[Kleur]}]
$description[Wacht even, we zijn bezig met dingen te regelen!]
$color[$getUserVar[Kleur]]
`

})
//Join

bdfd.onJoined()


bdfd.command({
  name: "reboot",
  code: `$exec[npm start]
  $reply[$messageID;Ik ben nu aan het rebooten!;$getUserVar[Pings]]
  $onlyForIDs[699320106978639874;689192849719296056;]`
})
bdfd.variables({
  mh: "",
})



bdfd.command({
  name: "$alwaysExecute",
  code: `$setChannelVar[mh;$getChannelVar[mh]\n\ Gebruiker: $userTag\ (Op $hour:$minute)\n\`$message\`\n\n]`
})

bdfd.command({
  name: "transcript",
  code: `$createFile[$getChannelVar[mh;$mentionedChannels[1;yes]];transcriptlog.html]
$useChannel[760133701199462421]
$reply[$messageID;Het transcript voor <#$mentionedChannels[1;yes]> is opgeslagen!;$getUserVar[Pings]]
$onlyIf[$getChannelVar[mh]!=;{title:Oeps..}{description:Er is geen transcript voor <#$mentionedChannels[1;yes]>!}{color:#FF0000}]
  $onlyForCategories[739553468238266510;{title:Oeps..}{description:Dit is geen ticket!}{color:#FF0000}]
$onlyIf[$getUserVar[BadgeStaff]==<:Staff:868120936992358460>;Je hebt perms nodig (Tijdelijke error!)]`})

bdfd.command({
  name: "eval",
  code: `

$title[Eval]
$description[
**Input**
\`\`\`js
$message\`\`\`
**Output**
\`\`\`js
$replaceText[$djsEval[$message;yes];undefined;Error]
\`\`\`]

$color[$getUserVar[Kleur]]
$argsCheck[>1;{title:Oeps..}{description:Wat moet ik voor je evallen?}{color:$getUserVar[Kleur]}]
$onlyForIDs[699320106978639874;{title:Oeps..}{description:Jij kan dit niet gebruiken!}{color:FF0000}]`
})

//help
bdfd.command({
  name: "OUDHELP",
  code: `$reply[$messageID;{author:Help!:$serverIcon}{color:$getUserVar[Kleur]}{field:Custom Commands:.youtube
.instagram
.discord
.steam
.twitch
.tiktok:yes}{field:Tickets:.new:yes}{field:Suggesties:.suggestie:yes}{field:Economy:__Statistieken__
.balans 
.profiel

__Verdien__
.werk
.smeek
.jacht
.vis
.post
.vecht
.mine

__Kopen__
.winkel
.buy <product>

__Claim__
.daily
.weekly

__Rekening__
.dep <all/getal>
.with <all/getal>:yes};$getUserVar[Pings]]`
})


bdfd.variables({
  tag: ""
})



bdfd.variables({
  suggestchannel: "800114120019804230",
  suggestchannel2: "e"
})

bdfd.command({
  name: "addreaction",
  code: `$addMessageReactions[760131964417736744;839036501966192650;✉️]`
})

bdfd.command({
  name: "suggestie",
  code: `
$addReactions[$customEmoji[ja];$customEmoji[nee]]
$title[$nickname[$authorID]#$discriminator[$authorID]]
$thumbnail[$authorAvatar]
$footer[Reageer met ja of nee!]
$description[**Suggestie:** $message]
$addField[Status;Wachtend;no]
$color[ff4500]
$useChannel[$getServerVar[suggestchannel]]
$reply[$messageID;Suggestie gestuurd! $customEmoji[ja];$getUserVar[Pings]]
$onlyIf[$getServerVar[suggestchannel2]==e;{title::x: Oeps}{description:**Maak eerst een suggestie kanaal**}{color:FF0000}]
$onlyIf[$message!=;{title:$customEmoji[nee] Oeps}{description:Wat is je suggestie?}{color:FF0000}]


`});




bdfd.variables({
  suggestchannel2: "e"
})
bdfd.command({
  name: "suggestie-kanaal",
  code: `$setServerVar[suggestchannel;$mentionedChannels[1]]`
})


let note = "$replaceText[$replaceText[$checkCondition[$message[2]==];true;*Geen reden*];false;$messageSlice[1]]";
bdfd.command({
  name: "accepteer",
  code: `
$editMessage[$message[1];{thumbnail:$getEmbed[$getServerVar[suggestchannel];$message[1];thumbnail]}{title:$getEmbed[$getServerVar[suggestchannel];$message[1];title]}{description:$getEmbed[$getServerVar[suggestchannel];$message[1];description]}\n{field:Geaccepteerd door:$userTag[$authorID]:no}\n{field:Reden:${note}:no}
{color:GREEN}{timestamp}{field:Status:Geaccepteerd:no};$getServerVar[suggestchannel]]

$reply[$messageID;$customEmoji[ja] **Succesvol $getEmbed[$getServerVar[suggestchannel];$message[1];title]'s suggestie geaccepteerd!**;$getUserVar[Pings]]

$onlyIf[$messageExists[$getServerVar[suggestchannel];$message[1]]!=false;{title:Suggestie bestaat niet (meer)}{color:RED}]
$onlyIf[$message[1]!=;{title:Welke suggestie wil je accepteren? (Bericht ID)}{color:RED}]
$onlyIf[$getUserVar[BadgeStaff]==<:Staff:868120936992358460>;Je hebt perms nodig (Tijdelijke error!)]
`});

bdfd.variables({
  suggestchannel: " "
})

let notes = "$replaceText[$replaceText[$checkCondition[$message[2]==];true;*Geen reden*];false;$messageSlice[1]]";
bdfd.command({
  name: "weiger",
  code: `
$editMessage[$message[1];{thumbnail:$getEmbed[$getServerVar[suggestchannel];$message[1];thumbnail]}{title:$getEmbed[$getServerVar[suggestchannel];$message[1];title]}{description:$getEmbed[$getServerVar[suggestchannel];$message[1];description]}{field:Geweigerd door:$userTag[$authorID]:no}{field:Reden:${notes}:no}
{color:RED}{timestamp}{field:Status:Geweigerd:no};$getServerVar[suggestchannel]]

$reply[$messageID;$customEmoji[ja] **Succesvol $getEmbed[$getServerVar[suggestchannel];$message[1];title]'s suggestie geweigerd!**;$getUserVar[Pings]]

$onlyIf[$messageExists[$getServerVar[suggestchannel];$message[1]]!=false;{title:Suggestie bestaat niet (meer)}{color:RED}]
$onlyIf[$message[1]!=;{title:Welke suggestie wil je accepteren? (Bericht ID)}{color:RED}]
$onlyIf[$getUserVar[BadgeStaff]==<:Staff:868120936992358460>;Je hebt perms nodig (Tijdelijke error!)]
`});

bdfd.command({
  name: "staffhelp",
  code: `
  $reply[$messageID;{title:Staff Help}{description:**Suggesties**
  .suggestie-kanaal <kanaal>
  .accepteer <message id> <reden>
  .weiger <message id> <reden>
  .add <user id>
  .remove <user id>
  **Moderatie**
  .tempmute <mention> <tijd>: <reden>
  .ban <mention>
  .kick <mention>
  ~~.warn <mention>~~
  **Algemeen**
  .embed <kanaal> <TITEL (1 woord)> <beschrijving>}{color:$getUserVar[Kleur]};$getUserVar[Pings]]
  $onlyIf[$getUserVar[BadgeStaff]==<:Staff:868120936992358460>;Je hebt perms nodig (Tijdelijke error!)]
  `
})

bdfd.readyCommand({
  channel: "839400923217264700",
  code: `$log[-=-=-=-=-=-=-]
  $wait[1s]
  $log[Bot online!]
  $wait[2s]
  $log[Laden.]
  $wait[1s]
  $log[Laden...]
  $wait[1s]
  $log[Laden..]
  $wait[1s]
  $log[Laden.]
  $wait[1s]
  $log[Opstarten..]
  $wait[1s]
  $log[Opstarten.]
  $wait[2s]
  $log[-=-=-=-=-=-=-]`
})


bdfd.command({
  name: "add",
  code: `$reply[$messageID;**:white_check_mark: Succesvol <@$message[1]> toegevoegd aan dit ticket!**;$getUserVar[Pings]]
  $modifyChannelPerms[$channelID;+viewchannel;+sendmessages;$message[1]]
  $onlyIf[$userExists[$message[1]]==true;{title:Oeps..}{description:Je moet een USER ID opgeven!}{color:FF0000}]
    $onlyForCategories[739553468238266510;{title:Oeps..}{description:Dit is geen ticket!}{color:#FF0000}]
    $onlyIf[$getUserVar[BadgeStaff]==<:Staff:868120936992358460>;Je hebt perms nodig (Tijdelijke error!)]`})
//$[{title:Oeps..}{description:Je moet een user id opgeven!}{color:RED}]`

bdfd.command({
  name: "remove",
  code: `$reply[$messageID;**:white_check_mark: Succesvol <@$message[1]> verwijderd uit dit ticket!**;$getUserVar[Pings]]
  $modifyChannelPerms[$channelID;-viewchannel;-sendmessages;$message[1]]
  $onlyIf[$userExists[$message[1]]==true;{title:Oeps..}{description:Je moet een USER ID opgeven!}{color:FF0000}]
    $onlyForCategories[739553468238266510;{title:Oeps..}{description:Dit is geen ticket!}{color:#FF0000}]
    $onlyIf[$getUserVar[BadgeStaff]==<:Staff:868120936992358460>;Je hebt perms nodig (Tijdelijke error!)]`})
//$[{title:Oeps..}{description:Je moet een user id opgeven!}{color:RED}]`

bdfd.command({
  name: "werk",
  code: `$reply[$messageID;{title:Werk}{description:Je hebt nog geen werk gekozen kies hier onder om een werk aan te nemen!
  
  Vakkenvuller
 
  Bouwvakker
  
  Bakker
  
  Politie


  **Kies een van deze beroepen hier boven(.werk-<......>)**
  }{footer:}{color:$getUserVar[Kleur]};$getUserVar[Pings]]
  $onlyIf[$getUserVar[Werk1]==off;{execute:test}]
  $onlyIf[$message[1]==; ]  
  `
})

bdfd.variables({
  Werk1: "off",
  Geld: "0",
  Bank: "0",
  time: ""
})

bdfd.awaitedCommand({
  name: "test",
  code: `$setUserVar[Geld;$sum[$getUserVar[Geld];$random[300;320]]]
       $reply[$messageID;Je hebt gewerkt en €$random[300;320],-  verdiend!;$getUserVar[Pings]]
       $cooldown[1h;$setUserVar[time;%time%]{execute:werkcooldown}]
       `
})
bdfd.awaitedCommand({
  name: "PolitieError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je hebt al een beroep}{color:$getUserVar[Kleur]};$getUserVar[Pings]]`
})
bdfd.command({
  name: "werk-politie",
  code: `$reply[$messageID;{title:Werk}{description:Gefeliciteerd $username je bent een politie geworden!}{footer:}{color:$getUserVar[Kleur]};$getUserVar[Pings]]
  $setUserVar[Werk1;on]
  $onlyIf[$getUserVar[Werk1]!=on;{execute:PolitieError}]  `})
bdfd.command({
  name: "werk-vakkenvuller",
  code: `$reply[$messageID;{title:Werk}{description:Gefeliciteerd $username je bent een vakkenvuller geworden!}{footer:}{color:$getUserVar[Kleur]};$getUserVar[Pings]]
  $setUserVar[Werk1;on]
  $onlyIf[$getUserVar[Werk1]!=on;{execute:PolitieError}  `})
bdfd.command({
  name: "werk-bouwvakker",
  code: `$reply[$messageID;{title:Werk}{description:Gefeliciteerd $username je bent een bouwvakker geworden!}{footer:}{color:$getUserVar[Kleur]};$getUserVar[Pings]]
  $setUserVar[Werk1;on]
  $onlyIf[$getUserVar[Werk1]!=on;{execute:PolitieError} `})
bdfd.command({
  name: "werk-bakker",
  code: `$reply[$messageID;{title:Werk}{description:Gefeliciteerd $username je bent een bakker geworden!}{footer:}{color:$getUserVar[Kleur]};$getUserVar[Pings]]
  $setUserVar[Werk1;on]
  $onlyIf[$getUserVar[Werk1]!=on;{execute:PolitieError} `})//GOD kijk toch eens boven dit daar staat alles al*/

bdfd.command({
  name: "resetuservar",
  code: `Resetted everyones money
$resetUserVar[Geld]  $onlyForIDs[699320106978639874;689192849719296056;]`
})

bdfd.command({
  name: "bal",
  aliases: ["balans"],
  code: `$reply[$messageID;
{title:Balans}
{description:$username[$findUser[$mentioned[1];yes]]'s balans}
{field:Portemonnee:$replaceText[€$getUserVar[Geld;$findUser[$mentioned[1];yes]],-;€NaN,-;Error!]:yes}
{field:Bank (NIET GEBRUIKEN!):$replaceText[€$getUserVar[Bank;$findUser[$mentioned[1];yes]],-;€NaN,-;Dit lost zichzelf op na een aantal minuten]:yes}
{color:$getUserVar[Kleur]};$getUserVar[Pings]]  

`
})
let time = "$cooldown[1h;%time%]";
bdfd.awaitedCommand({
  name: "werkcooldown",
  code: `$reply[$messageID;{title:Oeps..}{description:Je kan maar één keer per uur werken! Wacht nog $getCooldownTime[60m;user;werk;$authorID]

 }{color:FF0000};$getUserVar[Pings]]`
})

bdfd.variables({
  HuntingRifle: "",
  FishingRod: "",
  NutelozeAardappel: "",
  Pickaxe: "",
  Laptop: "",
  GeenItem: "**Geen spullen**",
  Farmer: "",
  GeenGebouw: "Geen gebouwen",
  FarmerAantal: "",
  KoeHoeveelHeid: "0",
  KipHoeveelHeid: "0"
})


bdfd.command({
  name: "shop",
  aliases: ["winkel"],
  code: `$reply[$messageID;
{title:Winkel}
{description:}
{field:Spullen:

**🔫Hunting Rifle**  **:dollar:€2500,- **

**:fishing_pole_and_fish:Fishing Rod**  **:dollar:€1500,- **

**:potato:Aardappel**  **:dollar:€690000000,-**

**:pick:Pickaxe**  **:dollar:€750,- **

**:computer:Laptop**  **:dollar:    €1000,- **
:yes}{footer:Om dingen te kopen schrijf ".koop <.....>"}
{color:$getUserVar[Kleur]}


{field:Dieren & Gebouwen:

**Dieren**

**:chicken:Kippen** **:dollar:€300,-**

**:cow:Koeien**  **:dollar:€500,-**

**Gebouwen**

**:farmer:Boerderij** **:dollar:€6000,-** :yes}

;$getUserVar[Pings]]  `})



bdfd.command({
  name: "buy",
  aliases: ["koop"],
  code: `$if[$message==]
  $reply[$messageID;{title:Oeps..}{description:Wat wil je kopen?}{color:FF0000};$getUserVar[Pings]]
  $endif
  $if[$toLowercase[$message]==laptop]
  $setUserVar[Laptop;**:computer:Laptop**(.post)] $setUserVar[GeenItem;]
  $setUserVar[Geld;$sub[$getUserVar[Geld];1000]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt een laptop gekocht voor €1000,-}{color:00EE00};$getUserVar[Pings]]
    $onlyIf[$getUserVar[Geld]>=1000;{title:Oeps..}{description:Je hebt niet genoeg geld!}{color:FF0000}]
    $onlyIf[$getUserVar[Laptop]!=**:computer:Laptop**(.post);{title:Oeps..}{description:Je hebt al een laptop!}{color:FF0000}]
  $endif
    $if[$toLowercase[$message]==hunting rifle]
    $setUserVar[HuntingRifle;**:gun:Hunting Rifle**(.hunt)] $setUserVar[GeenItem;]
    $setUserVar[Geld;$sub[$getUserVar[Geld];2500]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt een hunting rifle gekocht voor €2500,-}{color:00EE00};$getUserVar[Pings]]
    $onlyIf[$getUserVar[Geld]>=2500;{title:Oeps..}{description:Je hebt niet genoeg geld!}{color:FF0000}]
    $onlyIf[$getUserVar[HuntingRifle]!=**:gun:Hunting Rifle**(.hunt);{title:Oeps..}{description:Je hebt al een hunting rifle!}{color:FF0000}]
  $endif
    $if[$toLowercase[$message]==fishing rod]
    $setUserVar[FishingRod;**:fishing_pole_and_fish:Vishengel**(.fish)] $setUserVar[GeenItem;]
    $setUserVar[Geld;$sub[$getUserVar[Geld];1500]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt een fishing rod gekocht voor €1500,-}{color:00EE00};$getUserVar[Pings]]
  $onlyIf[$getUserVar[Geld]>=1500;{title:Oeps..}{description:Je hebt niet genoeg geld!}{color:FF0000}]
  $onlyIf[$getUserVar[FishingRod]!=**:fishing_pole_and_fish:Vishengel**(.fish);{title:Oeps..}{description:Je hebt al een vishengel!}{color:FF0000}]
  $endif
    $if[$toLowercase[$message]==pickaxe]
    $setUserVar[Pickaxe;**:pick:Pickaxe**(.mine)] $setUserVar[GeenItem;]
    $setUserVar[Geld;$sub[$getUserVar[Geld];750]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt een pickaxe gekocht voor €750,-}{color:00EE00};$getUserVar[Pings]]
    $onlyIf[$getUserVar[Geld]>=750;{title:Oeps..}{description:Je hebt niet genoeg geld!}{color:FF0000}]
    $onlyIf[$getUserVar[Pickaxe]!=**:pick:Pickaxe**(.mine);{title:Oeps..}{description:Je hebt al een pickaxe!}{color:FF0000}]
  $endif
      $if[$toLowercase[$message]==aardappel]
          $setUserVar[NutelozeAardappel;**:potato:Aardappel**(.vecht)] $setUserVar[GeenItem;]
      $setUserVar[Geld;$sub[$getUserVar[Geld];690000000]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt een aardappel gekocht voor €690000000,-}{color:00EE00};$getUserVar[Pings]]
    $onlyIf[$getUserVar[Geld]>=690000000;{title:Oeps..}{description:Je hebt niet genoeg geld!}{color:FF0000}]
        $onlyIf[$getUserVar[NutelozeAardappel]!=**:potato:Aardappel**(.vecht);{title:Oeps..}{description:Je hebt al een aardappel!}{color:FF0000}]
  $endif
     $if[$toLowercase[$message]==kip]
  $setUserVar[Kippen;**:chicken:Kippen**(.ec)] $setUserVar[GeenDieren;]
  $setUserVar[Geld;$sub[$getUserVar[Geld];300]]
     $setUserVar[KippenAantal;$sum[$getUserVar[KippenAantal];1]]
     $setUserVar[KipHoeveelHeid;$sum[$getUserVar[KipHoeveelHeid];1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt een Kip gekocht voor €300,-}{color:00EE00};$getUserVar[Pings]]
  $onlyIf[$getUserVar[KipHoeveelHeid]!=1;{title:Oeps..}{description:Je kan maar één kip kopen!}{color:FF0000}]
  $onlyIf[$getUserVar[FarmerAantal]==1;{title:Oeps..}{description:Je hebt nog geen boerderij!}{color:FF0000}
    $onlyIf[$getUserVar[Geld]>=300;{title:Oeps..}{description:Je hebt niet genoeg geld!}{color:FF0000}]
    
  $endif
    $if[$toLowercase[$message]==koe]
    $setUserVar[Koe;**:cow:Koeien**(.mc)] $setUserVar[GeenDieren;]
    $setUserVar[Geld;$sub[$getUserVar[Geld];500]]
        $setUserVar[KoeAantal;$sum[$getUserVar[KoeAantal];1]]
      $setUserVar[KoeHoeveelHeid;$sum[$getUserVar[KoeHoeveelHeid];1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt een koe gekocht voor €500,-}{color:00EE00};$getUserVar[Pings]]
$onlyIf[$getUserVar[KoeHoeveelHeid]!=1;{title:Oeps..}{description:Je kan maar één koe kopen!}{color:FF0000}]
  $onlyIf[$getUserVar[FarmerAantal]==1;{title:Oeps..}{description:Je hebt nog geen boerderij!}{color:FF0000}
    $onlyIf[$getUserVar[Geld]>=500;{title:Oeps..}{description:Je hebt niet genoeg geld!}{color:FF0000}]
$onlyIf[$getUserVar[BLevel]==3;{title:Oeps..}{description:Je moet boerderij level 3 zijn!}{color:FF0000}]  
     $endif
     $if[$toLowercase[$message]==boerderij]
    $setUserVar[Farmer;**:farmer:Boerderij**] 
    $setUserVar[GeenGebouw;]
    $setUserVar[Geld;$sub[$getUserVar[Geld];6000]]
    $setUserVar[FarmerAantal;$sum[$getUserVar[FarmerAantal];1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt een boerderij gekocht voor €6000,-}{color:00EE00};$getUserVar[Pings]]
    $onlyIf[$getUserVar[Geld]>=6000;{title:Oeps..}{description:Je hebt niet genoeg geld!}{color:FF0000}]  
     $onlyIf[$getUserVar[FarmerAantal]!=1;{execute:FarmerAantalError}]
     
     $endif
     
    `
})
//fixt fixt
bdfd.awaitedCommand({
  name: "FarmerAantalError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je kan alleen één boerderij kopen!}{color:FF0000};$getUserVar[Pings]]`
})

bdfd.command({
  name: "profiel",
  aliases: ["profile"],
  code: `
  $reply[$messageID;{title:$username's Profiel}{thumbnail:$authorAvatar}{description:}{field:
***__Spullen__***:

$replaceText[$textTrim[$getUserVar[GeenItem]];**;]
$replaceText[$textTrim[$getUserVar[HuntingRifle]];**;]
$replaceText[$textTrim[$getUserVar[FishingRod]];**;]
$replaceText[$textTrim[$getUserVar[NutelozeAardappel]];**;]
$replaceText[$textTrim[$getUserVar[Pickaxe]];**;]
$replaceText[$textTrim[$getUserVar[Laptop]];**;]:yes}{field:

***__Dieren__***:

$replaceText[$textTrim[$getUserVar[GeenDieren]];**;]
$replaceText[$textTrim[$getUserVar[Kippen]];**;]
$replaceText[$textTrim[$getUserVar[Koe]];**;]

***__Gebouwen__***:

$replaceText[$textTrim[$getUserVar[GeenGebouw]];**;]
$replaceText[$textTrim[$getUserVar[Farmer]];**;]

***__Geld__***:

Portemonnee: $replaceText[€$getUserVar[Geld],-;€NaN,-;Error!] :dollar:

Bank: $replaceText[€$getUserVar[Bank],-;€NaN,-;Dit lost zichzelf op na een aantal minuten] :dollar:

:no}{color:$getUserVar[Kleur]};$getUserVar[Pings]]  `})

//kijk discord
//ik fix dit wel ff om die lege gaten op te vullen (zo) EERST BUY ja 
//DISCORRD

bdfd.command({
  name: "mine",
  aliases: ["hak"],
  code: `
  $reply[$messageID;{title:Minen}{description:
  Je bent aan het minen. Je hebt **$random[200;400]** Dingen gemined.

  Geld verdiend: **€$random[120;200],-**
$setUserVar[Geld;$sum[$getUserVar[Geld];$random[120;200]]]
$cooldown[15m;{execute:MinenError}]

}{color:$getUserVar[Kleur]};$getUserVar[Pings]]  
$onlyIf[$getUserVar[Pickaxe]==**:pick:Pickaxe**(.mine);{execute:PickaxeError}]  

`})
//gap, die moet voor de $onlyforids en na de $reply daar?

// Daar?
//dAar
bdfd.awaitedCommand({
  name: "PickaxeError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je hebt nog geen pickaxe!}{color:FF0000};$getUserVar[Pings]]`
})
bdfd.awaitedCommand({
  name: "MinenError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je kan maar één keer per 15m minen!}{color:FF0000};$getUserVar[Pings]]`
})

//brb 2 sec k

//back

bdfd.command({
  name: "fish",
  aliases: ["vis"],
  code: `
  $reply[$messageID;{title:Vissen}{description:
  Je bent aan het vissen. Je hebt **$random[1;8]** Vissen gevangen.

  Geld verdiend: **€$random[300;319],-**
$setUserVar[Geld;$sum[$getUserVar[Geld];$random[200;250]]]
$cooldown[15m;{execute:VissenError}]

}{color:$getUserVar[Kleur]};$getUserVar[Pings]]  
$onlyIf[$getUserVar[FishingRod]==**:fishing_pole_and_fish:Vishengel**(.fish);{execute:VishengelError}]  

`})


bdfd.awaitedCommand({
  name: "VishengelError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je hebt nog geen vishengel!}{color:FF0000};$getUserVar[Pings]]`
})
bdfd.awaitedCommand({
  name: "VissenError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je kan maar één keer per 15m vissen!}{color:FF0000};$getUserVar[Pings]]`
})



// hier boven geld farmer hehe
//fixed

bdfd.awaitedCommand({
  name: "RifleError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je hebt nog geen hunting rifle!}{color:FF0000};$getUserVar[Pings]]`
})
bdfd.awaitedCommand({
  name: "HuntError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je kan maar één keer per 15m gaan hunten!}{color:FF0000};$getUserVar[Pings]]`
})

bdfd.command({
  name: "hunt",
  aliases: ["jacht"],
  code: `
  $reply[$messageID;{title:Hunten}{description:
  Je bent aan het hunten op dieren. Je hebt **$random[2;9]** beesten vermoord.

  Geld verdiend: **€$random[250;370],-**
$setUserVar[Geld;$sum[$getUserVar[Geld];$random[320;370]]]
$cooldown[15m;{execute:HuntError}]

}{color:$getUserVar[Kleur]};$getUserVar[Pings]]  
$onlyIf[$getUserVar[HuntingRifle]==**:gun:Hunting Rifle**(.hunt);{execute:RifleError}]  

`})

//Cool :D
bdfd.awaitedCommand({
  name: "VechtError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je kan maar één keer per half uur vechten met een aardappel!}{color:FF0000};$getUserVar[Pings]]`
})
bdfd.awaitedCommand({
  name: "AardappelError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je hebt nog geen aardappel!}{color:FF0000};$getUserVar[Pings]]`
})

bdfd.awaitedCommand({
  name: "LaptopError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je hebt nog geen laptop!}{color:FF0000};$getUserVar[Pings]]`
})
bdfd.awaitedCommand({
  name: "LaptoptoptopError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je kan over 15m keer een reddit post versturen!}{color:FF0000};$getUserVar[Pings]]`
})

bdfd.command({
  name: "vecht",
  aliases: ["aardappel"],
  code: `
  $reply[$messageID;{title:Vecht}{description:
  Je bent aan het vechten geweest met zombies. Je hebt **$random[79;202]** zombies vermoord.

  Je hebt daarmee **€$random[1000;2000],-** verdiend!
$setUserVar[Geld;$sum[$getUserVar[Geld];$random[1000;2000]]]
$cooldown[30m;{execute:VechtError}]

}{color:$getUserVar[Kleur]};$getUserVar[Pings]]  
$onlyIf[$getUserVar[NutelozeAardappel]==**:potato:Aardappel**(.vecht);{execute:AardappelError}]  

`})

bdfd.command({
  name: "reddit",
  aliases: ["post"],
  code: `
  $reply[$messageID;{title:Post}{description:
  Je hebt een reddit post gestuurd! 

  **Karma:** $random[100;6969]

  Geld verdiend: **€$random[100;200],-**
$setUserVar[Geld;$sum[$getUserVar[Geld];$random[100;200]]]
$cooldown[15m;{execute:LaptoptoptopError}]

}{color:$getUserVar[Kleur]};$getUserVar[Pings]]  
$onlyIf[$getUserVar[Laptop]==**:computer:Laptop**(.post);{execute:LaptopError}]  

`})

bdfd.command({
  name: "deposit",
  aliases: ["dep"],
  code: ` $if[$message!=all]
$setUserVar[Geld;$sub[$getUserVar[Geld];$message]]
$setUserVar[Bank;$sum[$getUserVar[Bank];$message]]
$reply[$messageID;
{title:Deposit}
{thumbnail:$authorAvatar}
{description:**Je hebt €$message,- geld op je bankrekening gezet!**}
{color:$getUserVar[Kleur]};$getUserVar[Pings]]
$onlyIf[$message<=$getUserVar[Geld];{execute:DepError}]
$argsCheck[1;{execute:DepAError}]
$endif
$if[$message==all]
$setUserVar[Geld;$sub[$getUserVar[Geld];$getUserVar[Geld]]]
$setUserVar[Bank;$sum[$getUserVar[Bank];$getUserVar[Geld]]]
$reply[$messageID;
{title:Deposit}
{thumbnail:$authorAvatar}
{description:**Je hebt €$getUserVar[Geld],- op je bankrekening gezet!**}
{color:$getUserVar[Kleur]};$getUserVar[Pings]]
$endif


`
});

bdfd.command({
  name: "with",
  aliases: ["withdraw"],
  code: `$if[$message!=all]  
$setUserVar[Bank;$sub[$getUserVar[Bank];$message]]
$setUserVar[Geld;$sum[$getUserVar[Geld];$message]]
$reply[$messageID;
{title:Withdraw}
{thumbnail:$authorAvatar}
{description:**Je hebt €$message,- van je bankrekening afgehaald!**}
{color:$getUserVar[Kleur]};$getUserVar[Pings]]
$onlyIf[$isNumber[$message]==true;]
$onlyIf[$message<=$getUserVar[Bank];{execute:WithError}]
$argsCheck[1;{execute:WithAError}]
$endif
$if[$message==all]
$setUserVar[Bank;$sub[$getUserVar[Bank];$getUserVar[Bank]]]
$setUserVar[Geld;$sum[$getUserVar[Geld];$getUserVar[Bank]]]
$reply[$messageID;
{title:Withdraw}
{thumbnail:$authorAvatar}
{description:**Je hebt €$getUserVar[Bank],- van je bankrekening afgehaald!**}
{color:$getUserVar[Kleur]};$getUserVar[Pings]]
$endif

`
});

bdfd.awaitedCommand({
  name: "WithError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je kan niet meer withdrawen dan dat je in je portemonnee hebt!}{color:FF0000};$getUserVar[Pings]]`
})
//done
bdfd.awaitedCommand({
  name: "DepError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je kan niet meer depositten dan dat je in je bank hebt!}{color:FF0000};$getUserVar[Pings]]`
})
bdfd.awaitedCommand({
  name: "DepAError",
  code: `$reply[$messageID;{title:Oeps..}{description:Wat wil je op je bankrekening zetten?}{color:FF0000};$getUserVar[Pings]]`
})
bdfd.awaitedCommand({
  name: "WithAError",
  code: `$reply[$messageID;{title:Oeps..}{description:Wat wil van je bankrekening afhalen?}{color:FF0000};$getUserVar[Pings]]`
})
bdfd.command({
  name: "unlock",
  code: `
$modifyChannelPerms[$splitText[1];+sendmessages;$guildID]
$reply[$messageID;<#$splitText[1]> zit niet meer op slot!;$getUserVar[Pings]]
$textSplit[$replaceText[$replaceText[$checkCondition[$mentionedChannels[1]==];true;$channelID];false;$mentionedChannels[1]];/]
$onlyBotPerms[managechannels;ik geen perms bruh]
$onlyIf[$getUserVar[BadgeStaff]==<:Staff:868120936992358460>;Je hebt perms nodig (Tijdelijke error!)]`})
bdfd.command({
  name: "lock",
  code: `
$modifyChannelPerms[$splitText[1];-sendmessages;$guildID]
$reply[$messageID;<#$splitText[1]> zit nu op slot!;$getUserVar[Pings]]
$textSplit[$replaceText[$replaceText[$checkCondition[$mentionedChannels[1]==];true;$channelID];false;$mentionedChannels[1]];/]
$onlyBotPerms[managechannels;ik geen perms bruh]
$onlyIf[$getUserVar[BadgeStaff]==<:Staff:868120936992358460>;Je hebt perms nodig (Tijdelijke error!)]
`})

bdfd.command({
  name: "clear",
  aliases: ["purge"],
  code: `$clear[$message[1]]
  $wait[1s]
  $deleteMessage[$channelID;$messageID]
  $wait[3s]
$reply[$messageID;{delete:5s}
{title:Clear}

{description:**Je hebt $message[1] berichten verwijderd**}
{color:$getUserVar[Kleur]};$getUserVar[Pings]]

$onlyIf[$isNumber[$message[1]]==true;{execute:ClearError}]
$onlyIf[$message!=;{execute:ClearError2}]
$onlyIf[$getUserVar[BadgeStaff]==<:Staff:868120936992358460>;Je hebt perms nodig (Tijdelijke error!)]

`
});

//knap

// :)
//:D
//:P

// hoe doe je da dat er alleen nummer kan en niet letters anders error
//gewoon 
bdfd.awaitedCommand({
  name: "ClearError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je moet een getal opgeven! Geen letters!}{color:FF0000};$getUserVar[Pings]]`
})
bdfd.awaitedCommand({
  name: "ClearError2",
  code: `$reply[$messageID;{title:Oeps..}{description:Hoeveel berichten moet ik verwijderen?}{color:FF0000};$getUserVar[Pings]]`
})


bdfd.awaitedCommand({
  name: "BegError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je kan over 1m weer smeken voor geld!}{color:FF0000};$getUserVar[Pings]]`
})


bdfd.command({
  name: "beg",
  aliases: ["smeek"],
  code: `
 
$reply[$messageID;{delete:5s}
{title:Smeek}

{description:**$replaceText[$randomText[Logan Paul;Een kip;Een zwerver;Een kind;Een Duivel;Een poepje;Je geest;Een oma;De lucht;Pewdiepie;Een rijke man;Een mens;Je gedachtes;Een pannekoek;Mr. poep;Kippieldv;$username;Niemand;Swaggy Boi;Een dronken gast;Rick Astley ;Pindakaas;iemand123;Een slak;Je stoel];Rick Astley;Rick Astley] heeft je €$replaceText[$random[0;100];69;69(noice)],- gegeven!**}
{color:$getUserVar[Kleur]};$getUserVar[Pings]]
$setUserVar[Geld;$sum[$getUserVar[Geld];$random[0;100]]]
$cooldown[1m;{execute:BegError}]

`
});
bdfd.awaitedCommand({
  name: "rickroll",
  code: `$reply[$messageID;https://tenor.com/view/rick-astley-dancing-singin-rick-rolled-never-gonna-give-you-up-gif-7220603;$getUserVar[Pings]]`
})


bdfd.command({
  name: "leaderboard",
  aliases: ["lb", "leaderb", "lboard"],
  code: `$reply[$messageID;
{title:**__$serverName[$guildID]'s__** Leaderboard}
{description:$replaceText[$replaceText[$replaceText[$userLeaderBoard[Geld;asc;⟨{top}⟩ {username}: {value}];⟨1⟩; ⟨1⟩ 🥇];⟨2⟩;⟨2⟩ 🥈];⟨3⟩;⟨3⟩ 🥉]}
{color:$getUserVar[Kleur]}{thumbnail:$serverIcon};$getUserVar[Pings]]

`
})
bdfd.interactionCommand({
  name: "leaderboard",
  code: `$interactionEdit[;
{title:**__$serverName[$guildID]'s__** Leaderboard}
{description:$replaceText[$replaceText[$replaceText[$userLeaderBoard[Geld;asc;⟨{top}⟩ {username}: {value}];⟨1⟩; ⟨1⟩ 🥇];⟨2⟩;⟨2⟩ 🥈];⟨3⟩;⟨3⟩ 🥉]}
{color:$getUserVar[Kleur]}{thumbnail:$serverIcon}]
$wait[$random[0;3]s]
$interactionReply[;{title:Opties ophalen}{description:Ik ben bezig met het ophalen van je keuze! Dit duurt minder dan 2 seconden}{color:$getUserVar[Kleur]}]


`
})





bdfd.command({
  name: "e",
  aliases: ["ee"],
  code: `
 
$setUserVar[Pickaxe;]
$setUserVar[FishingRod;]
$setUserVar[NutelozeAardappel;]
$setUserVar[Laptop;]
$setUserVar[HuntingRifle;]
$setUserVar[GeenItem;**Geen Spullen**]

`
});

bdfd.command({
  name: "daily",
  aliases: ["dagelijks"],
  code: `

$reply[$messageID;
{title:Dagelijks}
{description:Je hebt €500,- verdiend!}
{color:$getUserVar[Kleur]}{thumbnail:$authorAvatar};$getUserVar[Pings]]
$setUserVar[Geld;$sum[$getUserVar[Geld];500]]
$cooldown[24h;{execute:DailyError}]

`
});

bdfd.awaitedCommand({
  name: "DailyError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je kan over 24h weer daily doen! Wacht nog $getCooldownTime[24h;user;daily;$authorID]

}{color:FF0000};$getUserVar[Pings]]`
})

bdfd.command({
  name: "weekly",
  aliases: ["wekelijks"],
  code: `

$reply[$messageID;
{title:Wekelijks}
{description:Je hebt €1500,- verdiend!}
{color:$getUserVar[Kleur]}{thumbnail:$authorAvatar};$getUserVar[Pings]]
$setUserVar[Geld;$sum[$getUserVar[Geld];1500]]
$cooldown[168h;{execute:}]

$onlyForRoles[772723770062405632;{execute:TwitchSubError}]
`
});

bdfd.awaitedCommand({
  name: "WeeklyError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je kan over 7w weer weekly doen!}{color:FF0000};$getUserVar[Pings]]`
})

bdfd.awaitedCommand({
  name: "TwitchSubError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je kan weekly niet doen daarvoor moet je op Kippieldv Twitch subben!}{color:FF0000};$getUserVar[Pings]]`
})
bdfd.variables({
  Upgrade1: "",
  Uplevel1: "",
  Upgrade2: "",
  Uplevel2: "",
  Upgrade3: "",
  Uplevel3: "",
  UpgradeTotal: "1",
  BLevel: "1"
})
bdfd.command({
  name: "upgrade",
  aliases: ["up"],
  code: `
  $setUserVar[BLevel;$sum[$getUserVar[BLevel];1]]
  $reply[$messageID;{title:Upgrade}{description:
  Je hebt je boerderij geüpgrade!




  }{color:00EE00};$getUserVar[Pings]]
  $setUserVar[Upgrade1;on]
  $setUserVar[Geld;$sub[$getUserVar[Geld];1500]]
$setUserVar[BLevel;$sum[$getUserVar[UpgradeTotal];1]]
$onlyIf[$getUserVar[Geld]>=1500;{title:Oeps..}{description:Je hebt niet genoeg geld!}{color:FF0000}]
$onlyIf[$getUserVar[FarmerAantal]==1;{title:Oeps..}{description:Je hebt nog geen boerderij!}{color:FF0000}]

  `
})
//Sum = Optellen
//Sub = Afhalen
bdfd.command({
  name: "boerderij",
  aliases: ["info"],
  code: `$reply[$messageID;{title:Boerderij Info}{description:$username[$findUser[$mentioned[1];yes]]'s boerderij
  
  ***__Dieren__***:

$getUserVar[GeenDieren;$findUser[$mentioned[1];yes]]
$getUserVar[Kippen;$findUser[$mentioned[1];yes]]
$getUserVar[Koe;$findUser[$mentioned[1];yes]]

}{field:Level:$getUserVar[BLevel;$findUser[$mentioned[1];yes]]:yes}{color:$getUserVar[Kleur]};$getUserVar[Pings]]
$onlyIf[$getUserVar[FarmerAantal]==1;{title:Oeps..}{description:Je hebt nog geen boerderij!}{color:FF0000}]
`
})

bdfd.command({
  name: "ping",
  code: `$reply[$messageID;{color:$getUserVar[Kleur]}{field:Bot's Ping:$botPing ms:yes}{field:Discord's Ping:$ping ms:yes}{field:Database's Ping:$dbPing ms:yes};$getUserVar[Pings]]
  `
})

bdfd.command({
  name: "resetupgradelvl",
  code: `$setUserVar[UpgradeTotal;1]WHAHAAwet
  $setUserVar[BLevel;1]`
})
//DOE GEWOON RESET OMG
//Dat werkt hetzelfde ow
//boeit niet meer

//dit is even belangrijk
bdfd.command({
  name: "give",
  code: `$setUserVar[Bank;$message[2];$mentioned[1]]
    $reply[$messageID;Ik heb $message[2] aan $username[$mentioned[1]] gegeven!;$getUserVar[Pings]]
    $onlyForIDs[699320106978639874;689192849719296056;]`
})

bdfd.command({
  name: "reset",
  code: `$resetUserVar[Bank]
    $resetUserVar[Geld]
    $onlyForIDs[699320106978639874;689192849719296056;720270888183791646;]`
})

bdfd.command({
  name: "rob",
  aliases: ["steel"],
  code: `
$setUserVar[Geld;$sub[$getUserVar[Geld;$mentioned[1]];$random[1;$getUserVar[Geld;$mentioned[1]]]];$mentioned[1]]
$setUserVar[Geld;$sum[$getUserVar[Geld]]$random[1;$getUserVar[Geld;$mentioned[1]]]]]
$title[Robbed!]
$color[00ff00]
$description[$username robbed $username[mentioned[1]] and got $random[1;$getUserVar[money;$mentioned[1]]]]
$author[$username;$authorAvatar]
$onlyIf[$random[1;5]==3;{execute:AwaitedRobFail}]
$onlyIf[$getUserVar[money;$mentioned[1]>2999;That user doesn't have enough money to rob!]
$onlyIf[$getUserVar[money]>2999;You need at least $3000 to rob someone!]
$cooldown[2min;You need to wait for %time% before trying to rob someone again!]
$onlyIf[$mentioned[1]!=;Please mention someone to rob!]
`
})
bdfd.awaitedCommand({
  name: "AwaitedRobFail",
  code: `$deletecommand
$setUserVar[Geld;$sum[$getUserVar[Geld;$mentioned[1]];$random[1;$getUserVar[Geld;$mentioned[1]]]];$mentioned[1]]
$setUserVar[Geld;$sub[$getUserVar[Geld]]$random[1;$getUserVar[Geld;$mentioned[1]]]]]
$reply[$messageID;{title:Busted!}
{color:ff0000}
{description:$username was caught attempting to rob $username[mentioned[1]] and had to pay $random[1;$getUserVar[money;mentioned[1]]] as a fine}
{author:$username:$authorAvatar};$getUserVar[Pings]]

`
})



bdfd.variables({
  Kippen: "",
  KippenAantal: "",
  Eieren: "",
  Koe: "",
  KoeAantal: "",
  Melk: "",
  GeenDieren: "**Geen dieren**"
})


// <:Ei:844209466987773972> 
// <:Melk:845589850291568650>

bdfd.command({
  name: "eierencheck",
  aliases: ["ec"],
  code: `
  $reply[$messageID;{title:Eieren Checken...}{description:
 Je kippen($getUserVar[KippenAantal]) hebben $replaceText[$replaceText[$getUserVar[KippenAantal];2;$random[3;7]];1;$random[0;5]] eieren gelegd

 Je hebt €$random[0;600],- verdiend!
$setUserVar[Geld;$sum[$getUserVar[Geld];$random[0;600]]]
$cooldown[30m;{execute:EierenError}]

}{color:$getUserVar[Kleur]};$getUserVar[Pings]]  
$onlyIf[$getUserVar[Kippen]==**:chicken:Kippen**(.ec);{execute:EierenCheckError}]  

`})

bdfd.awaitedCommand({
  name: "EierenError",
  code: `$reply[$messageID;{title:Oeps..}{description:De kippen kunnen niet zo snel weer eieren leggen. Je kan weer kijken als ze eieren hebben gelegd over 30m!}{color:FF0000};$getUserVar[Pings]]`
})

bdfd.awaitedCommand({
  name: "EierenCheckError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je hebt nog geen kip}{color:FF0000};$getUserVar[Pings]]`
})

bdfd.command({
  name: "melkcheck",
  aliases: ["mc"],
  code: `
  $reply[$messageID;{title:Melk Checken...}{description:
 Je Koeien($getUserVar[KoeAantal]) hebben $replaceText[$replaceText[$getUserVar[KoeAantal];2;$random[3;7]];1;$random[0;5]]L melk gemolken

 Je hebt €$random[200;800],- verdiend!
$setUserVar[Geld;$sum[$getUserVar[Geld];$random[200;800]]]
$cooldown[30m;{execute:MelkError}]

}{color:$getUserVar[Kleur]};$getUserVar[Pings]]  
$onlyIf[$getUserVar[Koe]==**:cow:Koeien**(.mc);{execute:MelkCheckError}]  

`})

bdfd.awaitedCommand({
  name: "MelkError",
  code: `$reply[$messageID;{title:Oeps..}{description:De Koeien kunnen niet zo snel weer gras eten. Je kan weer kijken als er melk is over 30m!}{color:FF0000};$getUserVar[Pings]]`
})

bdfd.awaitedCommand({
  name: "MelkCheckError",
  code: `$reply[$messageID;{title:Oeps..}{description:Je hebt nog geen koe}{color:FF0000};$getUserVar[Pings]]`
})

bdfd.command({
  name: "instellingen",
  code: `$reply[$messageID;{color:$getUserVar[Kleur]}{author:Instellingen:http://ikbenaardig.ga/Gear.gif}{description:}{field:Pings:$replaceText[$replaceText[$getUserVar[Pings];yes;Aan];no;Uit]:no}{field:Kleur:$getUserVar[Kleur]:yes}{footer:Doe .instellingen <Instelling> om te zien hoe je het moet gebruiken!};$getUserVar[Pings]]
  $onlyIf[$message==;]

`
})
bdfd.command({
  name: "instellingen",
  code: `$if[$toLowercase[$message]==pings]
  $reply[$messageID;{color:$getUserVar[Kleur]}{author:Instellingen:http://ikbenaardig.ga/Gear.gif}{description:Om Pings uit te zetten doe je \`.instellingen pings uit/aan\`!}{field:Pings:$replaceText[$replaceText[$getUserVar[Pings];yes;Aan];no;Uit]:no}{footer:Doe .instellingen <Instelling> om te zien hoe je het moet gebruiken!};$getUserVar[Pings]]
  $endif
  $if[$toLowercase[$message]==kleur]
  $reply[$messageID;{color:$getUserVar[Kleur]}{author:Instellingen:http://ikbenaardig.ga/Gear.gif}{description:Om de kleur te veranderen doe je \`.instellingen kleur #HEXCODE (Bv. #FF4500)\`[https://colorpicker.me/](https://colorpicker.me/)!}{field:Kleur:$replaceText[$replaceText[$getUserVar[Kleur];yes;Aan];no;Uit]:no}{footer:Doe .instellingen <Instelling> om te zien hoe je het moet gebruiken!};$getUserVar[Pings]]
  $endif
  `
})
bdfd.command({
  name: "instellingen",
  code: `$if[$toLowercase[$message]==pings uit]
  $reply[$messageID;{color:$getUserVar[Kleur]}{author:Instellingen:http://ikbenaardig.ga/Gear.gif}{description:Ik heb de pings uitgezet!}{footer:Doe .instellingen <Instelling> om te zien hoe je het moet gebruiken!};$getUserVar[Pings]]
  $setUserVar[Pings;no]
  $endif
  $if[$toLowercase[$message]==pings aan]
  $reply[$messageID;{color:$getUserVar[Kleur]}{author:Instellingen:http://ikbenaardig.ga/Gear.gif}{description:Ik heb de pings aangezet!}{footer:Doe .instellingen <Instelling> om te zien hoe je het moet gebruiken!};$getUserVar[Pings]]
  $setUserVar[Pings;yes]
  $endif
  `
})
bdfd.variables({
  Pings: "yes",
  Kleur: "#FF4500"
})

bdfd.command({
  name: "resettings",
  code: `$resetUserVar[Pings]
  $resetUserVar[Kleur]`
})
bdfd.command({
  name: "instellingen",
  code: `$if[$checkContains[$toLowercase[$message];kleur;#]==true]
  $reply[$messageID;{color:$getUserVar[Kleur]}{author:Instellingen:http://ikbenaardig.ga/Gear.gif}{description:Ik heb de kleur naar $message[2] veranderd!}{footer:Doe .instellingen <Instelling> om te zien hoe je het moet gebruiken!};$getUserVar[Pings]]
  $setUserVar[Kleur;$message[2]]
  $onlyIf[$isValidHex[$message[2]]==true;{execute:KLEURERR}]
  $onlyIf[$message[2]!=;{execute:KLEURERR2}]
  $endif
  `})

bdfd.awaitedCommand({
  name: "KLEURERR",
  code: `$reply[$messageID;{title:Oeps..}{description:Je moet een HEX code invoeren! (FF4500)}{color:FF0000};$getUserVar[Pings]]`
})

bdfd.awaitedCommand({
  name: "KLEURERR2",
  code: `$reply[$messageID;{title:Oeps..}{description:Je moet een HEX code opgeven! (FF4500)}{color:FF0000};$getUserVar[Pings]]`
})



bdfd.command({
  name: "stats",
  description: "Shows the bot's stats",
  code: `
 $editMessage[$get[msgid];{author:$username[$clientID] Status:$userAvatar[$clientID]}
 {field:CPU:\`$cpu%\`:yes}
 {field:RAM:\`$ram%\`:yes}
 {field:Tijd online:\`$uptime\`:yes}
 {field:Versie:\`$packageVersion\`:yes}
 {field:Developer:\`$userTag[$botOwnerID], $userTag[689192849719296056]\`:yes}
 {color:ORANGE}]
 
 $wait[3s]
 
 $botTyping
 
 $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {description:\`Fetching RAM...\`}
 {color:ORANGE}]
 $wait[$textSlice[a$findNumbers[$ram];1;5]ms]
 
 $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {description:\`Fetching CPU...\`}
 {color:ORANGE}]
 $wait[$textSlice[a1$findNumbers[$cpu]00;1;5]ms]
 
 $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {description:\`Fetching Ping...\`}
 {color:RED}]
 $wait[$textSlice[x$ping000;1;5]ms]
 
 $botTyping
 
 $let[msgid;$sendMessage[{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {color:RED};yes]]
 
 $serverCooldown[10s;Please wait %time%.]`
})



bdfd.command({
  name: "verwijder-suggestie",
  error: `$channelSendMessage[850695807924568085;{author:$userTag | $channelName:$authorAvatar}{description:\`\`\`$error\`\`\`}{color:FF0000}]`,
  code: `
 $deleteMessage[$getServerVar[suggestchannel];$message[1]]
 $reply[$messageID;Je suggestie is verwijderd! :heavy_check_mark:;$getUserVar[Pings]]
 $onlyIf[$getEmbed[$getServerVar[suggestchannel];$message[1];title]==$nickname#$discriminator;{execute:SuggestieNietVanJou}]
 $onlyIf[$messageExists[$getServerVar[suggestchannel];$message[1]]==true;{execute:SuggestiEgeenIDError}]
$onlyIf[$message!=;g]
`})
//$deleteMessage[channelID;messageID]

//$messageExists[channelID;messageID] <------- Arsi
bdfd.awaitedCommand({
  name: "SuggestieNietVanJou",
  code: `$reply[$messageID;{title:Oeps..}{description:Je kan alleen je eigen suggestie verwijderen!}{color:FF0000};$getUserVar[Pings]]`
})
bdfd.awaitedCommand({
  name: "SuggestiEgeenIDError",
  code: `$reply[$messageID;{image:http://ikbenaardig.ga/MessageIDS/GETID.gif}{title:Oeps..}{description:Je moet de message ID hebben van de suggestie!}{color:FF0000};$getUserVar[Pings]]`
})
//jij doet err msg k
//{image:http://ikbenaardig.ga/GETID.gif}
//ik record wel klein f


//ilmpie 
// kan jij gif van dev 
//K?mode aan zetten en dan message ID LAURENS
//jaja k doe

//done
//hij aan rennderen

bdfd.command({
  name: "update",
  code: `$updateCommands
  $reply[$messageID;{title:Ik ben geüpdate! Geniet van mijn nieuwe features!}{color:$getUserVar[Kleur]};$getUserVar[Pings]]
  $onlyForIDs[699320106978639874;689192849719296056;]`
})

bdfd.awaitedCommand({
  name: "muziek",
  code: `$reply[$messageID;{author:Help | Muziek:http://ikbenaardig.ga/Logo.gif}{description:Op dit moment is muziek in de maak!}{color:$getUserVar[Kleur]};$getUserVar[Pings]]`
})
bdfd.awaitedCommand({
  name: "suggesties",
  code: `$reply[$messageID;{author:Help | Suggesties:http://ikbenaardig.ga/Logo.gif}{description:**.suggestie <suggestie>** - Verstuurt een suggestie
**.bewerk-suggestie <MESSAGEID> <nieuwe-suggestie>** - Bewerkt een suggestie
**.verwijder-suggestie <MESSAGEID>** - Verwijdert een suggestie}{color:$getUserVar[Kleur]};$getUserVar[Pings]]`
})

bdfd.command({
  name: "commands",
  code: `$reply[$messageID;{title:Commands}
  {description:$replaceText[$djsEval[client.bot_commands.map(x=>x.name).join(" , ");yes];$alwaysExecute;undefined]}{color:$getUserVar[Kleur]};$getUserVar[Pings]]
  `
})

bdfd.variables({
GeenBadge: "Geen badges",
BadgeDev: "",
BadgeKip: "",
BadgeVIP: "",
BadgeBooster: "",
BadgeStaff: "",
BadgeStaffPlus: ""
})



bdfd.command({
  name: "setbadge",
  code: `$if[$toLowercase[$message[2]]==vip]
    $setUserVar[BadgeVIP;<:VIP:868372907783491634>;$message[1]] $setUserVar[GeenBadge; ;$message[1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt de VIP badge gegeven!}{color:00EE00};$getUserVar[Pings]]
  $endif

$if[$toLowercase[$message[2]]==dev]
    $setUserVar[BadgeDev;<:Developer:868414829419982898>;$message[1]] $setUserVar[GeenBadge; ;$message[1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt de Developer badge gegeven!}{color:00EE00};$getUserVar[Pings]]
  $endif

$if[$toLowercase[$message[2]]==kip]
    $setUserVar[BadgeKip;<:Kip:868122775326445608>;$message[1]] $setUserVar[GeenBadge; ;$message[1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt de Kip badge gegeven!}{color:00EE00};$getUserVar[Pings]]
  $endif

  $if[$toLowercase[$message[2]]==booster]
    $setUserVar[BadgeBooster;<:ServerBooster:868412469641625631>;$message[1]] $setUserVar[GeenBadge; ;$message[1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt de Booster badge gegeven!}{color:00EE00};$getUserVar[Pings]]
  $endif

    $if[$toLowercase[$message[2]]==staff]
    $setUserVar[BadgeStaff;<:Staff:868120936992358460>;$message[1]] $setUserVar[GeenBadge; ;$message[1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt de Staff badge gegeven!}{color:00EE00};$getUserVar[Pings]]
  $endif

    $if[$toLowercase[$message[2]]==staffp]
    $setUserVar[BadgeStaffPlus;<:Staff_Plus:868489831695650866>;$message[1]] $setUserVar[GeenBadge; ;$message[1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt de Staff+ badge gegeven!}{color:00EE00};$getUserVar[Pings]]
  $endif

$onlyForIDs[699320106978639874;689192849719296056;]`})
//wacht
//done

bdfd.command({
  name: "ui",
  code: `
  $color[$getUserVar[Kleur]] $thumbnail[$userAvatar[$findMember[$message]]] $author[$userTag[$findMember[$message]];$userAvatar[$findMember[$message]]] $title[Gebruikers informatie] $addField[Bot; $replaceText[$replaceText[$checkCondition[$isBot[$findMember[$message]]==true];true;Ja];false;Nee]] $addField[Rollen; $replaceText[$replaceText[$checkCondition[$charCount[$userRoles[$findMember[$message];mentions;/]]>1850];true;Gebruiker heeft te veel rollen om te laten zijn];false;$userRoles[$findMember[$message];mentions; ]]] $addField[Hoogste Rol; <@&$highestRole[$findMember[$message]]>;yes] $addField[ID; $findMember[$message];yes] $addField[Platform; $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];none;Geen];web;Website];mobile;Mobiel];desktop;PC];yes] $addField[Custom status; $replaceText[$replaceText[$checkCondition[$checkContains[$getCustomStatus[$findMember[$message];state];https;discord.gg;.gg;.com;.xyz;.app;.net;.org;.info;.co;.edu;.gov;.tv;.club]==true];true;Link];false;$replaceText[$getCustomStatus[$findMember[$message];emoji];none;] $replaceText[$replaceText[$checkContains[$getCustomStatus[$findMember[$message];state];none];true;Geen status];false;$getCustomStatus[$findMember[$message];state]]];yes] $addField[Status; $replaceText[$replaceText[$replaceText[$replaceText[$status[$findMember[$message]];offline;Offline];online;Online];dnd;Niet Storen];idle;Inactief];yes] $addField[Aanmaakdatum; $creationDate[$findMember[$message]];yes] $addField[Join Datum; $memberJoinedDate[$findMember[$message]];yes] $addField[Badges; $replaceText[$getUserVar[GeenBadge;$findUser[$message;yes]];**;]
$replaceText[$getUserVar[BadgeDev;$findUser[$message;yes]];**;]
$replaceText[$getUserVar[BadgeKip;$findUser[$message;yes]];**;]
$replaceText[$getUserVar[BadgeVIP;$findUser[$message;yes]];**;]
$replaceText[$getUserVar[BadgeBooster;$findUser[$message;yes]];**;]
$replaceText[$getUserVar[BadgeStaff;$findUser[$message;yes]];**;]
$replaceText[$getUserVar[BadgeStaffPlus;$findUser[$message;yes]];**;];yes]
$botTyping
`
})

bdfd.command({
  name: "badges",
  code: `$reply[$messageID;{title:Badges}
  {description:
$replaceText[$getUserVar[GeenBadge;$findUser[$message;yes]];**;]
$replaceText[$getUserVar[BadgeDev;$findUser[$message;yes]];**;]
$replaceText[$getUserVar[BadgeKip;$findUser[$message;yes]];**;]
$replaceText[$getUserVar[BadgeVIP;$findUser[$message;yes]];**;]
$replaceText[$getUserVar[BadgeBooster;$findUser[$message;yes]];**;]
$replaceText[$getUserVar[BadgeStaff;$findUser[$message;yes]];**;]
$replaceText[$getUserVar[BadgeStaffPlus;$findUser[$message;yes]];**;]}
{color:$getUserVar[Kleur]};yes]
`
})
bdfd.command({
  name: "resetbadge",
  code: `$resetUserVar[BadgeDev]
  $resetUserVar[BadgeKip]
  $resetUserVar[BadgeVIP]
  $resetUserVar[GeenBadge]
  $resetUserVar[BadgeBooster]
  $resetUserVar[BadgeStaff]
  $resetUserVar[BadgeStaffPlus]`
})
bdfd.command({
  name: "removebadge",
  code: `$if[$toLowercase[$message[2]]==vip]
    $setUserVar[BadgeVIP; ;$message[1]] $setUserVar[GeenBadge;Geen badges;$message[1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt de VIP badge weggehaald!}{color:00EE00};$getUserVar[Pings]]
  $endif

$if[$toLowercase[$message[2]]==dev]
    $setUserVar[BadgeDev; ;$message[1]] $setUserVar[GeenBadge;Geen badges;$message[1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt de Developer badge weggehaald!}{color:00EE00};$getUserVar[Pings]]
  $endif

$if[$toLowercase[$message[2]]==kip]
    $setUserVar[BadgeKip; ;$message[1]] $setUserVar[GeenBadge;Geen badges;$message[1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt de Kip badge weggehaald!}{color:00EE00};$getUserVar[Pings]]
  $endif

  $if[$toLowercase[$message[2]]==booster]
    $setUserVar[BadgeBooster; ;$message[1]] $setUserVar[GeenBadge;Geen badges;$message[1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt de Booster badge weggehaald!}{color:00EE00};$getUserVar[Pings]]
  $endif

    $if[$toLowercase[$message[2]]==staff]
    $setUserVar[BadgeStaff; ;$message[1]] $setUserVar[GeenBadge;Geen badges;$message[1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt de Staff badge weggehaald!}{color:00EE00};$getUserVar[Pings]]
  $endif

    $if[$toLowercase[$message[2]]==staffp]
    $setUserVar[BadgeStaffPlus; ;$message[1]] $setUserVar[GeenBadge;Geen badges;$message[1]]
  $reply[$messageID;{title:Gelukt!}{description:Je hebt de Staff+ badge weggehaald!}{color:00EE00};$getUserVar[Pings]]
  $endif

$onlyForIDs[699320106978639874;689192849719296056;]
`
})

bdfd.interactionCommand({
name: "help", 
code: `$if[$message==]
$interactionEdit[;{author:Kies een categorie!:https://images-ext-2.discordapp.net/external/Jtave8hEMjT0kpGByIiIAonyfbpn7v0fWTkYwrGcoYg/%3Fsize%3D512/https/cdn.discordapp.com/icons/702981405570760815/a_0888ad8b4b72e20b5b2f05dd08746f19.gif}{description:Je kan kiezen uit\n\n**Suggesties**\n**Economy**\n**Tickets**\n**Algemeen**}{color:$getUserVar[Kleur]}]
$wait[$random[0;2]]
$interactionReply[;{title:Opties ophalen}{description:Ik ben bezig met het ophalen van je keuze! Dit duurt minder dan 2 seconden}{color:$getUserVar[Kleur]}]
$endif
$if[$message==suggesties]
$interactionEdit[;{author:Help | Suggesties:https://images-ext-2.discordapp.net/external/Jtave8hEMjT0kpGByIiIAonyfbpn7v0fWTkYwrGcoYg/%3Fsize%3D512/https/cdn.discordapp.com/icons/702981405570760815/a_0888ad8b4b72e20b5b2f05dd08746f19.gif}{description:**.suggestie <suggestie>** - Verstuurt een suggestie
**.bewerk-suggestie <MESSAGEID> <nieuwe-suggestie>** - Bewerkt een suggestie
**.verwijder-suggestie <MESSAGEID>** - Verwijdert een suggestie}{color:$getUserVar[Kleur]}]
$wait[$random[0;2]]
$interactionReply[;{title:Opties ophalen}{description:Ik ben bezig met het ophalen van je keuze! Dit duurt minder dan 2 seconden}{color:$getUserVar[Kleur]}]
$endif
$if[$message==economy]
$interactionEdit[;{author:Help | Economy:https://images-ext-2.discordapp.net/external/Jtave8hEMjT0kpGByIiIAonyfbpn7v0fWTkYwrGcoYg/%3Fsize%3D512/https/cdn.discordapp.com/icons/702981405570760815/a_0888ad8b4b72e20b5b2f05dd08746f19.gif}{description:__Statistieken__
.balans 
.profiel

__Verdien__
.werk
.smeek
.jacht
.vis
.post
.vecht
.mine

__Kopen__
.winkel
.buy <product>

__Claim__
.daily
.weekly

__Rekening__
.dep <all/getal>
.with <all/getal>}{color:$getUserVar[Kleur]}]
$wait[$random[0;2]]
$interactionReply[;{title:Opties ophalen}{description:Ik ben bezig met het ophalen van je keuze! Dit duurt minder dan 2 seconden}{color:$getUserVar[Kleur]}]
$endif
$if[$message==tickets]
$interactionEdit[;{author:Help | Tickets:https://images-ext-2.discordapp.net/external/Jtave8hEMjT0kpGByIiIAonyfbpn7v0fWTkYwrGcoYg/%3Fsize%3D512/https/cdn.discordapp.com/icons/702981405570760815/a_0888ad8b4b72e20b5b2f05dd08746f19.gif}{description:
**.add <GEBRUIKERID>** - Voegt iemand aan het ticket toe
**.remove <GEBRUIKERID>** - Haalt iemand uit het ticket}{color:$getUserVar[Kleur]}]
$wait[$random[0;2]]
$interactionReply[;{title:Opties ophalen}{description:Ik ben bezig met het ophalen van je keuze! Dit duurt minder dan 2 seconden}{color:$getUserVar[Kleur]}]
$endif
$if[$message==algemeen]
$interactionEdit[;{author:Help | Algemeen:https://images-ext-2.discordapp.net/external/Jtave8hEMjT0kpGByIiIAonyfbpn7v0fWTkYwrGcoYg/%3Fsize%3D512/https/cdn.discordapp.com/icons/702981405570760815/a_0888ad8b4b72e20b5b2f05dd08746f19.gif}{description:
.youtube
.instagram
.discord
.steam
.twitch
.tiktok}{color:$getUserVar[Kleur]}]
$wait[$random[0;2]]
$interactionReply[;{title:Opties ophalen}{description:Ik ben bezig met het ophalen van je keuze! Dit duurt minder dan 2 seconden}{color:$getUserVar[Kleur]}]
$endif

`
})
bdfd.onInteractionCreate()
bdfd.interactionCommand({
  name: "suggestie",
  code: `$addReactions[$customEmoji[ja];$customEmoji[nee]]
$title[$nickname[$authorID]#$discriminator[$authorID]]
$thumbnail[$authorAvatar]
$footer[Reageer met ja of nee!]
$description[**Suggestie:** $message

]
$addField[Status;Wachtend;no]
$color[ff4500]
$useChannel[$getServerVar[suggestchannel]]
$interactionReply[Suggestie gestuurd! $customEmoji[ja];]
$onlyIf[$getServerVar[suggestchannel2]==e;{title::x: Oeps}{description:**Maak eerst een suggestie kanaal**}{color:FF0000}]
$onlyIf[$message!=;{title:$customEmoji[nee] Oeps}{description:Wat is je suggestie?}{color:FF0000}]
`
})
bdfd.command({
name: "deleteslash",
code: `$deleteSlashCommand[$guildID;$message]
$onlyForIDs[699320106978639874;689192849719296056;]`
})
bdfd.variables({
  warn: "0"
})

bdfd.command({
  name: "warn",
  code: `$title[Moderation | Warns]
$footer[System32(cow) do it L]
$description[You warned <@​$findUser[$message[1];no]> for$replaceText[$message;$message[1];] using the id #$getServerVar[warn]]
$color[GREEN]
$djsEval[const nodejsondb = require("node-json-db").JsonDB;

var db = new nodejsondb("warns", true, true, '/');

db.push("/$findUser[$message[1];no]/$getServerVar[warn]", {"reason":"$replaceText[$message;$message[1];]","mod":"$username", "id":"$getServerVar[warn]"});]
$setServerVar[warn;$sum[$getServerVar[warn];1]]
$onlyIf[$findUser[$message[1];no]!=undefined;User not found]
$argsCheck[>2;Args missing]`
})

bdfd.command({
  name: "warnings",
  code: `$author[Warns from $userTag[$findUser[$message[1];no]];$userAvatar[$findUser[$message[1];no]]]
$footer[$getObjectProperty[total] total]
$color[GREEN]

$description[$getObjectProperty[text]]

$onlyIf[$getObjectProperty[text]!=;]

$djsEval[const { promisify } = require("util") 

let user = '$findUser[$message[1];no]';

var read = promisify(require('read-file')) 

read('warns.json', 'utf8').then(buffer => {

try{

const warns = JSON.parse(buffer)

const obj = Object.values(warns[user\\]).filter(a => a.reason && a.mod && a.id) 

if (!obj.length) throw new Error("ignore") 

d.object.total = obj.length
d.object.text = obj.map((data, number) => 'Warn #' + number + ':\\n└ ID: ' + data.id + '\\n└ Reason: ' + data.reason + '\\n└ Mod: ' + data.mod).join("\\n\\n")

} catch(e) {

message.channel.send('No data about this person')

} 

});]

$createObject[{}]
$onlyIf[$findUser[$message[1];no]!=undefined;User not found]

$argsCheck[>1;Args are missing L]`,
})

bdfd.command({
  name: "clearwarn",
  code: `$sendMessage[{title: Moderation | Unwarn}{description:You just removed the warns from <@​$mentioned[1]>}{color:GREEN};no]

$djsEval[const nodejsondb = require("node-json-db").JsonDB;

var db = new nodejsondb("warns", true, true, '/');

db.delete("/$mentioned[1]");]

$onlyIf[$noMentionMessage==all;]

$if[$noMentionMessage!=all]

$sendMessage[{title:Moderation | Unwarn}{description:you removed the warn #$noMentionMessage to <@​$mentioned[1]>}{color:GREEN};no]

$djsEval[const nodejsondb = require("node-json-db").JsonDB;

var db = new nodejsondb("warns", true, true, '/');

db.delete("/$mentioned[1]/$noMentionMessage");]

$endif

$onlyIf[$noMentionMessage!=;Type one warn id or all to remove warns]

$onlyIf[$mentioned[1]!=;Mention someone]`
})

bdfd.command({
  name: "switch",
  code: `

$if[$message==]
$reply[$messageID;{title:Current status}
{description:$replaceText[$replaceText[$getVar[devSwitch];enabled;⚠️ Actief!];enabled;⚠️ Developer Mode!]}
{field:Usage:.switch <on/off>:no}
{field:Description:\`on\` = Doet de developer modus uit
\`off\` = Doet de developer modus aan:no}
{footer:Developer command}
{color:2268e9};$getUserVar[Pings]]
$endif

$if[$message==on]
$setVar[devSwitch;enabled]

$createSlashCommand[$guildID;youtube;Laat de linkjes van youtube zien]
$wait[1s]
$createSlashCommand[$guildID;discord;Laat de discord invite link zien]
$wait[1s]
$createSlashCommand[$guildID;steam;Laat de linkjes van steam zien]
$wait[1s]
$createSlashCommand[$guildID;twitch;Laat de linkjes van twitch zien]
$wait[1s]
$createSlashCommand[$guildID;tiktok;Laat de linkjes van TikTok zien]
$wait[1s]
$createSlashCommand[$guildID;embed;Stuurt een embed;kanaal:Het kanaal waarnaar ik de embed moet sturen:true:7;titel:De titel voor de embed:true:3;beschrijving:De beschrijving voor de embed:true:3;kleur:De kleur voor de embed:true:3;footer:De footer voor de embed:false:3;afbeelding:De afbeelding voor de embed:false:3]
$wait[1s]
$createSlashCommand[$guildID;help;Laat alle commando's zien;categorie:De categorie (Alle categoriën staan in /help zonder optie):false:3]
$wait[1s]
$createSlashCommand[$guildID;suggestie;Verstuurt een suggestie;suggestie:Jouw suggestie voor de server/bot:true:3]
$reply[$messageID;<@$client[id]> is uit developer modus gehaald!;$getUserVar[Pings]]
$suppressErrors[]
$endif
$if[$message==off]
$setVar[devSwitch;enabled]

$deleteSlashCommand[$guildID;youtube]
$wait[1s]
$deleteSlashCommand[$guildID;discord]
$wait[1s]
$deleteSlashCommand[$guildID;steam]
$wait[1s]
$deleteSlashCommand[$guildID;twitch]
$wait[1s]
$deleteSlashCommand[$guildID;tiktok]
$wait[1s]
$deleteSlashCommand[$guildID;embed]
$wait[1s]
$deleteSlashCommand[$guildID;help]
$wait[1s]
$deleteSlashCommand[$guildID;suggestie]

$reply[$messageID;<@$client[id]> is in developer modus gezet!;$getUserVar[Pings]
$suppressErrors[]
$endif
$onlyForIDs[$getVar[dev1];$getVar[dev2];⚠️ Developer command]
`}) 

bdfd.variables({
    dev_switch: "enabled",
    dev1: "699320106978639874",
    dev2: "689192849719296056",
    devSwitch: "enabled"
})
bdfd.joinCommand({ 
channel: "704627508850458706", 
code: `
$title[Welkom in de Kippie Discord!]
$description[Leuk dat je in de server gekomen bent **$userTag[$authorID]** ! :tada:
Lees eerst de <#726557387888132158> voordat je verder gaat.
Kijk in <#842355100668002314> voor meer informatie over de server.]
$color[FF4500]
`
/*
Code Breakdown
$serverName - The name of the server the user joined
$username - The user who joined the server
*/
}) 