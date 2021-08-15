import {box} from 'tweetnacl';

export function generateKeys() {
  return box.keyPair();
}