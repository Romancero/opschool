import '../style-components/Layout.css';

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import useDarkMode from '../custom-hooks/use-dark-mode';
import useLocalStorage from '../custom-hooks/use-local-storage';

const Layout = () => {
  const [darkmode, setDarkmode] = useDarkMode();
  const [clicks, setClicks] = useLocalStorage('clicks', 0);

  window.matchMedia('(prefers-color-scheme: dark)').onchange = () => {
    setDarkmode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  };

  /*useEffect(
    () => {
      setDarkmode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    },
    [useMedia(['(prefers-color-scheme: dark)'], [true], false)]
  );*/

  return (
    <div className={`Layout`}>
      <Navbar />
      <button className='Layout-button' onClick={() => {setDarkmode(!darkmode); setClicks(clicks + 1)}} >{`Activar ${darkmode ? 'Light' : 'Dark'}-Mode ${clicks}`}</button>
      <Outlet />
    </div>
  );
};

export default Layout;