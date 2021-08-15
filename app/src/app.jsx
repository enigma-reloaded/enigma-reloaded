import HomePage from "./components/pages/home";
import AppLayout from "./components/page/layout";
import {
  Switch,
  Route,
} from "react-router-dom";
import UnlockPage from "./components/pages/unlock";
import ContactsPage from "./components/pages/contacts";
import PageNavigation from "./components/page/navigation";
import Router from "./components/config/router";

export default function App(){
  return(
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
  )
}