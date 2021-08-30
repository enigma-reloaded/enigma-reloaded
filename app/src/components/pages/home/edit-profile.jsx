import {feedBackSuccess} from '../../../lib/feedback/success';
import {md5} from '../../../lib/utils/format/md5';
import {useEncryptedStorage} from '../../../lib/hooks/use-encrypted-storage';
import {useState} from '@hookstate/core';
import ContactAvatar from '../../contacts/avatar';
import Modal from '../../utils/modal';

export default function EditProfile() {
  const [name, setName] = useEncryptedStorage('name');
  const [email, setEmail] = useEncryptedStorage('email');

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

  function updateName(e) {
    setName(e.target.value);
  }

  function updateEmail(e) {
    setEmail(e.target.value);
  }

  function save(e) {
    e.preventDefault();
    closeModal();
    feedBackSuccess('Profile saved');
  }

  return (
    <>
      <button className="underline" onClick={openModal}>
        Edit profile
      </button>

      <Modal isOpened={state.modalIsOpened.get()} close={closeModal}>
        <form className="pure-form pure-form-aligned" onSubmit={save}>
          <fieldset>
            <legend>Edit profile</legend>

            <div className="flex justify-center">
              <ContactAvatar emailHash={md5(email)} height="h-20" width="w-20"/>
            </div>
          </fieldset>

          <div className="pure-control-group">
            <input name="name" value={name} onChange={updateName} placeholder="Name" className="w-full"/>
          </div>

          <div className="pure-control-group">
            <input name="email" value={email} onChange={updateEmail} placeholder="Email(optional)" className="w-full"/>
            <span className="pure-form-message">Only the email MD5 hash is shared, not your real email. A image can be set for this email on <a className="underline" href="https://gravatar.com/" target="_blank">gravatar.com</a></span>
          </div>

          <button type="submit" className="pure-button pure-button-primary w-full bg-black">
            Save
          </button>
        </form>
      </Modal>
    </>
  );
}