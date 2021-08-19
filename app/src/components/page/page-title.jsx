import {Helmet, HelmetProvider} from 'react-helmet-async';
const pageTitle = document.title;

export function buildPageTitle(input) {
  if (!input) return pageTitle;

  return `${input} ${pageTitle}`;
}

export default function PageTitle({children}) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {children}
    </HelmetProvider>
  );
}