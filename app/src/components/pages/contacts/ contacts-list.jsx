import {contactsStore} from '../../../lib/contacts/contacts-store';
import {useState} from '@hookstate/core';
import ContactListItem from './contact-list-item';

export default function ContactsList() {
  const state = useState(contactsStore);

  return (
    <>
      {
        state.contacts.map((contact) => {
          return (
            <ContactListItem contact={contact} key={contact.id.get()}/>
          );
        })
      }
    </>
  );
}