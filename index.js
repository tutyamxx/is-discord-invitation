/**
 *  is-discord-invitation - Checks if a string is an official Discord invitation link
 *  @version: v1.0.2
 *  @link: https://github.com/tutyamxx/is-discord-invitation
 *  @license: MIT
 **/

 module.exports = (szString) =>
 {
    if(szString.length <= 0 || !szString || typeof szString !== "string")
    {
        return false;
    }

    if(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite|discord.com\/invite)\/+[a-zA-Z0-9]{6,16}/gi.test(szString))
    {
        return true;
    }

    return false;
 };