import {downloadFile} from '../../../lib/utils/files/download-file';
import {encryptFile} from '../../../lib/utils/encryption/encrypt-file';
import {feedBackSuccess} from '../../../lib/feedback/success';
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

    const {outputFile, fileName} = await encryptFile(contact.publicKey.get(), e.target.files[0]);
    e.target.value = '';

    downloadFile(outputFile, fileName);

    state.merge({
      fileProcessing: false,
      modalIsOpened: false,
    });

    feedBackSuccess('File encrypted');
  }

  function selectFile(e) {
    e.preventDefault();
    inputRef.current.click();
  }

  return (
    <>
      <button type="submit" className="pure-button pure-button-primary bg-black w-full" onClick={openModal}>
        Encrypt file
      </button>

      <Modal isOpened={state.modalIsOpened.get()} close={closeModal}>
        <input type="file" className="hidden" ref={inputRef} onChange={decrypt}/>

        <div className="my-1">
          As soon as the file is decrypted, you can download it
        </div>

        <button className="pure-button pure-button-primary bg-black w-full" onClick={selectFile} disabled={state.fileProcessing.get()}>
          Select unencrypted file
        </button>
      </Modal>
    </>
  );
}