import {Link} from 'react-router-dom';

export default function ContactListItem({contact}) {
  function destroyContact(e) {
    e.preventDefault();
    contact.get().destroy();
  }

  return (
    <div className="flex flex-wrap justify-between p-2 bg-gray-300 my-2 rounded">
      <div>
        <Link to={`/contacts/${contact.id.get()}`}>
          {contact.name.get()}
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