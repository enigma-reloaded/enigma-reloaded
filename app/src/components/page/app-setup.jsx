import {useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {useLocalForage} from '../../lib/hooks/use-local-forage';
import SetupGeneratePrivateKey from '../setup/generate-private-key';

export function AppSetup({children}) {
  const location = useLocation();
  const history = useHistory();
  const [isPrivateKeyInitialized] = useLocalForage('pk-initialized');
  const initialized = isPrivateKeyInitialized !== null;
  const notReady = isPrivateKeyInitialized === 'NOT_READY';

  useEffect(() => {
    if (notReady) return;
    if (!initialized && location.pathname !== '/') {
      history.push('/');
    }
  }, [location, history, notReady, initialized]);

  if (notReady) return null;
  if (initialized) return children;

  return (
    <SetupGeneratePrivateKey/>
  );
}