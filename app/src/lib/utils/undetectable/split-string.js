import {chunkString} from '../string/chunk-string';
import {randomNumber} from '../numbers/random-number';

export function undetectableSplitString(str) {
  const slices = Math.ceil(randomNumber(3, str.length - 4) / 6);

  return chunkString(str, slices).join(' ');
}