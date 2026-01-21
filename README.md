# is-discord-invitation

<p align="center">🤖</p>

<p align="center"><a href="https://nodei.co/npm/is-discord-invitation/"><img src="https://nodei.co/npm/is-discord-invitation.png"></a></p>

* NPM package that checks if a string is an official Discord invitation link
* Useful when creating bots and you want to detect **easily** if the message sent by the user is an invitation to another Discord server.
* ♻️ Works seamlessly with `CommonJS`, `ESM` and `TypeScript`

# Install [NPM](https://www.npmjs.com/package/is-discord-invitation)

 `$ npm i is-discord-invitation`

# Usage

- Returns a Boolean indicating whether `string` is a  Discord invitation link
- It will return `false` if the `string` is empty or if it isn't an invitation link

# Examples

## CommonJS
```javascript
const isDiscordInvitation = require("is-discord-invitation");

if (isDiscordInvitation("https://discord.gg/J4bbax")) {
    console.log("Hey, no spamming with invites please 😡");
}
```

## ESM
```javascript
import isDiscordInvitation from 'is-discord-invitation';

if (isDiscordInvitation("https://discord.gg/J4bbax")) {
    console.log("Hey, no spamming with invites please 😡");
}
```

## TypeScript
```javascript
import isDiscordInvitation from 'is-discord-invitation';

const testString: string = "https://discord.gg/J4bbax";

if (isDiscordInvitation(testString)) {
    console.log("Hey, no spamming with invites please 😡");
}
```

<p align="center">🤖</p>