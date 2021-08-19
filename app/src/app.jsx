import {AppSetup} from './components/page/app-setup';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {UnlockedRoute} from './components/page/unlocked';
import AppLayout from './components/page/layout';
import ContactPage from './components/pages/contact';
import ContactsPage from './components/pages/contacts';
import HomePage from './components/pages/home';
import PageNotFound from './components/pages/page-not-found';
import PageTitle from './components/page/page-title';
import Router from './components/config/router';
import UnlockPage from './components/pages/unlock';

export default function App() {
  return (
    <PageTitle>
      <Router>
        <AppLayout>
          <Switch>
            <UnlockedRoute path="/" exact>
              <HomePage/>
            </UnlockedRoute>

            <UnlockedRoute path="/contacts/:id">
              <ContactPage/>
            </UnlockedRoute>

            <UnlockedRoute path="/contacts">
              <ContactsPage/>
            </UnlockedRoute>

            <Route path="/unlock">
              <AppSetup>
                <UnlockPage/>
              </AppSetup>
            </Route>

            <Route path="*">
              <PageNotFound/>
            </Route>
          </Switch>
        </AppLayout>
      </Router>
    </PageTitle>
  );
}