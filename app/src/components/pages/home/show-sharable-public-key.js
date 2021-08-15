import {usePublicKey} from "../../../lib/hooks/use-public-key";
import {formatKeyReadable} from "../../../lib/utils/format/keys";
import {copyToClipboard} from "../../../lib/utils/actions/copy-to-clipboard";
import {useEncryptedStorage} from "../../../lib/hooks/use-encrypted-storage";
import u8ToBase64 from "../../../lib/utils/u8-to-base64";
import {md5} from "../../../lib/utils/format/md5";

export default function ShowSharablePublicKey(){
  const publicKey = usePublicKey();
  const readableKey = formatKeyReadable(publicKey);
  const [name] = useEncryptedStorage('name');
  const [email] = useEncryptedStorage('email');
  const encodedName = name ? u8ToBase64(name) : ""
  const encodedEmail = email ? md5(email) : "";
  const output = `${readableKey}\\${encodedName}\\${encodedEmail}`;
  
  if(!readableKey) return null;
  
  function copyPk(e){
    e.preventDefault();
    copyToClipboard(output);
  }
  
  return(
    <div className="p-3">
      <button className="text-center bg-gray-300 hover:bg-gray-200 rounded p-2 border border-solid border-gray-300" onClick={copyPk}>
        <div className="font-bold">
          My public key, name and email hashed
        </div>
        <div>
          {output}
        </div>
    
        <div className="text-right text-sm">
          Click to copy
        </div>
      </button>
    </div>
  )
}