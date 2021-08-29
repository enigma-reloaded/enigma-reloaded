import {decryptFile} from '../../../lib/utils/encryption/decrypt-file';
import {downloadFile} from '../../../lib/utils/files/download-file';
import {feedBackSuccess} from '../../../lib/feedback/success';
import {feedbackError} from '../../../lib/feedback/error';
import {useRef} from 'react';
import {useState} from '@hookstate/core';
import Modal from '../../utils/modal';

export default function DecryptFile({contact}) {
  const inputRef = useRef();
  const state = useState({
    fileProcessing: false,
    modalIsOpened: false,
  });

  function openModal(e) {
    e.preventDefault();
    state.merge({modalIsOpened: true});
  }

  function closeModal() {
    if (state.fileProcessing.get()) return;
    state.merge({modalIsOpened: false});
  }

  async function decrypt(e) {
    e.preventDefault();
    state.merge({
      fileProcessing: true,
    });

    try {
      const {decryptedFile, fileName} = await decryptFile(contact.publicKey.get(), e.target.files[0]);
      downloadFile(decryptedFile, fileName);
    } catch {
      e.target.value = '';
      state.merge({fileProcessing: false});
      return feedbackError('Unable to decrypt file');
    }

    e.target.value = '';

    state.merge({
      fileProcessing: false,
      modalIsOpened: false,
    });

    feedBackSuccess('File ready');
  }

  function selectFile(e) {
    e.preventDefault();
    inputRef.current.click();
  }

  return (
    <>
      <button type="submit" className="pure-button pure-button-primary bg-black w-full" onClick={openModal}>
        Decrypt file
      </button>

      <Modal isOpened={state.modalIsOpened.get()} close={closeModal}>
        <input type="file" className="hidden" ref={inputRef} onChange={decrypt}/>

        <div className="my-1">
          As soon as the file is decrypted, you can download it
        </div>

        <button className="pure-button pure-button-primary bg-black w-full" onClick={selectFile} disabled={state.fileProcessing.get()}>
          Select encrypted file
        </button>
      </Modal>
    </>
  );
}