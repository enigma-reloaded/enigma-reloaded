import * as localforage from 'localforage';
import {createState, useState} from '@hookstate/core';
import {useEffect} from 'react';
const globalState = createState({});

export function useLocalForage(keyName) {
  const state = useState(globalState);

  useEffect(() => {
    if (state[keyName].get() !== undefined) return;

    localforage.getItem(keyName).then((value) => {
      state.merge({
        [keyName]: value,
      });
    });
  }, [keyName, state]);

  function setter(value) {
    state.merge({
      [keyName]: value,
    });
    localforage.setItem(keyName, value);
  }
  let outputValue = state[keyName].get();
  if (outputValue === undefined) {
    outputValue = 'NOT_READY';
  }

  return [outputValue, setter];
}