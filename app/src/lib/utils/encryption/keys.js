import {getItemFromStorage} from './storage';
import {isEmpty} from 'lodash';

let privateKey;
let publicKey;

export async function getPrivateKey() {
  if (!isEmpty(privateKey)) return privateKey;
  const pk = await getItemFromStorage('key-pair');
  if (isEmpty(pk)) return;
  return privateKey = Uint8Array.from(pk.secretKey);
}

export async function getPublicKey() {
  if (!isEmpty(publicKey)) return publicKey;
  const pk = await getItemFromStorage('key-pair');
  if (isEmpty(pk)) return;
  return publicKey = Uint8Array.from(pk.publicKey);
}