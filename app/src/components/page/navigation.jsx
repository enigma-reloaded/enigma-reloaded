import {Link} from 'react-router-dom';
import logo from '../../assets/enigma-logo.jpg';

export default function PageNavigation() {
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
    <div className="mx-1 text-center bg-black p-2 rounded text-white">
      <Link to={to}>{text}</Link>
    </div>
  );
}