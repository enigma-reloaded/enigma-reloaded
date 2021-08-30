import {useEffect, useRef} from 'react';
import CreateNewPrivateMessage from './create-new-private-message';
import DecodeNewPrivateMessage from './decode-new-private-message';
import DecryptFile from './decrypt-file';
import EncryptFile from './encrypt-file';
import Message from './message';
import ViewportList from 'react-viewport-list';

export default function PrivateMessages({contact}) {
  const ref = useRef(null);

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
            <DecryptFile contact={contact}/>
          </div>
        </div>
        <div className="w-1/2 pl-1">
          <CreateNewPrivateMessage contact={contact}/>
          <div className="pt-1">
            <EncryptFile contact={contact}/>
          </div>
        </div>
      </div>

      <div className="scroll-container" ref={ref}>
        <ViewportList
          viewportRef={ref}
          items={contact.messages}
          itemMinSize={20}
        >
          {(message) => (
            <div key={message.id.get()} className="item">
              <Message message={message} contact={contact}/>
            </div>
          )}
        </ViewportList>
      </div>
    </div>
  );
}