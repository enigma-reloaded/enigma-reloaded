import {disableStorage} from '../utils/encryption/storage';
import {useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {useIdle} from 'react-use';
import {useKeyPairs} from './use-key-pairs';

export function useRequireUnlock() {
  const history = useHistory();
  const location = useLocation();
  const {publicKey} = useKeyPairs();
  const [state, setState] = useState(false);
  const isIdle = useIdle(120e3);

  useEffect(() => {
    if (!publicKey) {
      return history.push(`/unlock?redirectTo=${location.pathname}`);
    }
    setState(true);
  }, [publicKey, setState, history, location]);

  useEffect(() => {
    if (!publicKey) return;
    if (!isIdle) return;
    history.push(`/unlock?redirectTo=${location.pathname}`);
    setTimeout(disableStorage, 50);
  }, [isIdle, publicKey, history, location.pathname]);

  return state;
}