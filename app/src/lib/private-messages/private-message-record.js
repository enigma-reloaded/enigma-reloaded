import {copyToClipboard} from '../utils/actions/copy-to-clipboard';
import {feedBackSuccess} from '../feedback/success';
import {getItemFromStorage, setItemInStorage} from '../utils/encryption/storage';
import {isEmpty} from 'lodash';
import {none} from '@hookstate/core';
import {undetectableSplitString} from '../utils/undetectable/split-string';
import {v4 as uuidv4} from 'uuid';

export class PrivateMessageRecord {
  constructor({id, messageRaw, encryptedMessage, contact, createdAt, mine}) {
    this.id = id;
    this.messageRaw = messageRaw;
    this.encryptedMessage = encryptedMessage;
    this.contact = contact;
    this.createdAt = createdAt;
    this.mine = mine;
  }

  copyToClipBoard() {
    copyToClipboard(undetectableSplitString(this.encryptedMessage));
    feedBackSuccess('Encrypted message copied to clipboard');
  }

  async save() {
    this.contact.messages.merge([this]);
    const key = `private-messages-${this.contact.id.get()}`;

    let rawMessages = await getItemFromStorage(key);
    if (isEmpty(rawMessages)) rawMessages = [];

    rawMessages.push(this.serialize());

    setItemInStorage(key, rawMessages);
  }

  serialize() {
    return {
      createdAt: this.createdAt,
      encryptedMessage: this.encryptedMessage,
      id: this.id,
      messageRaw: this.messageRaw,
      mine: this.mine,
    };
  }

  async destroy() {
    const contactIndex = this.contact.messages.findIndex((message) => {
      return message.id.get() === this.id;
    });

    this.contact.messages[contactIndex].set(none);
    const key = `private-messages-${this.contact.id.get()}`;

    let rawMessages = await getItemFromStorage(key);
    rawMessages = rawMessages.filter((message) => {
      return message.id !== this.id;
    });

    setItemInStorage(key, rawMessages);
  }
}

export async function createNewPrivateMessageRecord(messageRaw, encryptedMessage, contact) {
  const createdAt = new Date().toISOString();
  const id = uuidv4();
  const mine = true;
  const record = new PrivateMessageRecord({
    contact, createdAt, encryptedMessage,
    id, messageRaw, mine,
  });

  await record.save();

  return record;
}

export async function insertDecryptedMessageRecord(messageRaw, encryptedMessage, contact) {
  const createdAt = new Date().toISOString();
  const id = uuidv4();
  const mine = false;
  const record = new PrivateMessageRecord({
    contact, createdAt, encryptedMessage,
    id, messageRaw, mine,
  });

  await record.save();

  return record;
}

export async function destroyMessageRecord(messageRecord) {
  return messageRecord.destroy();
}