import {box} from 'tweetnacl';
import {decodeBase64, encodeUTF8} from 'tweetnacl-util';
import {decodeBase64Undetectable} from '../undetectable/decode-base-64-undetectable';
import {getPrivateKey} from './keys';
import {isEmpty} from 'lodash';

export async function decryptMessage(publicKeyString, encryptedString) {
  const [encryptedMessageString, nonceString] = encryptedString.split(/\?|!|\.|,/);
  if (isEmpty(encryptedMessageString) || isEmpty(nonceString)) throw new Error('Invalid encrypted message');
  const pubKeyUInt8Array = decodeBase64(publicKeyString);
  const nonce = decodeBase64Undetectable(nonceString);
  const encryptedMessage = decodeBase64Undetectable(encryptedMessageString);
  const decryptedMessage = box.open(encryptedMessage, nonce, pubKeyUInt8Array, await getPrivateKey());
  return encodeUTF8(decryptedMessage);
}