/**
 *  is-discord-invitation - Checks if a string is an official Discord invitation link
 *  @version: v1.0.16
 *  @link: https://github.com/tutyamxx/is-discord-invitation
 *  @license: MIT
 **/

/**
 * Checks whether a given string is a Discord invitation link.
 *
 * The function validates URLs for various Discord domains including:
 * - discord.gg, discord.io, discord.me, dis.gd
 * - discordapp.com/invite, discord.com/invite
 * - watchanimeattheoffice.com/invite, bigbean.solutions/invite
 *
 * @param {string} paramString - The string to test.
 * @returns {boolean} Returns `true` if the string matches a Discord invite URL, otherwise `false`.
 *
 * @example
 * isDiscordInvitation("https://discord.gg/abcd"); // true
 * isDiscordInvitation("hello world"); // false
 */
const isDiscordInvitation = (paramString) => {
    if (!paramString || typeof paramString !== 'string') {
        return false;
    }

    if (/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite|discord.com\/invite|watchanimeattheoffice.com\/invite|dis.gd\/invite|bigbean.solutions\/invite)\/+[a-zA-Z0-9]{4,16}/gi.test(paramString)) {
        return true;
    }

    return false;
};

// --| CommonJS export
module.exports = isDiscordInvitation;

// --| ESM default export for `import` statements
module.exports.default = isDiscordInvitation;
