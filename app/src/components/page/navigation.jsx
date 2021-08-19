import {Link, useHistory} from 'react-router-dom';
import {disableStorage} from '../../lib/utils/encryption/storage';
import logo from '../../assets/enigma-logo.jpg';

export default function PageNavigation() {
  const history = useHistory();

  function lock(e) {
    e.preventDefault();
    history.push(`/unlock`);
    setTimeout(disableStorage, 50);
  }

  return (
    <div className="my-2">
      <div className="flex justify-center">
        <img src={logo} alt="enigma"/>
      </div>
      <div className="flex flex-wrap justify-center pt-2">
        <NavigationItem text="Home" to="/"/>
        <NavigationItem text="Contacts" to="/contacts"/>
        <div className="pl-3">
          <button className="mx-1 text-center bg-black p-2 rounded text-white" onClick={lock}>
            Lock
          </button>
        </div>
      </div>
    </div>
  );
}

function NavigationItem({text, to}) {
  return (
    <Link to={to}>
      <button className="mx-1 text-center bg-black p-2 rounded text-white">
        {text}
      </button>
    </Link>
  );
}