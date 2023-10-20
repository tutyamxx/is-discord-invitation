/**
 *  is-discord-invitation - Checks if a string is an official Discord invitation link
 *  @version: v1.0.10
 *  @link: https://github.com/tutyamxx/is-discord-invitation
 *  @license: MIT
 **/

module.exports = (paramString) => {
    if (!paramString || typeof paramString !== 'string') {
        return false;
    }

    if (/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite|discord.com\/invite|watchanimeattheoffice.com\/invite|dis.gd\/invite|bigbean.solutions\/invite)\/+[a-zA-Z0-9]{4,16}/gi.test(paramString)) {
        return true;
    }

    return false;
};
