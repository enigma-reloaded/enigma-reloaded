import {box, randomBytes} from 'tweetnacl';
import {decodeBase64, decodeUTF8} from 'tweetnacl-util';
import {formatToBase64Undetectable} from '../undetectable/format-to-base-64-undetectable';
import {getPrivateKey} from './keys';

export async function encryptMessage(publicKeyString, messageString) {
  const pubKeyUInt8Array = decodeBase64(publicKeyString);
  const msgUInt8Array = decodeUTF8(messageString);
  const nonce = randomBytes(box.nonceLength);

  const encryptedMessage = box(
      msgUInt8Array,
      nonce,
      pubKeyUInt8Array,
      await getPrivateKey(),
  );
  return formatToBase64Undetectable(encryptedMessage);
}