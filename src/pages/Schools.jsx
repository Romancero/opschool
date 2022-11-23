import '../style-pages/Schools.css';

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import schoolService from '../services/schools';

import SchoolList from '../components/SchoolList';
import SchoolDetail from '../components/SchoolDetail';

import NotFound from './NotFound';

const Schools = () => {
  const location = useLocation();
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    schoolService
      .getAll()
      .then(initialSchools => {
        setSchools(initialSchools);
      });
  }, [location]);

  return (
    <main className="Schools">
      <p className="Schools-titulo">Schools</p>
      <Routes>
        <Route index element={<SchoolList schools={schools} />} />
        <Route path=":schoolId" element={<SchoolDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Schools;