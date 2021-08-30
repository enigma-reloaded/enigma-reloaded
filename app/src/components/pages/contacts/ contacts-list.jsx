import {contactsStore} from '../../../lib/contacts/contacts-store';
import {useRef} from 'react';
import {useState} from '@hookstate/core';
import ContactListItem from './contact-list-item';
import ViewportList from 'react-viewport-list';

export default function ContactsList() {
  const state = useState(contactsStore);
  const ref = useRef(null);

  return (
    <div className="scroll-container" ref={ref}>
      <ViewportList
        viewportRef={ref}
        items={state.contacts}
        itemMinSize={20}
      >
        {(contact) => (
          <div key={contact.id.get()} className="item">
            <ContactListItem contact={contact}/>
          </div>
        )}
      </ViewportList>
    </div>
  );
}