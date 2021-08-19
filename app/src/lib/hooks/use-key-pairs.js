import {createState, useState} from '@hookstate/core';

const store = createState({
  privateKey: null,
  publicKey: null,
});

export function useKeyPairs() {
  const state = useState(store);

  return {
    privateKey: state.privateKey.get(),
    publicKey: state.publicKey.get(),
    setKeyPair({publicKey, privateKey}) {
      store.merge({
        privateKey, publicKey,
      });
    },
  };
}

export function resetKeyPairs() {
  store.merge({
    privateKey: null,
    publicKey: null,
  });
}