import {AppSetup} from './app-setup';
import {Route} from 'react-router-dom';
import {useRequireUnlock} from '../../lib/hooks/use-require-unlock';
import PageNavigation from './navigation';

export default function Unlocked({children}) {
  const isUnlocked = useRequireUnlock();

  return (
    <div>
      <div>
        <PageNavigation/>
      </div>
      {
        isUnlocked && <div>
          {children}
        </div>
      }
    </div>
  );
}

export function UnlockedRoute({children, ...opts}) {
  return (
    <Route {...opts}>
      <AppSetup>
        <Unlocked>
          {children}
        </Unlocked>
      </AppSetup>
    </Route>
  );
}