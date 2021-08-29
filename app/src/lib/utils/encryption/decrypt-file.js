import {box} from 'tweetnacl';
import {decodeBase64} from 'tweetnacl-util';
import {decodeBase64Undetectable} from '../undetectable/decode-base-64-undetectable';
import {getPrivateKey} from './keys';
import {isEmpty} from 'lodash';
import {v4 as uuidv4} from 'uuid';

export async function decryptFile(publicKeyString, encryptedFile) {
  const match = encryptedFile.name.match(/-(.*)\.txt$/);
  if (isEmpty(match)) throw new Error('Invalid encrypted file');
  const [fullExtension, extension] = match;

  const nonce = decodeBase64Undetectable(encryptedFile.name.replace(fullExtension, ''));
  const pubKeyUInt8Array = decodeBase64(publicKeyString);

  const decryptedFileInt8 = box.open(new Uint8Array(await encryptedFile.arrayBuffer()), nonce, pubKeyUInt8Array, await getPrivateKey());

  const decryptedFile = new Blob([decryptedFileInt8], {
    type: 'application/octet-stream',
  });

  return {
    decryptedFile,
    fileName: `${uuidv4()}.${extension}`,
  };
}