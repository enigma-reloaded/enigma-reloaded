import {getContactsStore} from '../../../lib/contacts/contacts-store';
import {useEffect, useState} from 'react';

export default function ContactsStoreLoader({children}) {
  const [contactsStore, setContactsStore] = useState();
  useEffect(() => {
    getContactsStore().then((c) => {
      setContactsStore(c);
    });
  }, [setContactsStore]);

  if (!contactsStore) return null;

  return children;
}