import {copyToClipboard} from '../../../lib/utils/actions/copy-to-clipboard';
import {formatKeyReadable} from '../../../lib/utils/format/keys';
import {formatToBase64Undetectable} from '../../../lib/utils/undetectable/format-to-base-64-undetectable';
import {md5} from '../../../lib/utils/format/md5';
import {stringToU8} from '../../../lib/utils/format/string-to-u8';
import {undetectableSplitString} from '../../../lib/utils/undetectable/split-string';
import {useEffect} from 'react';
import {useKeyPairs} from '../../../lib/hooks/use-key-pairs';
import {useMultipleEncryptedStorage} from '../../../lib/hooks/use-encrypted-storage';
import {useState} from '@hookstate/core';
let copyTimeout;

export default function ShowSharablePublicKey() {
  const {publicKey} = useKeyPairs();
  const readableKey = formatKeyReadable(publicKey);
  const {name, email} = useMultipleEncryptedStorage('name', 'email');

  const encodedName = name ? formatToBase64Undetectable(stringToU8(name)) : '';
  const encodedEmail = email ? md5(email) : '';
  const output = `${readableKey}.${encodedName}.${encodedEmail}`;
  const state = useState({
    showCopied: false,
  });

  useEffect(() => {
    return () => {
      if (copyTimeout) clearTimeout(copyTimeout);
    };
  }, []);

  if (!readableKey) return null;
  if (name === undefined || email === undefined) return null;

  function copyPk(e) {
    e.preventDefault();
    const undetectableStr = undetectableSplitString(output);
    copyToClipboard(undetectableStr);
    state.merge({showCopied: true});

    copyTimeout = setTimeout(() => {
      state.merge({showCopied: false});
    }, 1500);
  }

  return (
    <div className="p-3">
      <button className="text-center bg-gray-300 hover:bg-gray-200 rounded p-2 border border-solid border-gray-300" onClick={copyPk}>
        <div className="font-bold">
          My public key, name and email hashed
        </div>
        <div className="break-all">
          {
            state.showCopied.get() ? 'Copied' : output
          }
        </div>

        <div className="text-right text-sm">
          Click to copy
        </div>
      </button>
    </div>
  );
}