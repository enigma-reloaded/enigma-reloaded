import {isEmpty} from 'lodash';
import u8ToBase64 from "../u8-to-base64";

export function formatKeyReadable(key){
  if(isEmpty(key)) return;
  
  return u8ToBase64(key);
}