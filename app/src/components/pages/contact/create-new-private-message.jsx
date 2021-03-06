import {Editor, EditorState, convertToRaw} from 'draft-js';
import {createNewPrivateMessageRecord} from '../../../lib/private-messages/private-message-record';
import {encryptMessage} from '../../../lib/utils/encryption/encrypt-message';
import {useState as reactUseState, useEffect, useRef} from 'react';
import {useState} from '@hookstate/core';
import Modal from '../../utils/modal';

export default function CreateNewPrivateMessage({contact}) {
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

  async function save(e) {
    e.preventDefault();
    let rawContent = convertToRaw(editorState.getCurrentContent());
    rawContent = rawContent.blocks.map((block) => (!block.text.trim() && '\n') || block.text).join('\n');
    const encryptedMessage = await encryptMessage(contact.publicKey.get(), rawContent);
    const record = await createNewPrivateMessageRecord(rawContent, encryptedMessage, contact);

    state.merge({modalIsOpened: false});
    setEditorState(EditorState.createEmpty());

    record.copyToClipBoard();
  }

  return (
    <>
      <button className="pure-button pure-button-primary bg-black w-full" onClick={openModal}>
        Encrypt message
      </button>

      <Modal isOpened={state.modalIsOpened.get()} close={closeModal}>
        <form onSubmit={save}>
          <div className="border-gray-300 border border-solid p-2">
            <Editor editorState={editorState} onChange={setEditorState} placeholder="Type your message" ref={editorRef}/>
          </div>

          <div className="flex justify-end my-2">
            <button type="submit" className="pure-button pure-button-primary bg-black" disabled={!editorState.getCurrentContent().hasText()}>
              Encrypt message
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}