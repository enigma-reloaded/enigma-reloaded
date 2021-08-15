import * as Crypto from 'crypto-js';

export function md5(str){
  return Crypto.MD5(str).toString();
}