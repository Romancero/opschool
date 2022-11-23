import '../style-pages/Novelties.css';

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import noveltieService from '../services/novelties';

import NoveltieList from '../components/NoveltieList';
import NoveltieDetail from '../components/NoveltieDetail';

import NotFound from './NotFound';

const Novelties = () => {
  const location = useLocation();
  const [novelties, setNovelties] = useState([]);

  useEffect(() => {
    noveltieService
      .getAll()
      .then(initialNovelties => {
        setNovelties(initialNovelties);
      });
  }, [location]);

  return (
    <main className='Novelties'>
      <p className='Novelties-titulo'>Novelties</p>
      <Routes>
        <Route index element={<NoveltieList novelties={novelties} />} />
        <Route path=":noveltieId" element={<NoveltieDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Novelties;