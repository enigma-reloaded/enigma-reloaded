import {AddNewContact} from './contacts/add-new-contact';
import {useRequireUnlock} from '../../lib/hooks/use-require-unlock';

export default function ContactsPage({children}) {
  const isUnlocked = useRequireUnlock();

  return (
    <div>
      <div>
        {children}
      </div>

      {
        isUnlocked && <div className="w-full md:w-1/3 mx-auto pt-4">
          <h1 className="text-center text-2xl font-bold">Contacts</h1>

          <div className="flex justify-end">
            <AddNewContact/>
          </div>
        </div>
      }
    </div>
  );
}