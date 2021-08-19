import {AddNewContact} from './contacts/add-new-contact';
import {Helmet} from 'react-helmet-async';
import {buildPageTitle} from '../page/page-title';
import ContactsList from './contacts/ contacts-list';
import ContactsStoreLoader from './contacts/contacts-store-loader';

export default function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>{buildPageTitle('Contacts')}</title>
      </Helmet>
      <div className="w-full md:w-1/3 mx-auto pt-4">
        <h1 className="text-center text-2xl font-bold">Contacts</h1>

        <div className="flex justify-end">
          <AddNewContact/>
        </div>

        <div>
          <ContactsStoreLoader>
            <ContactsList/>
          </ContactsStoreLoader>
        </div>
      </div>
    </>
  );
}