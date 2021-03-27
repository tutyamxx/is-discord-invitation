/**
 *  is-discord-invitation - Checks if a string is an official Discord invitation link
 *  @version: v1.0.4
 *  @link: https://github.com/tutyamxx/is-discord-invitation
 *  @license: MIT
 **/

/**
 * Test if a string is a discord invitation or not.
 * @param {String} invite
 * @returns {Boolean}
 */
module.exports = (invite) => {
	if(!invite || invite.length <= 0 || typeof invite !== 'string') return false;

	return /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite|discord.com\/invite)\/+[a-zA-Z0-9]{6,16}/gi.test(invite);
};