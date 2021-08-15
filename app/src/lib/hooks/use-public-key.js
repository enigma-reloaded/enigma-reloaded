import {useEffect, useState} from "react";
import {getPublicKey} from "../utils/encryption/keys";

export function usePublicKey(){
  const [state, setState] = useState();
  
  useEffect(() => {
    getPublicKey().then((publicKey) => {
      setState(publicKey);
    });
  });
  
  return state;
}