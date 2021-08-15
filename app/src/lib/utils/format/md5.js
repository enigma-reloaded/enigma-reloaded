import {MD5 as cryptoMd5} from 'crypto-js';

export function md5(str) {
  return cryptoMd5(str).toString();
}