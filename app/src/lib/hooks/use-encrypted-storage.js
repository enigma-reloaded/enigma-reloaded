import {getItemFromStorage, setItemInStorage} from '../utils/encryption/storage';
import {useEffect, useState} from 'react';

export function useEncryptedStorage(keyName) {
  const [state, setState] = useState();
  useEffect(() => {
    getItemFromStorage(keyName).then((value) => {
      setState(value);
    });
  }, [setState, keyName]);

  const setStateWrapper = (value) => {
    setState(value);
    setItemInStorage(keyName, value);
  };

  return [state, setStateWrapper];
}

export function useMultipleEncryptedStorage(...keyNames) {
  const [state, setState] = useState({});

  useEffect(() => {
    const promises = keyNames.map(async (keyName) => {
      return {
        keyName,
        value: await getItemFromStorage(keyName),
      };
    });

    Promise.all(promises).then((values) => {
      const result = {};

      values.forEach((v) => {
        result[v.keyName] = v.value;
      });

      setState(result);
    });
  }, [setState, keyNames]);

  return state;
}