module.exports = { 
  name: "report",
  code: `$reply[$messageID;{title:Gelukt}{description:Je bug report is succesvol verzonden!}{color:$getUserVar[Kleur]};$getUserVar[Pings]]
  $sendDM[$botOwnerID;{title:Nieuwe bug report!}{description:Bekijk hem in <#855744788409221151>!}{color:FF4500}]
  $channelSendMessage[855744788409221151;{title:Bug!}{description:\`\`\`$message\`\`\`}{footer:Report door $userTag[$authorID]:$authorAvatar}{color:FF0000};no]
  $onlyIf[$message!=;{title:Oeps..}{description:Wat is de error?}{color:FF0000}]
  $getVar[dev_switch]` 
}