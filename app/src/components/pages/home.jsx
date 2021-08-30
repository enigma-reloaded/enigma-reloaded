import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {buildPageTitle} from '../page/page-title';
import EditProfile from './home/edit-profile';
import ShowSharablePublicKey from './home/show-sharable-public-key';

export default function HomePage() {
  return (<>
    <Helmet>
      <title>{buildPageTitle('Home')}</title>
    </Helmet>

    <div className="mx-auto md:w-1/3 w-full my-2 flex justify-between">
      <Link to="/about">
        <span className="underline">About</span>
      </Link>

      <EditProfile/>

      <Link to="/backup">
        <span className="underline">Backup service</span>
      </Link>
    </div>

    <div className="flex justify-center">
      <ShowSharablePublicKey/>
    </div>
  </>);
}