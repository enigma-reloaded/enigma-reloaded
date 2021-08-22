import {decodeBase64} from 'tweetnacl-util';

export function decodeBase64Undetectable(base64String) {
  if (base64String.length % 4 !== 0) {
    base64String += ('===').slice(0, 4 - (base64String.length % 4));
  }

  return decodeBase64(base64String);
}