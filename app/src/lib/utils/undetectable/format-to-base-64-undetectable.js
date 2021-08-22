import {
  encodeBase64,
} from 'tweetnacl-util';
import {isEmpty} from 'lodash';

export function formatToBase64Undetectable(string) {
  if (isEmpty(string)) return;

  const output = encodeBase64(string);

  return output.replace(/=/g, '');
}