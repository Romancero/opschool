import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import Schools from './pages/Schools';
import Events from './pages/Events';
import Novelties from './pages/Novelties';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='schools/*' element={<Schools />} />
        <Route path='events/*' element={<Events />} />
        <Route path='novelties/*' element={<Novelties />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;