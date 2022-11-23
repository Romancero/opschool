import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';

import Img from './Img';

const SchoolDetail = () => {
  const [school, setSchool] = useState(null);

  const { schoolId } = useParams();

  useEffect(() => {
    Axios.get(`https://secret-headland-86569.herokuapp.com/api/schools/${schoolId}`)
      .then(response => setSchool(response.data))
      .catch(error => {
        setSchool({error: '404'})
        console.clear()
      });
  }, [schoolId]);

  return (
    <div className='Schools-detail'>
      {
        !school && <strong>Loading...</strong>
      }
      {
        school?.error === '404' && <strong>Not Found</strong>
      }
      {
        school?.nombre && (
          <>
            <div className='Schools-detail-header'>
              <Img url={school.img} alt={school.nombre} classAditional='Schools-detail-header-img' />
              <div>
                <h2>{school.nombre}</h2>
                <div>
                  <a href={school.redesSociales.facebook} target="_blank" rel='noreferrer'><i className="fa-brands fa-facebook"></i></a>
                  <a href={school.redesSociales.twitter} target="_blank" rel='noreferrer'><i className="fa-brands fa-twitter"></i></a>
                  <a href={school.redesSociales.instagram} target="_blank" rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
                </div>
                <p>{school.localidad}</p>
              </div>
            </div>

            <div className='Schools-detail-body'>
              <p>
                {
                  school.acercaDe.map(n => n)
                }
              </p>
              
              <div>
                <p>Turnos:</p>
                <ul>
                  {
                    school.turnos.map((turno, index) => (
                      <li key={index}>
                        {
                          turno.replace(/_/g, ' ').toLowerCase()[0].toUpperCase() + turno.replace(/_/g, ' ').toLowerCase().slice(1)
                        }
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div>
                <p>Especialidades:</p>
                <ul>
                  {
                    school.especialidades.map((especialidad, index) => (
                      <li key={index}>
                        {
                          especialidad.replace(/_/g, ' ').toLowerCase()[0].toUpperCase() + especialidad.replace(/_/g, ' ').toLowerCase().slice(1)
                        }
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>

            <div className='Schools-detail-footer'>
              <Link to='/schools'><i className="fa-solid fa-arrow-left"></i>Back to Schools</Link>
            </div>
          </>
        )
      }
    </div>
  )
};

export default SchoolDetail;