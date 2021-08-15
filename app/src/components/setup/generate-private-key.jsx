import {generateKeys} from '../../lib/utils/encryption/generate-keys';
import {isEmpty} from 'lodash';
import {passwordStrength} from 'check-password-strength';
import {setItemInStorage, setStoragePin} from '../../lib/utils/encryption/storage';
import {useLocalForage} from '../../lib/hooks/use-local-forage';
import {useState} from '@hookstate/core';
import Modal from '../utils/modal';

export default function SetupGeneratePrivateKey({children}) {
  const [isPrivateKeyInitialized, setIsPrivateKeyInitialized] = useLocalForage('pk-initialized');

  const state = useState({
    confirmMatch: true,
    confirmPinValue: '',
    emailValue: '',
    nameValue: '',
    passwordStrength: 'Too weak',
    pinValue: '',
    setupPinModal: false,
  });
  function openSetupPinModal(e) {
    e.preventDefault();
    state.merge({setupPinModal: true});
  }

  function closeSetupPinModal(e) {
    e.preventDefault();
    state.merge({setupPinModal: false});
  }

  function changePinValue(e) {
    const value = e.target.value;
    const strength = passwordStrength(value).value;
    state.merge({
      passwordStrength: strength,
      pinValue: e.target.value,
    });
  }

  function changeConfirmPinValue(e) {
    const value = e.target.value;

    state.merge((s) => {
      return {
        confirmMatch: value === s.pinValue,
        confirmPinValue: value,
      };
    });
  }

  function generatePrivateKey(e) {
    e.preventDefault();
    const keyPair = generateKeys();
    setStoragePin(state.pinValue.get());
    setItemInStorage('key-pair', {
      publicKey: Array.from(keyPair.publicKey),
      secretKey: Array.from(keyPair.secretKey),
    });
    setItemInStorage('name', state.nameValue.get());
    setItemInStorage('email', state.emailValue.get());
    setIsPrivateKeyInitialized(true);
  }

  const submitDisabled = isEmpty(state.pinValue.get()) || state.passwordStrength.get() === 'Too weak' ||
    isEmpty(state.confirmPinValue.get()) || !state.confirmMatch.get();

  function changeNameValue(e) {
    state.merge({nameValue: e.target.value});
  }

  function changeEmailValue(e) {
    state.merge({emailValue: e.target.value});
  }

  if (isPrivateKeyInitialized) return children;

  return (
    <div>
      <button onClick={openSetupPinModal}>
        Get started
      </button>

      <Modal isOpened={state.setupPinModal.get()} close={closeSetupPinModal}>
        <form className="pure-form pure-form-aligned" onSubmit={generatePrivateKey}>
          <fieldset>
            <legend>PIN setup</legend>

            <div className="pure-control-group">
              <input name="name" value={state.nameValue.get()} onChange={changeNameValue} placeholder="Enter your name" className="w-full"/>
            </div>

            <div className="pure-control-group">
              <input type="email" name="email" value={state.emailValue.get()} onChange={changeEmailValue} placeholder="Enter email(to have a avatar)" className="w-full"/>
            </div>

            <div className="pure-control-group">
              <input name="pin" value={state.pinValue.get()} onChange={changePinValue} placeholder="Enter new PIN" className="w-full" required/>
              <span className="pure-form-message">{state.passwordStrength.get()}</span>
            </div>

            <div className="pure-control-group">
              <input name="pinConfirm" value={state.confirmPinValue.get()} onChange={changeConfirmPinValue} placeholder="Confirm your pin" className="w-full" required/>
              {
                !state.confirmMatch.get() &&
                  <span className="pure-form-message">Pins don't match</span>
              }
            </div>

            <button type="submit" className="pure-button pure-button-primary w-full" disabled={submitDisabled}>
              Submit
            </button>
          </fieldset>
        </form>
      </Modal>
    </div>
  );
}