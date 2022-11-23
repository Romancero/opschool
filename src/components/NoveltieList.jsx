import { useState } from 'react';
import { Link } from 'react-router-dom';

const NoveltieList = ({ novelties }) => {
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
    novelties.map(n => 
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
      <input type="text" placeholder="Novelties search" onChange={handleChange}></input>
      <div className='Novelties-cards'>
        {
          busqueda.length > 0 && !busqueda[0].error && busqueda.map(noveltie => (
            <div key={noveltie.id} className='Novelties-card'>
              <p className='Novelties-card-name'>{noveltie.title}</p>
              <p className='Novelties-card-description'>Fecha: {noveltie.startDate} - {noveltie.finishDate}</p>
              <p className='Novelties-card-description'>
                {
                  noveltie.blocks.map((block, index) => (
                    <span key={index}>{block}</span>
                  ))
                }
              </p>
              <Link to={`/novelties/${noveltie.id}`} className='Novelties-card-button'>Read More</Link>
            </div>
          ))
        }
        {
          busqueda.length > 0 && busqueda[0].error && busqueda.map(noveltie => (
            <div key={noveltie.id} className='Novelties-card-error-filter'>
              <p>{noveltie.error}</p>
            </div>
          ))
        }
        {
          busqueda.length === 0 && novelties.map(noveltie => (
            <div key={noveltie.id} className='Novelties-card'>
              <p className='Novelties-card-name'>{noveltie.title}</p>
              <p className='Novelties-card-description'>Fecha: {noveltie.startDate} - {noveltie.finishDate}</p>
              <p className='Novelties-card-description'>
                {
                  noveltie.blocks.map((block, index) => (
                    <span key={index}>{block}</span>
                  ))
                }
              </p>
              <Link to={`/novelties/${noveltie.id}`} className='Novelties-card-button'>Read More</Link>
            </div>
          ))
        }
      </div>
    </>
  )
};

export default NoveltieList;