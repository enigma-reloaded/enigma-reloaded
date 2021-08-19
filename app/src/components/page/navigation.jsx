import {Link} from 'react-router-dom';
import {useLocalForage} from '../../lib/hooks/use-local-forage';
import logo from '../../assets/enigma-logo.jpg';

export default function PageNavigation() {
  const [isPrivateKeyInitialized] = useLocalForage('pk-initialized');
  if (!isPrivateKeyInitialized) return null;

  return (
    <>
      <div className="flex justify-center">
        <img src={logo} alt="enigma"/>
      </div>
      <div className="flex flex-wrap justify-center">
        <NavigationItem text="Home" to="/"/>
        <NavigationItem text="Contacts" to="/contacts"/>
      </div>
    </>
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