import {loadPrivateMessagesForContact} from '../private-messages/private-messages-store';
import {removeContact, saveContact} from './contacts-store';

export class RecordContact {
  constructor({id, name, emailHash, publicKey}) {
    this.id = id;
    this.name = name;
    this.emailHash = emailHash;
    this.publicKey = publicKey;
    this.messages = [];
  }

  save() {
    return saveContact(this);
  }

  destroy() {
    return removeContact(this);
  }

  serialize() {
    return {
      emailHash: this.emailHash, id: this.id,
      name: this.name, publicKey: this.publicKey,
    };
  }

  serializeWithoutId() {
    const result = this.serialize();
    delete result.id;
    return result;
  }

  async loadPrivateMessages(hookstate) {
    hookstate.messages.set(await loadPrivateMessagesForContact(this));
  }
}