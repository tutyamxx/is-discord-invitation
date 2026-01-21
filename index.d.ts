/**
 * Checks whether a given string is a Discord invitation link.
 *
 * The function validates URLs for various Discord domains including:
 * - discord.gg, discord.io, discord.me, dis.gd
 * - discordapp.com/invite, discord.com/invite
 * - watchanimeattheoffice.com/invite, bigbean.solutions/invite
 *
 * @param paramString - The string to test.
 * @returns `true` if the string matches a Discord invite URL, otherwise `false`.
 */
declare function isDiscordInvitation(paramString: string | undefined | null): boolean;

export = isDiscordInvitation;
