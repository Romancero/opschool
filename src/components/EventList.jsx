import { useState } from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ events }) => {
  let [busqueda, setBusqueda] = useState([]);

  function ContienePalabra(descripcion, buscar){   
    let splitBuscar = buscar.trim().split(",");
    for(let i = 0; i < splitBuscar.length; i++){
      if(descripcion.toLowerCase().includes(splitBuscar[i].toLowerCase())) {
        return descripcion;
      }
    }
  }

  const handleChange = (e) => {
    let res = [];
    events.map(n => 
      res.push({
        id: n.id,
        title: ContienePalabra(n.title, e.target.value),
        startDate: n.startDate,
        finishDate: n.finishDate,
        description: n.description,
        schools: n.schools,
        organization: n.organization,
        blocks: n.blocks,
        blocksDescription: n.blocksDescription,
      })
    );
    let response = res.filter(res => res.title);
    response.length === 0 && response.push({ id: 'NOTFOUND404', error: 'No hay coincidencias', });
    setBusqueda(response);
  }

  return (
    <>
      <input type="text" placeholder="Events search" onChange={handleChange}></input>
      <div className='Events-cards'>
        {
          busqueda.length > 0 && !busqueda[0].error && busqueda.map(event => (
            <div key={event.id} className='Events-card'>
              <p className='Events-card-name'>{event.title}</p>
              <p className='Events-card-description'>Fecha: {event.startDate} - {event.finishDate}</p>
              <p className='Events-card-description'>
                {
                  event.blocks.map((block, index) => (
                    <span key={index}>{block}</span>
                  ))
                }
              </p>
              <Link to={`/events/${event.id}`} className='Events-card-button'>Read More</Link>
            </div>
          ))
        }
        {
          busqueda.length > 0 && busqueda[0].error && busqueda.map(event => (
            <div key={event.id} className='Events-card-error-filter'>
              <p>{event.error}</p>
            </div>
          ))
        }
        {
          busqueda.length === 0 && events.map(event => (
            <div key={event.id} className='Events-card'>
              <p className='Events-card-name'>{event.title}</p>
              <p className='Events-card-description'>Fecha: {event.startDate} - {event.finishDate}</p>
              <p className='Events-card-description'>
                {
                  event.blocks.map((block, index) => (
                    <span key={index}>{block}</span>
                  ))
                }
              </p>
              <Link to={`/events/${event.id}`} className='Events-card-button'>Read More</Link>
            </div>
          ))
        }
      </div>
    </>
  )
};

export default EventList;