const isDiscordInvitation = require("../index.js");

const validDiscordInviteUrl = [
    // --| Official Discord URL
    "https://discord.gg/d8ZKqT",
    "https://discord.gg/MTgFwr",
    "https://discord.gg/BEXg3z",
    "https://discord.com/invite/qS2Sxgy",
    "https://discord.com/invite/ASGu7aC",
    "https://discordapp.com/invite/ASGu7aC",
    "www.discordapp.com/invite/ASGu7aC",

    // --| watchanimeattheoffice.com - Official Discord URL
    "www.watchanimeattheoffice.com/invite/x34ad",
    "https://watchanimeattheoffice.com/invite/1x2f3g",

    // --| bigbean.solutions - Official Discord URL
    "www.bigbean.solutions/invite/xsnhshbh3",
    "https://bigbean.solutions/invite/12xf",
    "bigbean.solutions/invite/43vx62v",

    // --| dis.gd - Official Discord URL
    "www.dis.gd/invite/qS2Sxgy",
    "https://dis.gd/invite/MTgFwr"
];

const randomDiscordUrl = [
    "www.github.com",
    "www.discord.org",
    "www.discord.gg",
    "htts://discord.gg",
    "https://www.discord.gg",
    "www.discord.gg/xyz",
    "http://discord.gg/x",
    "https://discordapp.com/api/oauth2/authorize?client_id=412067927333011470&permissions=8&scope=bot",
    "http://discord.kekw",
    "https://www.npmjs.com/package/is-discord-invite"
]

test("Check for valid Discord invites", () => validDiscordInviteUrl.forEach((url) => expect(isDiscordInvitation(url)).toBe(true)));
test("Check for random invalid Discord invite links", () => randomDiscordUrl.forEach((url) => expect(isDiscordInvitation(url)).toBe(false)));
