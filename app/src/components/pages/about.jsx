import {Helmet} from 'react-helmet-async';
import {buildPageTitle} from '../page/page-title';
import EnigmaAbout from './home/home-description/about';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{buildPageTitle('About')}</title>
      </Helmet>
      <EnigmaAbout/>
    </>
  );
}