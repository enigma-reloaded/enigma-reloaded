import {isEmpty} from 'lodash';
import {v4 as uuidv4} from 'uuid';

import {RecordContact} from './record-contact';
import {restoreBase64String} from '../utils/undetectable/decode-base-64-undetectable';

export function importContactFromString(str) {
  let [publicKey, name, emailHash] = str.replace(/\s/g, '').split('.');
  name = atob(name);

  name = isEmpty(name) ? 'Unknown user' : name;

  const record = new RecordContact({
    emailHash, id: uuidv4(), name, publicKey: restoreBase64String(publicKey),
  });
  record.save();
}