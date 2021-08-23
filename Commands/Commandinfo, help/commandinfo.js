module.exports = [{
name: "$alwaysExecute",
code: `
$reply[$messageID;{description:Hi there $username[$authorID], to check a list of my commands, type \`$getServerVar[prefix]help\`!}
{author:$client[name]:$client[avatar]}
{color:$getUserVar[Kleur]};$getUserVar[Pings]]
$onlyif[$checkContains[$message[1];<@$clientID>;<@!$clientID>]==true;]`
}, {
  name: 'commandhelp',
  code: `$reply[$messageID;{title:Commandhelp}{field:Roepnaam:$commandInfo[$message;name]:yes}{field:Aliassen:bwe:yes};$getUserVar[Pings]]`
}]