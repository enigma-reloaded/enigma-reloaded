import {Helmet} from 'react-helmet-async';
import {buildPageTitle} from '../page/page-title';
import ShowSharablePublicKey from './home/show-sharable-public-key';

export default function HomePage() {
  return (<>
    <Helmet>
      <title>{buildPageTitle('Home')}</title>
    </Helmet>
    <div className="flex justify-center">
      <ShowSharablePublicKey/>
    </div>
  </>);
}