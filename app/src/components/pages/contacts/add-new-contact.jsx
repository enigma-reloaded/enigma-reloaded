import {importContactFromString} from '../../../lib/contacts/import-contact-from-string';
import {isEmpty} from 'lodash';
import {useState} from '@hookstate/core';
import Modal from '../../utils/modal';

export function AddNewContact() {
  const state = useState({
    inputPkNameEmail: '',
    modalOpened: false,
  });

  function closeModal() {
    state.merge({modalOpened: false});
  }

  function addNewContact(e) {
    e.preventDefault();
    importContactFromString(state.inputPkNameEmail.get());
    state.merge({
      inputPkNameEmail: '',
      modalOpened: false,
    });
  }

  function changeInputPkNameEmail(e) {
    const {value} = e.target;
    state.merge({inputPkNameEmail: value});
  }

  function openModal(e) {
    e.preventDefault();
    state.merge({modalOpened: true});
  }

  return (
    <div>
      <button className="bg-black text-white p-3" onClick={openModal}>
        + Add new contact
      </button>

      <Modal isOpened={state.modalOpened.get()} close={closeModal}>
        <form className="pure-form pure-form-aligned" onSubmit={addNewContact}>
          <fieldset>
            <legend>Contact public key, name and email hashed</legend>

            <div className="pure-control-group">
              <input name="inputPkNameEmail" value={state.inputPkNameEmail.get()} onChange={changeInputPkNameEmail} placeholder="Paste the contact code" className="w-full"/>
            </div>

            <button type="submit" className="pure-button pure-button-primary bg-black w-full" disabled={isEmpty(state.inputPkNameEmail.get())}>
              Add
            </button>
          </fieldset>
        </form>
      </Modal>
    </div>
  );
}