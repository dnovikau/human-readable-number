const oneToStr = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
};

const tenToStr = {
  '2': 'twenty',
  '3': 'thirty',
  '4': 'forty',
  '5': 'fifty',
  '6': `${oneToStr[6]}ty`,
  '7': `${oneToStr[7]}ty`,
  '8': `${oneToStr[8]}y`,
  '9': `${oneToStr[9]}ty`,
}

module.exports = function toReadable (number) {
  const hundreds = Math.floor(number/100);
  const isLessTwenty = Math.floor(number%100) < 20;
  const tens = isLessTwenty ? 0 : Math.floor(number%100/10);
  const ones = isLessTwenty ? Math.floor(number%100) : Math.floor(number%100%10);

  const result = `${hundreds ? oneToStr[hundreds] + ' hundred' : ''}` +
    `${tens && tenToStr[tens] ? ' ' + tenToStr[tens] : ''}` +
    `${number === 0 ? oneToStr[number] : ones && oneToStr[ones] ? ' ' + oneToStr[ones] : ''}`;

  return result.trim();
}
