import {Link} from 'react-router-dom';
import ContactAvatar from '../../contacts/avatar';

export default function ContactListItem({contact}) {
  function destroyContact(e) {
    e.preventDefault();
    contact.get().destroy();
  }

  return (
    <div className="flex flex-wrap items-center justify-between p-2 bg-gray-300 my-2 rounded">
      <div>
        <Link to={`/contacts/${contact.id.get()}`}>
          <div className="flex items-center">
            <ContactAvatar contact={contact} height="h-20" width="w-20"/>
            <span className="pl-2">
              {contact.name.get()}
            </span>
          </div>
        </Link>
      </div>

      <div>
        <button onClick={destroyContact}>
          Remove
        </button>
      </div>
    </div>
  );
}