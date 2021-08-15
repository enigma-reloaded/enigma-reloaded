import {
  HashRouter,
} from 'react-router-dom';

export default function Router({children}) {
  return (
    <HashRouter>
      {children}
    </HashRouter>
  );
}