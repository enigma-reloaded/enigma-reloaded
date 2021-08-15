import {getItemFromStorage, setStoragePin} from '../../lib/utils/encryption/storage';
import {isEmpty} from 'lodash';
import {useHistory} from 'react-router-dom';
import {useQueryParams} from '../../lib/hooks/use-query-params';
import {useState} from '@hookstate/core';
import logo from '../../assets/enigma-logo.jpg';

export default function UnlockPage() {
  const state = useState({pinValue: '', showError: false});
  const history = useHistory();
  const queryParams = useQueryParams();

  async function unlock(e) {
    e.preventDefault();
    const redirectTo = queryParams.get('redirectTo');
    setStoragePin(state.pinValue.get());

    try {
      const privateKey = await getItemFromStorage('key-pair');
      if (isEmpty(privateKey)) {
        return state.merge({
          pinValue: '',
          showError: true,
        });
      }

      state.merge({
        pinValue: '',
        showError: false,
      });

      setTimeout(() => {
        history.push(redirectTo);
      }, 50);
    } catch (e) {
      return state.merge({
        pinValue: '',
        showError: true,
      });
    }
  }

  function updatePinValue(e) {
    const {value} = e.target;
    state.merge({pinValue: value});
  }

  return (
    <div className="w-full md:w-1/3 mx-auto">
      <div className="flex justify-center">
        <img src={logo} alt="enigma"/>
      </div>

      <form className="pure-form" onSubmit={unlock}>
        <fieldset>

          <div className="pure-control-group pb-4">
            <input type="password" value={state.pinValue.get()} onChange={updatePinValue} className="w-full" placeholder="Enter your PIN to continue"/>
            {
              state.showError.get() && <span className="pure-form-message text-red-500">Invalid PIN</span>
            }
          </div>

          <button type="submit" className="pure-button pure-button-primary w-full" disabled={isEmpty(state.pinValue.get())}>
            Unlock
          </button>
        </fieldset>
      </form>
    </div>
  );
}