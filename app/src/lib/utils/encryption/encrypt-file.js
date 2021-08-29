import {box, randomBytes} from 'tweetnacl';
import {decodeBase64} from 'tweetnacl-util';
import {formatToBase64Undetectable} from '../undetectable/format-to-base-64-undetectable';
import {getPrivateKey} from './keys';

export async function encryptFile(publicKeyString, file) {
  const nonce = randomBytes(box.nonceLength);
  const pubKeyUInt8Array = decodeBase64(publicKeyString);

  const outputFileIntArray = box(
      new Uint8Array(await file.arrayBuffer()),
      nonce,
      pubKeyUInt8Array,
      await getPrivateKey(),
  );

  const outputFile = new Blob([outputFileIntArray], {
    type: 'application/octet-stream',
  });
  const extension = file.name.split('.').pop();

  return {
    fileName: `${formatToBase64Undetectable(nonce)}-${extension}.txt`,
    outputFile,
  };
}