import {randomNumber} from '../numbers/random-number';

export function undetectableSplitString(str) {
  let output = '';
  const strLng = str.length;
  let nextWordSize;

  for (let i = 0; i < strLng; i++) {
    if (!nextWordSize) {
      nextWordSize = randomNumber(1, 10);
    }

    output += str[i];
    nextWordSize -= 1;

    if (!nextWordSize) {
      output += ' ';
    }
  }

  return output;
}