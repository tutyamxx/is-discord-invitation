# is-discord-invitation

<p align="center">🤖</p>

<p align="center"><a href="https://nodei.co/npm/is-discord-invitation/"><img src="https://nodei.co/npm/is-discord-invitation.png"></a></p>

* NPM package that checks if a string is an official Discord invitation link
* Useful when creating bots and you want to detect **easily** if the message sent by the user is an invitation to another Discord server.

# Install [NPM](https://www.npmjs.com/package/is-discord-invitation)

 `$ npm i is-discord-invitation`

# Usage

isInvite(string) -> boolean
- Returns a Boolean indicating whether `string` is a  Discord invitation link
- It will return `false` if the `string` is empty or if it isn't an invitation link

matchInvite(string) -> [string]
- Returns an array of Discord invitation links
- It will return `false` if the `string` is empty or if it isn't an invitation link

# Examples

```js
const { isInvite, matchInvite } = require("is-discord-invitation");

isDiscordInvitation('https://discord.gg/J4bbax'); // true
isDiscordInvitation('www.discord.gg/xyz'); // false

matchInvite('Hey, here\'s the server invitation : https://discord.gg/J4bbax ! And here\'s another one: https://discord.com/invite/qS2Sxgy'); // ['https://discord.gg/J4bbax', 'https://discord.gg/J4bbax']
```

<p align="center">🤖</p>