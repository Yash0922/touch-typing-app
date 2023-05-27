const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_-+={}[]|\\'\"<>:;,./?";

export const allowedKeys = [...alphabet, ...alphabet.toUpperCase(), ...numbers, ...symbols, " "];

const words = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'AS', 'AD', 'AF', 'AG', 'AH', 'AJ', 'AK', 'AL', 'Aa', 'As', 'Ad', 'Af', 'Ag', 'Ah', 'Aj', 'Ak', 'Al', 'SD', 'SF', 'SG', 'SH', 'SJ', 'SK', 'SL', 'Sa', 'Ss', 'Sd', 'Sf', 'Sg']
;

export function generateRandomWords() {
  const shuffled = words
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled.join(" ");
}
