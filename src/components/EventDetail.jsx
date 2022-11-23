import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';

const EventDetail = () => {
  const [event, setEvent] = useState(null);

  const { eventId } = useParams();

  useEffect(() => {
    Axios.get(`https://secret-headland-86569.herokuapp.com/api/school-events/${eventId}`)
      .then(response => setEvent(response.data))
      .catch(error => {
        setEvent({error: '404'})
        console.clear()
      });
  }, [eventId]);

  return (
    <div className='Events-detail'>
      {
        !event && <strong>Loading...</strong>
      }
      {
        event?.error === '404' && <strong>Not Found</strong>
      }
      {
        event?.title && (
          <>
            <div className='Novelties-detail-header'>
              <h2>{event.title}</h2>
              <p>Fecha de inicio: {event.startDate} </p>
              <p>Fecha de cierre: {event.finishDate}</p>
            </div>

            <div className='Novelties-detail-body'>             
              <p>
                {
                  event.description
                }
              </p>

              <div className='Novelties-detail-body-schools'>
                <p>Escuelas:</p>
                <ul>
                  {
                    event.schools.map((school, index) => (
                      <li key={index}>{school}</li>
                    ))
                  }
                </ul>
              </div>

              <div>
                <p>Organizacion:</p>
                <ul>
                  {
                    event.organization.map((organization, index) => (
                      <li key={index}>{organization}</li>
                    ))
                  }
                </ul>
              </div>

              <div className='Novelties-detail-body-blocks'>
                <p>Bloques del evento:</p>
                <ul>
                  {
                    event.blocks.map((blocks, index) => (
                      <li key={index}>
                        <p>{blocks}</p>
                        <p>
                          {
                            event.blocksDescription[index]
                          }
                        </p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className='Novelties-detail-footer'>
              <Link to='/novelties'><i className="fa-solid fa-arrow-left"></i>Back to Novelties</Link>
            </div>
          </>
        )
      }
    </div>
  )
};

export default EventDetail;