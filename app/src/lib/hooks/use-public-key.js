import {getPublicKey} from '../utils/encryption/keys';
import {useEffect, useState} from 'react';

export function usePublicKey() {
  const [state, setState] = useState();

  useEffect(() => {
    getPublicKey().then((publicKey) => {
      setState(publicKey);
    });
  });

  return state;
}