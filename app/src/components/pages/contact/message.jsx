import {feedBackSuccess} from '../../../lib/feedback/success';
import {mergeStyles} from '../../../lib/utils/string/merge-styles';
import TimeAgo from 'timeago-react';

export default function Message({message, contact}) {
  const {messageRaw, createdAt, mine, encryptedMessage} = message;
  let ownerClassContainer; let ownerClass;

  if (mine.get()) {
    ownerClassContainer = 'justify-end pl-20';
    ownerClass = 'text-right';
  } else {
    ownerClassContainer = 'pr-20';
    ownerClass = 'bg-green-300';
  }

  function destroy(e) {
    e.preventDefault();

    message.get().destroy(contact);

    feedBackSuccess('Message removed');
  }

  return (
    <div className={mergeStyles('flex', ownerClassContainer)}>
      <div className={mergeStyles('whitespace-pre-wrap my-1 p-2 border border-solid border-gray-300 rounded break-all', ownerClass)}>
        {messageRaw.get()}

        <div className={mergeStyles('pt-1')}>
          <TimeAgo datetime={createdAt.get()}/>
        </div>

        <div className="text-xs border-solid border-gray-300 border-t p-1">
          #{encryptedMessage.get().substring(0, 8)}
          <button className="ml-1 text-red-500" onClick={destroy}>
            (x)
          </button>
        </div>
      </div>
    </div>
  );
}