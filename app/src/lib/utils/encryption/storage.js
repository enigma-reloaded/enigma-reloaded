import * as localforage from 'localforage';
import {EncryptStorage} from './encrypted-storage';
import {resetKeyPairs} from '../../hooks/use-key-pairs';
let encryptStorage;
window.localforage = localforage;

export function getItemFromStorage(keyName) {
  if (!encryptStorage) return null;
  return encryptStorage.decrypt(keyName);
}

export function deleteItemInStorage(keyName) {
  if (!encryptStorage) throw new Error('Pin not set');

  return encryptStorage.storage.removeItem(keyName);
}

export function setItemInStorage(keyName, value) {
  if (!encryptStorage) throw new Error('Pin not set');
  return encryptStorage.encrypt(keyName, value);
}

export function setStoragePin(pin) {
  encryptStorage = new EncryptStorage(pin, localforage);
}

export async function exportStorage() {
  const result = {};
  await encryptStorage.storage.iterate((value, key) => {
    result[key] = value;
  });

  return result;
}

export function disableStorage() {
  encryptStorage = null;
  resetKeyPairs();
}