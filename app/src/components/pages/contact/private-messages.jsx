import {useEffect} from 'react';
import CreateNewPrivateMessage from './create-new-private-message';
import DecodeNewPrivateMessage from './decode-new-private-message';
import EncryptFile from './encrypt-file';
import Message from './message';

export default function PrivateMessages({contact}) {
  useEffect(() => {
    if (contact.messages.length > 0) return;
    contact.get().loadPrivateMessages(contact);
  }, [contact.id.get()]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="text-lg italic">
        Private messages
      </div>

      <div className="py-2 flex justify-between">
        <div className="w-1/2 pr-1">
          <DecodeNewPrivateMessage contact={contact}/>

          <div className="pt-1">
          </div>
        </div>
        <div className="w-1/2 pl-1">
          <CreateNewPrivateMessage contact={contact}/>
          <div className="pt-1">
            <EncryptFile contact={contact}/>
          </div>
        </div>
      </div>

      {
        contact.messages.map((message) => {
          return (
            <div key={message.id.get()}>
              <Message message={message}/>
            </div>
          );
        }).reverse()
      }
    </div>
  );
}