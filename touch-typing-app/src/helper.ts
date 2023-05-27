const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_-+={}[]|\\'\"<>:;,./?";

export const allowedKeys = [...alphabet, ...alphabet.toUpperCase(), ...numbers, ...symbols, " "];

const words = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'AS', 'AD', 'AF', 'AG', 'AH', 'AJ', 'AK', 'AL', 'Aa', 'As', 'Ad', 'Af', 'Ag', 'Ah', 'Aj', 'Ak', 'Al', 'SD', 'SF', 'SG', 'SH', 'SJ', 'SK', 'SL', 'Sa', 'Ss', 'Sd', 'Sf', 'Sg','ASD', 'ASF', 'ASG', 'ASH', 'ASJ', 'ASK', 'ASL', 'ADF', 'ADG', 'ADH', 'ADJ', 'ADK', 'ADL', 'AFG', 'AFH', 'AFJ', 'AFK', 'AFL', 'AGH', 'AGJ', 'AGK', 'AGL', 'AHJ', 'AHK', 'AHL', 'AJK', 'AJL', 'AKL', 'SDF', 'SDG', 'SDH', 'SDJ', 'SDK', 'SDL', 'SFG', 'SFH', 'SFJ', 'SFK', 'SFL', 'SGH', 'SGJ', 'SGK', 'SGL', 'SHJ', 'SHK', 'SHL', 'SJK', 'SJL', 'SKL', 'DFG', 'DFH', 'DFJ', 'DFK', 'DFL', 'DGH', 'DGJ', 'DGK', 'DGL', 'DHJ', 'DHK', 'DHL', 'DJK', 'DJL', 'DKL', 'FGH', 'FGJ', 'FGK', 'FGL', 'FHJ', 'FHK', 'FHL', 'FJK', 'FJL', 'FKL', 'GHJ', 'GHK', 'GHL', 'GJK', 'GJL', 'GKL', 'HJK', 'HJL', 'HKL', 'JKL', 'ASDF', 'ASDG', 'ASDH', 'ASDJ', 'ASDK', 'ASDL', 'ASFG', 'ASFH', 'ASFJ', 'ASFK', 'ASFL', 'ASGH', 'ASGJ', 'ASGK', 'ASGL', 'ASHJ', 'ASHK', 'ASHL', 'ASJK', 'ASJL', 'ASKL', 'ADFG', 'ADFH', 'ADFJ', 'ADFK', 'ADFL', 'ADGH', 'ADGJ', 'ADGK', 'ADGL', 'ADHJ', 'ADHK', 'ADHL', 'ADJK', 'ADJL', 'ADKL', 'AFGH', 'AFGJ', 'AFGK', 'AFGL', 'AFHJ', 'AFHK', 'AFHL', 'AFJK', 'AFJL', 'AFKL', 'AGHJ', 'AGHK']
;

export function generateRandomWords() {
  const shuffled = words
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled.join(" ");
}
