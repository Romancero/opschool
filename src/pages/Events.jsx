import '../style-pages/Events.css';

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import eventService from '../services/events';

import EventList from '../components/EventList';
import EventDetail from '../components/EventDetail';

import NotFound from './NotFound';

const Events = () => {
  const location = useLocation();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventService
      .getAll()
      .then(initialEvents => {
        setEvents(initialEvents);
      });
  }, [location]);

  return (
    <main className="Events">
      <p className="Events-titulo">Events</p>
      <Routes>
        <Route index element={<EventList events={events} />} />
        <Route path=":eventId" element={<EventDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Events;