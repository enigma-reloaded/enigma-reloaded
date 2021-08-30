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
      <div className="min-h-screen flex flex-col justify-between">
        {
          isUnlocked && <div>
            {children}
          </div>
        }

        <div className="text-center pt-4">
          Don't be evil
        </div>
      </div>
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