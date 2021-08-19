import {getContact} from '../../lib/contacts/contacts-store';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ContactAvatar from '../contacts/avatar';
import {Helmet} from "react-helmet-async";
import {buildPageTitle} from "../page/page-title";

export default function ContactPage() {
  const {id} = useParams();
  const [state, setState] = useState({
    contact: null,
    ready: false,
  });

  useEffect(() => {
    getContact(id).then((contact) => {
      setState((s) => {
        return {
          ...s,
          contact,
          ready: true,
        };
      });
    });
  }, [id, setState]);

  const {contact, ready} = state;

  if (!contact && !ready) return null;

  if (!contact) {
    return (
      <>
        <Helmet>
          <title>{buildPageTitle("Contact not found")}</title>
        </Helmet>
        <div>
          Contact not found
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{buildPageTitle(contact.name.get())}</title>
      </Helmet>
      <div className="w-full md:w-1/3 mx-auto">
        <div>
          <div className="flex justify-center pb-2">
            <ContactAvatar contact={contact} height="h-20" width="w-20"/>
          </div>
          <h1 className="text-center">{contact.name.get()}</h1>
        </div>
      </div>
    </>
  );
}