import {
  encodeBase64,
} from 'tweetnacl-util';
import {isEmpty} from 'lodash';

export function formatKeyReadable(key) {
  if (isEmpty(key)) return;

  return encodeBase64(key);
}