import * as localforage from 'localforage';
import {EncryptStorage} from './encrypted-storage';
import {resetKeyPairs} from '../../hooks/use-key-pairs';
let encryptStorage;
window.localforage = localforage;

export function getItemFromStorage(keyName) {
  if (!encryptStorage) return null;
  return encryptStorage.decrypt(keyName);
}

export function setItemInStorage(keyName, value) {
  if (!encryptStorage) throw new Error('Pin not set');
  return encryptStorage.encrypt(keyName, value);
}

export function setStoragePin(pin) {
  encryptStorage = new EncryptStorage(pin, localforage);
}

export function disableStorage() {
  encryptStorage = null;
  resetKeyPairs();
}