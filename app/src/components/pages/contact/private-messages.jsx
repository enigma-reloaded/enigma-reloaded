import {useEffect} from 'react';
import CreateNewPrivateMessage from './create-new-private-message';

export default function PrivateMessages({contact}) {
  useEffect(() => {
    if (contact.messages.length > 0) return;
    contact.get().loadPrivateMessages(contact);
  }, [contact]);

  console.log(contact.messages);

  return (
    <div>
      <div className="text-lg italic">
        Private messages
      </div>

      <div className="py-2 flex justify-end">
        <CreateNewPrivateMessage contact={contact}/>
      </div>

      <div>
        {contact.messages.length}
      </div>

      {
        contact.messages.map((message) => {
          debugger;
          return (
            <div key={message.id.get()}>
              ok
              {message.encryptedMessage.get()}
            </div>
          );
        })
      }
    </div>
  );
}