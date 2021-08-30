import {RecordContact} from './record-contact';
import {createState} from '@hookstate/core';
import {deleteItemInStorage, getItemFromStorage, setItemInStorage} from '../utils/encryption/storage';
import {isEmpty, sortBy} from 'lodash';
import {none} from '@hookstate/core';

let loadedFromStorage;

export const contactsStore = createState({
  contacts: [],
});

export function saveContact(contactRecord) {
  getItemFromStorage('contacts').then((contacts) => {
    if (isEmpty(contacts)) contacts = [];

    const existingContact = contacts.find((c) => {
      return c.publicKey === contactRecord.publicKey;
    });
    if (existingContact) {
      Object.assign(existingContact, contactRecord.serializeWithoutId());
      const storeContact = contactsStore.contacts.find((contact) => {
        return contact.publicKey.get() === contactRecord.publicKey;
      });

      storeContact.merge(contactRecord.serializeWithoutId());
    } else {
      contactsStore.contacts.set((c) => {
        c.splice(0, 0, contactRecord);
        return c;
      });
      contacts.splice(0, 0, contactRecord.serialize());
    }

    setItemInStorage('contacts', contacts);
  });
}

export async function removeContact(contactRecord) {
  let contacts = await getItemFromStorage('contacts');
  const {id} = contactRecord;
  if (isEmpty(contacts)) return;
  contacts = contacts.filter((contact) => {
    return contact.publicKey !== contactRecord.publicKey;
  });

  const contactIndex = contactsStore.contacts.findIndex((contact) => {
    return contact.publicKey.get() === contactRecord.publicKey;
  });

  if (contactIndex !== undefined) contactsStore.contacts[contactIndex].set(none);

  await setItemInStorage('contacts', contacts);
  await deleteItemInStorage(`private-messages-${id}`);
}

export async function getContactsStore() {
  if (loadedFromStorage) {
    return contactsStore;
  }

  loadedFromStorage = true;
  let contacts = await getItemFromStorage('contacts');
  if (isEmpty(contacts)) return contactsStore;

  contacts = contacts.map((c) => {
    return new RecordContact(c);
  });

  const sortedContacts = sortBy(contacts, 'name');

  contactsStore.merge({contacts: sortedContacts});

  return contactsStore;
}

export async function getContact(id) {
  const contactStore = await getContactsStore();

  const record = contactStore.contacts.find((contact) => {
    return contact.id.get() === id;
  });

  if (!record.get()) return {};

  return new RecordContact(JSON.parse(JSON.stringify(record.get())));
}