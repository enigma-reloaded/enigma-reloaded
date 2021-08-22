import {useEffect} from 'react';
import CreateNewPrivateMessage from './create-new-private-message';
import DecodeNewPrivateMessage from './decode-new-private-message';
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
        <DecodeNewPrivateMessage contact={contact}/>
        <CreateNewPrivateMessage contact={contact}/>
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