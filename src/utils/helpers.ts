export const hasUpperCase = (str?: string): boolean => {
  return str ? str.toLowerCase() !== str : false;
};

export const hasLowerCase = (str?: string): boolean => {
  return str ? str.toUpperCase() !== str : false;
};

export const hasSpecialCharacter = (str?: string): boolean => {
  return str
    ? /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(str)
    : false;
};
