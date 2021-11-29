/**
 * Function convert the first chart of text to upperCase
 * @param text
 * @returns string
 */

export const upperFirst = (text: string): string =>
  text.charAt(0).toLocaleUpperCase() + text.slice(1)
