import {feedBackSuccess} from '../../../lib/feedback/success';
import {useState} from '@hookstate/core';
import Modal from '../../utils/modal';

export default function EditContact({contact}) {
  const state = useState({
    modalIsOpened: false,
  });
  function closeModal() {
    state.merge({modalIsOpened: false});
  }

  function openModal(e) {
    e.preventDefault();
    state.merge({modalIsOpened: true});
  }

  function save(e) {
    e.preventDefault();
    closeModal();
    contact.get().save();
    feedBackSuccess('Contact saved');
  }

  function changeNameValue(e) {
    contact.merge({name: e.target.value});
  }

  return (
    <>
      <button className="underline" onClick={openModal}>
        Edit
      </button>

      <Modal isOpened={state.modalIsOpened.get()} close={closeModal}>
        <form className="pure-form pure-form-aligned" onSubmit={save}>
          <fieldset>
            <legend>Edit {contact.name.get()}</legend>
          </fieldset>

          <div className="pure-control-group">
            <input name="name" value={contact.name.get()} onChange={changeNameValue} placeholder="Name" className="w-full" required/>
          </div>

          <button type="submit" className="pure-button pure-button-primary w-full bg-black">
            Save
          </button>
        </form>
      </Modal>
    </>
  );
}