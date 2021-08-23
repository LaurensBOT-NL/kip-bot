module.exports = {
  name: "help",
  code: `$if[$toLowercase[$message]==muziek]
  $reply[$messageID;{author:Help | Muziek:http://ikbenaardig.ga/Logo.gif}{description:Op dit moment is muziek in de maak!}{color:$getUserVar[Kleur]};$getUserVar[Pings]]
  $endif
  
  $if[$toLowercase[$message]==suggesties]
  $reply[$messageID;{author:Help | Suggesties:http://ikbenaardig.ga/Logo.gif}{description:**.suggestie <suggestie>** - Verstuurt een suggestie
**.bewerk-suggestie <MESSAGEID> <nieuwe-suggestie>** - Bewerkt een suggestie
**.verwijder-suggestie <MESSAGEID>** - Verwijdert een suggestie}{color:$getUserVar[Kleur]};$getUserVar[Pings]]
  $endif`
}