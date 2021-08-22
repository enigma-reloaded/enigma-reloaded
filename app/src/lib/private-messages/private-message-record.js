import {copyToClipboard} from '../utils/actions/copy-to-clipboard';
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
  }

  async save() {
    console.log(this.contact.messages);
    this.contact.messages.merge([this]);
  }
}

export async function createNewPrivateMessageRecord(messageRaw, encryptedMessage, contact) {
  const createdAt = new Date();
  const id = uuidv4();
  const mine = true;
  const record = new PrivateMessageRecord({
    contact, createdAt, encryptedMessage,
    id, messageRaw, mine,
  });

  await record.save();

  return record;
}