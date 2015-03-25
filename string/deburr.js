import baseToString from '../internal/baseToString';
import deburrLetter from '../internal/deburrLetter';

/**
 * Used to match combining diacritical marks.
 * See [Wikipedia](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks)
 * for more details.
 */
var reComboMarks = /[\u0300-\u036f\ufe20-\ufe23]/g;

/** Used to match latin-1 supplementary letters (excluding mathematical operators). */
var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

/**
 * Deburrs `string` by converting latin-1 supplementary letters to basic latin letters.
 * See [Wikipedia](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = baseToString(string);
  return string && string.replace(reLatin1, deburrLetter).replace(reComboMarks, '');
}

export default deburr;
