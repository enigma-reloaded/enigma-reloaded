import * as localforage from 'localforage';
import {useEffect, useState} from 'react';

export function useLocalForage(keyName) {
  const [state, setState] = useState();
  useEffect(() => {
    localforage.getItem(keyName).then((value) => {
      setState(value);
    });
  }, [setState, keyName]);

  const setStateWrapper = (value) => {
    setState(value);
    localforage.setItem(keyName, value);
  };

  return [state, setStateWrapper];
}