import {Helmet} from 'react-helmet-async';
import {buildPageTitle} from '../page/page-title';
import {getItemFromStorage, setStoragePin} from '../../lib/utils/encryption/storage';
import {isEmpty} from 'lodash';
import {restoreBackupFromJsonFile} from '../../lib/backup/restore-from-json-file';
import {useHistory} from 'react-router-dom';
import {useKeyPairs} from '../../lib/hooks/use-key-pairs';
import {useQueryParams} from '../../lib/hooks/use-query-params';
import {useState as useReactState} from 'react';
import {useState} from '@hookstate/core';
import Modal from '../utils/modal';
import logo from '../../assets/enigma-logo.jpg';

export default function UnlockPage() {
  const state = useState({backupValue: '', modalOpened: false, pinValue: '', showError: false});
  const [fileState, setFileState] = useReactState();
  const history = useHistory();
  const queryParams = useQueryParams();
  const {setKeyPair} = useKeyPairs();

  async function unlock(e) {
    e.preventDefault();
    const redirectTo = queryParams.get('redirectTo') || '/';
    setStoragePin(state.pinValue.get());

    try {
      if (!isEmpty(state.backupValue)) {
        await restoreBackupFromJsonFile(fileState);
      }
      const keyPair = await getItemFromStorage('key-pair');
      if (isEmpty(keyPair)) {
        return state.merge({
          backupFile: null,
          backupValue: '',
          modalOpened: false,
          pinValue: '',
          showError: true,
        });
      }
      setKeyPair(keyPair);

      history.push(redirectTo);
    } catch (e) {
      return state.merge({
        backupFile: null,
        backupValue: '',
        modalOpened: false,
        pinValue: '',
        showError: true,
      });
    }
  }

  function updatePinValue(e) {
    const {value} = e.target;
    state.merge({pinValue: value});
  }

  function updateBackupValue(e) {
    const {value} = e.target;
    state.merge({backupValue: value});
    setFileState(e.target.files[0]);
  }

  function openModal(e) {
    e.preventDefault();
    state.merge({modalOpened: true});
  }

  function closeModal() {
    state.merge({modalOpened: false});
  }

  return (
    <>
      <Helmet>
        <title>{buildPageTitle('Unlock')}</title>
      </Helmet>
      <div className="w-full md:w-1/3 mx-auto">
        <div className="flex justify-center">
          <img src={logo} alt="enigma"/>
        </div>

        <form className="pure-form" onSubmit={unlock}>
          <fieldset>

            <div className="pure-control-group py-2">
              <input type="password" value={state.pinValue.get()} onChange={updatePinValue} className="w-full" placeholder="Enter your PIN to continue"/>
              {
                state.showError.get() && <span className="pure-form-message text-red-500">Invalid PIN</span>
              }
            </div>

            <button type="submit" className="pure-button pure-button-primary w-full bg-black font-bold" disabled={isEmpty(state.pinValue.get())}>
              Unlock
            </button>

            <div className="pure-control-group pt-4">
              <div className="flex justify-end">
                <button onClick={openModal} className="underline">
                  Restore from backup
                </button>
              </div>
              <Modal isOpened={state.modalOpened.get()} close={closeModal}>
                <h1 className="font-lg font-bold">Restore from backup</h1>

                <p>Select a backup file:</p>
                <input type="file" accept=".json" value={state.backupValue.get()} onChange={updateBackupValue}/>

                <div className="pt-2">
                  <span className="font-bold">Warning</span>, restoring data from a backup, <em>will override the current data</em>
                  <div>
                    Make sure, that you have a <b>backup of the current data</b>.
                  </div>
                  <div>
                    If you have a backup, then it's safe.
                  </div>
                </div>
              </Modal>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}