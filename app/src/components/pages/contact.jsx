import {Helmet} from 'react-helmet-async';
import {Link, Route, Switch, useParams, useRouteMatch} from 'react-router-dom';
import {buildPageTitle} from '../page/page-title';
import {getContact} from '../../lib/contacts/contacts-store';
import {useEffect, useState} from 'react';
import ContactAvatar from '../contacts/avatar';
import PrivateMessages from './contact/private-messages';
import PublicMessages from './contact/public-messages';

export default function ContactPage() {
  const {id} = useParams();
  const {path, url} = useRouteMatch();

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
          <h1 className="text-center">{contact.name.get()}</h1>

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