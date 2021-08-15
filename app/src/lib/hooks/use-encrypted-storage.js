import {useEffect, useState} from "react";
import {getItemFromStorage, setItemInStorage} from "../utils/encryption/storage";

export function useEncryptedStorage(keyName){
  const [state, setState] = useState();
  useEffect(() => {
    getItemFromStorage(keyName).then((value) => {
      setState(value);
    })
  }, [setState, keyName]);
  
  const setStateWrapper = (value) => {
    setState(value);
    setItemInStorage(keyName, value);
  }
  
  return [state, setStateWrapper];
}