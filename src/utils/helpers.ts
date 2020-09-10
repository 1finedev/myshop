export const timeout = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

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
