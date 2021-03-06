import {generateKeys} from '../../lib/utils/encryption/generate-keys';
import {isEmpty} from 'lodash';
import {passwordStrength} from 'check-password-strength';
import {setItemInStorage, setStoragePin} from '../../lib/utils/encryption/storage';
import {useLocalForage} from '../../lib/hooks/use-local-forage';
import {useState} from '@hookstate/core';
import HomePageDescription from '../pages/home/home-page-description';
import Modal from '../utils/modal';

export default function SetupGeneratePrivateKey() {
  const [_, setIsPrivateKeyInitialized] = useLocalForage('pk-initialized'); // eslint-disable-line no-unused-vars

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
    state.merge((s) => {
      return {
        confirmMatch: value === s.confirmPinValue,
        passwordStrength: strength,
        pinValue: e.target.value,
      };
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
    setItemInStorage('email', state.emailValue.get().toLowerCase().replace(/\s/g, ''));
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

  return (
    <div>
      <HomePageDescription>
        <div className="flex justify-center">
          <button onClick={openSetupPinModal} className="bg-black text-white text-4xl rounded p-2">
            Get started
          </button>
        </div>
      </HomePageDescription>

      <Modal isOpened={state.setupPinModal.get()} close={closeSetupPinModal}>
        <form className="pure-form pure-form-aligned" onSubmit={generatePrivateKey}>
          <fieldset>
            <legend>PIN setup</legend>

            <div className="pure-control-group">
              <input name="name" value={state.nameValue.get()} onChange={changeNameValue} placeholder="Enter your name" className="w-full"/>
              <span className="pure-form-message">Optional</span>
            </div>

            <div className="pure-control-group">
              <input type="email" name="email" value={state.emailValue.get()} onChange={changeEmailValue} placeholder="Your email to have a avatar from gravatar.com" className="w-full"/>
              <span className="pure-form-message">Optional</span>
            </div>

            <div className="pure-control-group">
              <input value={state.pinValue.get()} onChange={changePinValue} placeholder="Enter new PIN" className="w-full"
                autoComplete="nope"
                required/>
              {
                state.pinValue.get().length > 0 &&
                 <span className="pure-form-message">{state.passwordStrength.get()}</span>
              }
              <span className="pure-form-message">You can't recover or change the PIN later. <span className="underline">Make sure you remember it and keep it secret</span></span>
            </div>

            <div className="pure-control-group">
              <input value={state.confirmPinValue.get()} onChange={changeConfirmPinValue}
                placeholder="Confirm your PIN"
                className="w-full"
                autoComplete="nope"
                required/>
              {
                !state.confirmMatch.get() &&
                  <span className="pure-form-message text-red-500">Pins don't match</span>
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