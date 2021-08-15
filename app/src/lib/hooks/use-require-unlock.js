import { useHistory, useLocation } from "react-router-dom";
import {useLocalForage} from "./use-local-forage";
import {useEffect, useState} from "react";
import {usePublicKey} from "./use-public-key";
import {useIdle} from 'react-use';
import {disableStorage} from "../utils/encryption/storage";


export function useRequireUnlock(){
  const history = useHistory();
  const location = useLocation();
  const publicKey = usePublicKey();
  const [isPrivateKeyInitialized] = useLocalForage('pk-initialized');
  const [state, setState] = useState(false);
  const isIdle = useIdle(120e3);
  
  useEffect(() => {
    if(isPrivateKeyInitialized === undefined) return;
    if(isPrivateKeyInitialized === null) return setState(true);
    
    if(publicKey) return setState(true);
    
    setTimeout(() => {
      history.push(`/unlock?redirectTo=${location.pathname}`);
    }, 50)
  }, [isPrivateKeyInitialized, history, publicKey, location, setState, location.pathname]);
  
  useEffect(() => {
    if(!publicKey) return;
    if(!isIdle) return;
    disableStorage();
    setTimeout(() => {
      history.push(`/unlock?redirectTo=${location.pathname}`);
    }, 50)
  }, [isIdle, publicKey, history, location.pathname]);
  
  return state;
}