import {Editor, EditorState, convertToRaw} from 'draft-js';
import {decryptMessage} from '../../../lib/utils/encryption/decrypt-message';
import {feedBackSuccess} from '../../../lib/feedback/success';
import {feedbackError} from '../../../lib/feedback/error';
import {
  insertDecryptedMessageRecord,
} from '../../../lib/private-messages/private-message-record';
import {useState as reactUseState, useEffect, useRef} from 'react';
import {useState} from '@hookstate/core';
import Modal from '../../utils/modal';

export default function DecodeNewPrivateMessage({contact}) {
  const editorRef = useRef();
  const state = useState({
    modalIsOpened: false,
  });

  useEffect(() => {
    if (!state.modalIsOpened.get()) return;
    editorRef.current.focus();
  }, [state.modalIsOpened.get()]); // eslint-disable-line react-hooks/exhaustive-deps

  const [editorState, setEditorState] = reactUseState(
      () => EditorState.createEmpty(),
  );

  function openModal(e) {
    e.preventDefault();
    state.merge({modalIsOpened: true});
  }

  function closeModal() {
    state.merge({modalIsOpened: false});
  }

  async function decrypt(e) {
    e.preventDefault();
    let encryptedContentRaw = convertToRaw(editorState.getCurrentContent());
    encryptedContentRaw = encryptedContentRaw.blocks.map((block) => (!block.text.trim() && '\n') || block.text)
        .join('').replace(/\s/g, '');
    let messageRaw;
    try {
      messageRaw = await decryptMessage(contact.publicKey.get(), encryptedContentRaw);
    } catch {
      return feedbackError('Invalid encrypted message');
    }
    await insertDecryptedMessageRecord(messageRaw, encryptedContentRaw, contact);
    state.merge({modalIsOpened: false});
    setEditorState(EditorState.createEmpty());

    feedBackSuccess('Message decrypted!');
  }

  return (
    <>
      <button type="submit" className="pure-button pure-button-primary bg-black w-full" onClick={openModal}>
        Decrypt message
      </button>

      <Modal isOpened={state.modalIsOpened.get()} close={closeModal}>
        <form onSubmit={decrypt}>
          <div className="border-gray-300 border border-solid p-2">
            <Editor editorState={editorState} onChange={setEditorState} placeholder="Paste the encrypted message" ref={editorRef}/>
          </div>

          <div className="flex justify-end my-2">
            <button type="submit" className="pure-button pure-button-primary bg-black w-1/3" disabled={!editorState.getCurrentContent().hasText()}>
              Decrypt message
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}