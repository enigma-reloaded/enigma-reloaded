import {copyToClipboard} from '../../../lib/utils/actions/copy-to-clipboard';
import {encodeBase64} from 'tweetnacl-util';
import {formatKeyReadable} from '../../../lib/utils/format/keys';
import {md5} from '../../../lib/utils/format/md5';
import {stringToU8} from '../../../lib/utils/format/string-to-u8';
import {undetectableSplitString} from '../../../lib/utils/undetectable/split-string';
import {useEncryptedStorage} from '../../../lib/hooks/use-encrypted-storage';
import {usePublicKey} from '../../../lib/hooks/use-public-key';
import {useState} from '@hookstate/core';

export default function ShowSharablePublicKey() {
  const publicKey = usePublicKey();
  const readableKey = formatKeyReadable(publicKey);
  const [name] = useEncryptedStorage('name');
  const [email] = useEncryptedStorage('email');
  const encodedName = name ? encodeBase64(stringToU8(name)) : '';
  const encodedEmail = email ? md5(email) : '';
  const output = `${readableKey}.${encodedName}.${encodedEmail}`;
  const state = useState({
    showCopied: false,
  });

  if (!readableKey) return null;

  function copyPk(e) {
    e.preventDefault();
    const undetectableStr = undetectableSplitString(output);
    copyToClipboard(undetectableStr);
    state.merge({showCopied: true});

    setTimeout(() => {
      state.merge({showCopied: false});
    }, 1500);
  }

  return (
    <div className="p-3">
      <button className="text-center bg-gray-300 hover:bg-gray-200 rounded p-2 border border-solid border-gray-300" onClick={copyPk}>
        <div className="font-bold">
          My public key, name and email hashed
        </div>
        <div>
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