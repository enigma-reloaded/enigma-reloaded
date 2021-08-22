import {formatToBase64Undetectable} from '../undetectable/format-to-base-64-undetectable';

export function formatKeyReadable(key) {
  return formatToBase64Undetectable(key);
}