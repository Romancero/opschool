import '../style-components/Navbar.css';

import { useEffect, useState } from 'react';
import { Link,/* useNavigate,*/ useLocation } from 'react-router-dom';

import pageService from '../services/pages';

import Img from './Img';

function Navbar() {
  //const navigate = useNavigate();
  const location = useLocation();
  const [pages, setPages] = useState([]);
  const [dropdownNavbar, setDropdownNavbar] = useState(['', '']);
  const [dropdownNavbarPageOpen, setDropdownNavbarPageOpen] = useState(['','']);

  useEffect(() => {
    pageService
      .getAll()
      .then(initialPages => {
        setPages(initialPages);

        let loc;
        if (location.pathname.includes('/schools')) {
          loc = '/schools';
        } else if (location.pathname.includes('/events')) {
          loc = '/events';
        } else if (location.pathname.includes('/novelties')) {
          loc = '/novelties';
        } else {
          loc = location.pathname;
        }

        setDropdownNavbarPageOpen([
          `Navbar-pages-${initialPages.find(page => page.path === loc).id}`,
          'Navbar-pages--open'
        ]);
      });
  }, [location]);

  const handleClick = () => {
    dropdownNavbar[0] === '' 
      ? setDropdownNavbar(['Navbar--open', 'Navbar-icon--open'])
      : setDropdownNavbar(['', '']);
  };

  const handleClickNavbarPage = (event) => {
    setDropdownNavbarPageOpen([event.target.classList[0], 'Navbar-pages--open']);
  };

  const handleClickNavbarLogo = (event) => {
    setDropdownNavbarPageOpen(['Navbar-pages-1', 'Navbar-pages--open']);
  };

  return (
    <nav className={`Navbar ${dropdownNavbar[0]}`}>
      <div className='Navbar-logo'>
        {
          pages.map(page => {
            if (page.page === 'Home'){
              return (
                <Link 
                  key={page.id}
                  to={page.path}
                  onClick={handleClickNavbarLogo} >
                    <Img classAditional='Navbar-logo-img' url='logo_opschool_ig' />
                    <p className='Navbar-logo-text'>OPSchool</p>
                </Link>
              );
            } else {
              return false;
            }
          })
        }
      </div>

      <div className='Navbar-pages'>
        {
          pages.map(page => {
            return (
              <Link 
                key={page.id}
                to={page.path}
                className={`Navbar-pages-${page.id}` === dropdownNavbarPageOpen[0] ? `Navbar-pages-${page.id} ${dropdownNavbarPageOpen[1]}` : `Navbar-pages-${page.id}`}
                onClick={handleClickNavbarPage} >
                  <i className={`Navbar-pages-${page.id} ${page.icon}`}></i>
                  <p className={`Navbar-pages-${page.id}`}>{page.page}</p>
              </Link>
            );
          })
        }
        {/* <a href="">
          <i class="fa-solid fa-house"></i>
          <p>Home</p>
        </a>
        <a href="">
          <i class="fa-solid fa-school"></i>
          <p>School</p>
        </a>
        <a href="">
          <i class="fa-regular fa-calendar-days"></i>
          <p>Events</p>
        </a>
        <a href="">
          <i class="fa-solid fa-calendar-day"></i>
          <p>Novelties</p>
        </a>
        <a href="">
          <i class="fa-solid fa-envelope"></i>
          <p>Contact</p>
        </a> */}
      </div>

      <div className={`Navbar-icon ${dropdownNavbar[1]}`} onClick={handleClick}></div>
    </nav>
  );
}

export default Navbar;