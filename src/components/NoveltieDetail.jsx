import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';

const NoveltieDetail = () => {
  const [noveltie, setNoveltie] = useState(null);

  const { noveltieId } = useParams();

  useEffect(() => {
    Axios.get(`https://secret-headland-86569.herokuapp.com/api/school-events/${noveltieId}`)
      .then(response => setNoveltie(response.data))
      .catch(error => {
        setNoveltie({error: '404'})
        console.clear()
      });
  }, [noveltieId]);

  return (
    <div className='Novelties-detail'>
      {
        !noveltie && <strong>Loading...</strong>
      }
      {
        noveltie?.error === '404' && <strong>Not Found</strong>
      }
      {
        noveltie?.title && (
          <>
            <div className='Novelties-detail-header'>
              <h2>{noveltie.title}</h2>
              <p>Fecha de inicio: {noveltie.startDate} </p>
              <p>Fecha de cierre: {noveltie.finishDate}</p>
            </div>

            <div className='Novelties-detail-body'>             
              <p>
                {
                  noveltie.description
                }
              </p>

              <div className='Novelties-detail-body-schools'>
                <p>Escuelas:</p>
                <ul>
                  {
                    noveltie.schools.map((school, index) => (
                      <li key={index}>{school}</li>
                    ))
                  }
                </ul>
              </div>

              <div>
                <p>Organizacion:</p>
                <ul>
                  {
                    noveltie.organization.map((organization, index) => (
                      <li key={index}>{organization}</li>
                    ))
                  }
                </ul>
              </div>

              <div className='Novelties-detail-body-blocks'>
                <p>Bloques del evento:</p>
                <ul>
                  {
                    noveltie.blocks.map((blocks, index) => (
                      <li key={index}>
                        <p>{blocks}</p>
                        <p>
                          {
                            noveltie.blocksDescription[index]
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

export default NoveltieDetail;