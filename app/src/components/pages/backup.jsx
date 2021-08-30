import {downloadFile} from '../../lib/utils/files/download-file';
import {exportStorage} from '../../lib/utils/encryption/storage';
import {useEncryptedStorage} from '../../lib/hooks/use-encrypted-storage';
import {useState} from '@hookstate/core';
import FaqQuestion from './home/home-description/faq-question';

export default function BackupPage() {
  const [name] = useEncryptedStorage('name');
  const state = useState({
    buttonDisabled: false,
  });

  async function downloadBackup(e) {
    e.preventDefault();
    state.merge({buttonDisabled: true});

    const result = await exportStorage();
    const blob = new Blob([JSON.stringify(result)]);
    const fileName = `${name}-enigma-backup.json`;

    downloadFile(blob, fileName);
    state.merge({buttonDisabled: false});
  }

  return (
    <div className="mx-auto md:w-1/3 w-full">
      <div className="py-4">
        <button className="pure-button pure-button-primary bg-black w-full" onClick={downloadBackup} disabled={state.buttonDisabled.get()}>
          Download backup
        </button>
      </div>

      <div>
        <div className="font-bold">
          FAQ about backups
        </div>

        <FaqQuestion title="Can somebody restore my data with just the backup file?">
          No, he needs the PIN
        </FaqQuestion>

        <FaqQuestion title="What to do if someone got access to the program while it was PIN unlocked?">
          Probably your <a href="https://en.wikipedia.org/wiki/Public-key_cryptography" target="_blank" className="underline">Private Key</a> is compromised, you should start fresh and not from a backup.
        </FaqQuestion>
      </div>
    </div>
  );
}