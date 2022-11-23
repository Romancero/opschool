import { useState } from 'react';
import { Link } from 'react-router-dom';

import Img from '../components/Img';

const SchoolList = ({ schools }) => {
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
    schools.map(n => 
      res.push({
        id: n.id,
        nombre: ContienePalabra(n.nombre, e.target.value),
        localidad: n.localidad,
        acercaDe: n.acercaDe,
        turnos: n.turnos,
        especialidades: n.especialidades,
        img: n.img,
        redesSociales: n.redesSociales,
      })
    );
    let response = res.filter(res => res.nombre);
    response.length === 0 && response.push({ id: 'MT4040', error: 'No hay coincidencias', });
    setBusqueda(response);
  }

  return (
    <>
      <input type="text" placeholder="Schools search" onChange={handleChange}></input>
      <div className='Schools-cards'>
        {
          busqueda.length > 0 && !busqueda[0].error && busqueda.map(school => (
            <div key={school.id} className='Schools-card'>
              <Img classAditional='Schools-card-img' url={school.img} />
              <p className='Schools-card-name'>{school.nombre}</p>
              <p className='Schools-card-description'>Ubicada en la localidad de {school.localidad}.</p>
              <p className='Schools-card-description'>Cuenta con los turnos: {school.turnos.map((turno, index) => {
                if (index === school.turnos.length - 1) {
                  return ' y ' + turno; 
                } else if (index === school.turnos.length - 2) {
                  return turno; 
                } else {
                  return turno + ', ';
                }
              })}.</p>
              <Link to={`/schools/${school.id}`} className='Schools-card-button'>Read More</Link>
              <div className='Schools-card-socialmedia'>
                <a href={school.redesSociales.facebook} target="_blank" rel='noreferrer'><i className="fa-brands fa-facebook"></i></a>
                <a href={school.redesSociales.twitter} target="_blank" rel='noreferrer'><i className="fa-brands fa-twitter"></i></a>
                <a href={school.redesSociales.instagram} target="_blank" rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          ))
        }
        {
          busqueda.length > 0 && busqueda[0].error && busqueda.map(school => (
            <div key={school.id} className='Schools-card-error-filter'>
              <p>{school.error}</p>
            </div>
          ))
        }
        {
          busqueda.length === 0 && schools.map(school => (
            <div key={school.id} className='Schools-card'>
              <Img classAditional='Schools-card-img' url={school.img} />
              <p className='Schools-card-name'>{school.nombre}</p>
              <p className='Schools-card-description'>Ubicada en la localidad de {school.localidad}.</p>
              <p className='Schools-card-description'>Cuenta con los turnos: {school.turnos.map((turno, index) => {
                if (index === school.turnos.length - 1) {
                  return ' y ' + turno; 
                } else if (index === school.turnos.length - 2) {
                  return turno; 
                } else {
                  return turno + ', ';
                }
              })}.</p>
              <Link to={`/schools/${school.id}`} className='Schools-card-button'>Read More</Link>
              <div className='Schools-card-socialmedia'>
                <a href={school.redesSociales.facebook} target="_blank" rel='noreferrer'><i className="fa-brands fa-facebook"></i></a>
                <a href={school.redesSociales.twitter} target="_blank" rel='noreferrer'><i className="fa-brands fa-twitter"></i></a>
                <a href={school.redesSociales.instagram} target="_blank" rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
};

export default SchoolList;