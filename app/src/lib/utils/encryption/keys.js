import {getItemFromStorage} from "./storage";
import * as ed from 'noble-ed25519';
import {isEmpty} from 'lodash';

let privateKey,
  publicKey;

export async function getPrivateKey(){
  if(!isEmpty(privateKey)) return privateKey
  return privateKey = await getItemFromStorage('private-key');
}

export async function getPublicKey(){
  if(!isEmpty(publicKey)) return publicKey;
  
  let pk = await getPrivateKey();
  if(isEmpty(pk)) return;
  pk = Uint8Array.from(pk);
  return publicKey = await ed.getPublicKey(pk);
}