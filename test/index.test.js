/* eslint-disable no-undef */
const { isInvite, matchInvite } = require('../index.js');

const ValidDiscordInviteURL = [
	'https://discord.gg/d8ZKqT',
	'https://discord.gg/MTgFwr',
	'https://discord.gg/BEXg3z',
	'https://discord.com/invite/qS2Sxgy',
	'https://discord.com/invite/ASGu7aC',
	'https://discordapp.com/invite/ASGu7aC',
	'www.discordapp.com/invite/ASGu7aC',
	'discord.gg/d8ZKqT',
	'discordapp.com/invite/ASGu7aC',
	'discord.com/invite/qS2Sxgy',
];

const RandomDiscordURL = [
	'www.github.com',
	'www.discord.org',
	'www.discord.gg',
	'htts://discord.gg',
	'https://www.discord.gg',
	'www.discord.gg/xyz',
	'http://discord.gg/x',
	'https://discordapp.com/api/oauth2/authorize?client_id=412067927333011470&permissions=8&scope=bot',
	'http://discord.kekw',
	'https://www.npmjs.com/package/is-discord-invite',
	5,
	true,
	() => null,
];

test('Check for valid Discord invites', () => {
	ValidDiscordInviteURL.forEach((url) => {
		expect(isInvite(url)).toBe(true);
	});
});

test('Check for random invalid Discord invite links', () => {
	RandomDiscordURL.forEach((url) => {
		expect(isInvite(url)).toBe(false);
	});
});

test('Match one or more Discord invite links in a string', () => {
	const valid1 = ValidDiscordInviteURL[ValidDiscordInviteURL.length - 1];
	const valid2 = ValidDiscordInviteURL[ValidDiscordInviteURL.length - 1];
	const stringToTest = `${Math.random().toString(36).substring(7)}${valid1} ${Math.random().toString(36).substring(7)} ${valid2} ${Math.random().toString(36).substring(7)}`;

	expect(matchInvite(stringToTest)).toEqual([valid1, valid2]);
});