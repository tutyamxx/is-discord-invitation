const isDiscordInvitation = require("../index.js");

const ValidDiscordInviteURL =
[
    "https://discord.gg/d8ZKqT",
    "https://discord.gg/MTgFwr",
    "https://discord.gg/BEXg3z",
    "https://discord.com/invite/qS2Sxgy",
    "https://discord.com/invite/ASGu7aC",
    "https://discordapp.com/invite/ASGu7aC",
    "www.discordapp.com/invite/ASGu7aC"
];

const RandomDiscordURL =
[
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

test("Check for valid Discord invites", () =>
{
    ValidDiscordInviteURL.forEach((url) =>
    {
        expect(isDiscordInvitation(url)).toBe(true);
    });
});

test("Check for random invalid Discord invite links", () =>
{
    RandomDiscordURL.forEach((url) =>
    {
        expect(isDiscordInvitation(url)).toBe(false);
    });
});