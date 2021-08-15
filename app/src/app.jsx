import {
  Route,
  Switch,
} from 'react-router-dom';
import AppLayout from './components/page/layout';
import ContactsPage from './components/pages/contacts';
import HomePage from './components/pages/home';
import PageNavigation from './components/page/navigation';
import Router from './components/config/router';
import UnlockPage from './components/pages/unlock';

export default function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/" exact>
            <HomePage>
              <PageNavigation/>
            </HomePage>
          </Route>

          <Route path="/unlock">
            <UnlockPage/>
          </Route>

          <Route path="/contacts">
            <ContactsPage>
              <PageNavigation/>
            </ContactsPage>
          </Route>

          <Route path="*">
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}