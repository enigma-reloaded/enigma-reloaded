import {decodeBase64} from 'tweetnacl-util';

export function decodeBase64Undetectable(base64String) {
  return decodeBase64(restoreBase64String(base64String));
}

export function restoreBase64String(base64StringUndetectable) {
  if (base64StringUndetectable.length % 4 !== 0) {
    base64StringUndetectable += ('===').slice(0, 4 - (base64StringUndetectable.length % 4));
  }

  return base64StringUndetectable;
}