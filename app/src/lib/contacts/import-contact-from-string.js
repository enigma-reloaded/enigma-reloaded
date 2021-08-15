import {v4 as uuidv4} from 'uuid';

import {RecordContact} from './record-contact';

export function importContactFromString(str) {
  let [publicKey, name, emailHash] = str.replace(/\s/g, '').split('.');
  name = atob(name);

  const record = new RecordContact({
    emailHash, id: uuidv4(), name, publicKey,
  });
  record.save();
}