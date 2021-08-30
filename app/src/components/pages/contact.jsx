import {Helmet} from 'react-helmet-async';
import {Link, Route, Switch, useParams, useRouteMatch} from 'react-router-dom';
import {buildPageTitle} from '../page/page-title';
import {getContact} from '../../lib/contacts/contacts-store';
import {useEffect} from 'react';
import {useState} from '@hookstate/core';
import ContactAvatar from '../contacts/avatar';
import EditContact from './contact/edit-contact';
import PrivateMessages from './contact/private-messages';
import PublicMessages from './contact/public-messages';

export default function ContactPage() {
  const {id} = useParams();
  const {path, url} = useRouteMatch();
  const state = useState({
    contact: null,
    ready: false,
  });

  useEffect(() => {
    getContact(id).then((contact) => {
      state.merge({
        contact,
        ready: true,
      });
    });
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const {contact, ready} = state;

  if (!contact?.id?.get() && !ready.get()) return null;

  if (!contact?.id?.get()) {
    return (
      <>
        <Helmet>
          <title>{buildPageTitle('Contact not found')}</title>
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
          <div className="flex flex-wrap justify-center items-center">
            <h1 className="text-right pr-1">{contact.name.get()}</h1>
            <div className="pl-1">
              <EditContact contact={contact}/>
            </div>
          </div>

          <div>
            <div className="my-1 flex justify-center">
              <div className="px-1 underline">
                <Link to={`${url}`}>Private Messages</Link>
              </div>
              <div className="px-1 underline">
                <Link to={`${url}/public-messages`}>Public Messages</Link>
              </div>
            </div>

            <Switch>
              <Route exact path={path}>
                <PrivateMessages contact={contact}/>
              </Route>

              <Route path={`${path}/public-messages`}>
                <PublicMessages />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}