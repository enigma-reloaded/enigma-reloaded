import {PrivateMessageRecord} from './private-message-record';
import {getItemFromStorage} from '../utils/encryption/storage';
import {isEmpty} from 'lodash';

export function loadPrivateMessagesForContact(contact) {
  const key = `private-messages-${contact.id}`;

  const rawMessages = getItemFromStorage(key);
  if (isEmpty(rawMessages)) return [];

  return rawMessages.map((m) => {
    const message = new PrivateMessageRecord(m);
    message.contact = contact;
    return message;
  });
}