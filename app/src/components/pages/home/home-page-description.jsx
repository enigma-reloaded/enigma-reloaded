import EnigmaAbout from './home-description/about';
import logo from '../../../assets/enigma-logo.jpg';

export default function HomePageDescription({children: button}) {
  return (
    <div>
      <div className="flex justify-center">
        <img src={logo} alt="enigma"/>
      </div>
      <div className="py-2">
        {button}
      </div>

      <EnigmaAbout/>
    </div>
  );
}