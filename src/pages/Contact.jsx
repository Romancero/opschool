import '../style-pages/Contact.css';

import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { register, formState: { errors }, watch, handleSubmit } = useForm({
    defaultValues: {
        from_name: '',
        from_email: '',
        message: '',
    }
  });

  const onSubmit = (data) => {
      console.log(data);
      emailjs.sendForm('service_kt0ihsd', 'template_ie5hv5f', '#formContact', 'TrnMa4wMK85OxVN7b')
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error)});
  }

  /*
  const edadValidator = (value) => {
    return value >= 18 && value <= 65;
  }

  const incluirTelefono = watch('incluirTelefono');
  */

  return (
    <main className="Contact">
      <div className='Contact-container'>
        <div className='Contact-description'>
          <div className='Contact-text'>
            <p className="Contact-title">Contact Us</p>
            <p className='Contact-parrafo'>Para más info, comunícate con nosotros através de los siguientes medios.</p>
          </div>

          <div className='Contact-links'>
            <div>
              <i className="fa-solid fa-phone"></i><p>+54 9 11 3077-4138</p>
            </div>
            <div>
              <i className="fa-solid fa-envelope"></i><p>opschoolyeah@gmail.com</p>
            </div>
            <div>
              <i className="fa-solid fa-location-dot"></i><p>E.E.S.T. N°14</p>
            </div>
          </div>

          <div className='Contact-social-medias'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>

        <form id='formContact' onSubmit={handleSubmit(onSubmit)} className='Contact-form'>
          <div className='Contact-form-inputs'>
            <p className='Contact-form-title'>Formulario de contacto</p>
            
            <div className='Contact-form-name'>
              <input placeholder='Our Perfect School' id='userName' type="text" {...register('from_name', {
                required: true,
                maxLength: 24
              })} />
              {errors.from_name?.type === 'required' && <p className='Contact-form-error'>El campo Nombre es requerido</p>}
              {errors.from_name?.type === 'maxLength' && <p className='Contact-form-error'>El campo Nombre debe tener menos de 10 caracteres</p>}
              {watch('from_name') && typeof errors.from_name === 'undefined' && <p className='Contact-form-okay'><i className="fa-solid fa-check"></i></p>}
              <label htmlFor='userName'>Nombre</label>
            </div>

            <div className='Contact-form-email'>
              <input placeholder='opschoolyeah@gmail.com' id='userEmail' type="text" {...register('from_email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
              })} />
              {errors.from_email?.type === 'required' && <p className='Contact-form-error'>El campo Email es requerido</p>}
              {errors.from_email?.type === 'pattern' && <p className='Contact-form-error'>El formato del Email es incorrecto</p>}
              {watch('from_email') && typeof errors.from_email === 'undefined' && <p className='Contact-form-okay'><i className="fa-solid fa-check"></i></p>}
              <label htmlFor='userEmail'>Email</label>
            </div>

            <div className='Contact-form-message'>
              <textarea placeholder='Mensaje...' id='userMessage' {...register('message', {
                required: true
              })} ></textarea>
              {errors.message?.type === 'required' && <p className='Contact-form-error'>El campo Mensaje es requerido</p>}
              {watch('message') && typeof errors.message === 'undefined' && <p className='Contact-form-okay'><i className="fa-solid fa-check"></i></p>}
              <label htmlFor='userMessage'>Mensaje</label>
            </div>
          </div>
          
          <input className='Contact-form-submit' type="submit" value="Enviar Mensaje" />
        </form>
      </div>
    </main>
  );
};

export default Contact;

/*
  <p className="Contact-titulo">Nombre: {watch('from_name')}</p>
  <div>
    <label>Edad</label>
    <input type="text" {...register('edad', {
      validate: edadValidator
    })} />
    {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
  </div>
  <div>
    <label>País</label>
    <select {...register('pais')}>
      <option value="ar">Argentina</option>
      <option value="es">España</option>
      <option value="fr">Francia</option>
      <option value="it">Italia</option>
    </select>
  </div>
  <div>
    <label>¿Incluir teléfono?</label>
    <input type="checkbox" {...register('incluirTelefono')} />
  </div>
  {incluirTelefono && (
    <div>
      <label>Teléfono</label>
      <input type="text" {...register('telefono')} />
    </div>
  )}
*/