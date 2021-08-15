import {useEffect, useState} from "react";
import * as localforage from "localforage";

export function useLocalForage(keyName){
  const [state, setState] = useState();
  useEffect(() => {
    localforage.getItem(keyName).then(value => {
      setState(value);
    });
  }, [setState, keyName]);
  
  const setStateWrapper = (value) => {
    setState(value);
    localforage.setItem(keyName, value);
  }
  
  return [state, setStateWrapper];
}