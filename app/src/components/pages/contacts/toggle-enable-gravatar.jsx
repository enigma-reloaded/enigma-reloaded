import {useLocalForage} from '../../../lib/hooks/use-local-forage';
import {useState} from '@hookstate/core';
import Modal from '../../utils/modal';

export default function ToggleEnableGravatar() {
  const [gravatarEnabled, setGravatar] = useLocalForage('gravatar-enabled');
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

  if (gravatarEnabled === 'NOT_READY') return null;

  function handleChange() {
    setGravatar(!gravatarEnabled);
  }

  return (
    <div>
      <div className="flex items-center">
        <input type="checkbox" checked={!!gravatarEnabled} onChange={handleChange}/>
        <span className="ml-1">
          Toggle gravatar
        </span>
      </div>

      <div className="mt-1">
        <button className="underline" onClick={openModal}>
          Is gravatar safe?
        </button>
      </div>

      <Modal isOpened={state.modalIsOpened.get()} close={closeModal}>
        <div>
          <h1 className="text-xl font-bold">Is gravatar safe?</h1>

          <div>
            The short answer if you need 100% security is <b>NO</b>.
          </div>
          <div>
            Otherwise <b>maybe</b>, because you get tracked by gravatar, but they store images for free. Depends on you if are going to accept that risk.
          </div>
        </div>
      </Modal>
    </div>
  );
}