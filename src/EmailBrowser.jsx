import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './EmailBrowser.css';

export function EmailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: 'pablotutormoegle@gmail.com',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_011lwgi', 'template_bqf6pdo', e.target, 'ThrPooQjaFsMpDROf')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='contact-form'>
        <div className='form-group'>
          <label className='input'>
            Nombre: 
            <input className='input__field' type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
        </div>
        <br />
        <div className='form-group'>
          <label className='input'>
            Email: 
            <input className='input__field' type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
        </div>
        <br />
        <div className='form-group'>
          <label className='input'>
            Mensaje: 
            <textarea className='input__field' name="message" value={formData.message} onChange={handleChange} />
          </label>
        </div>
      </div>
      <br />
      <button type="submit" className='form-button'>Enviar</button>
    </form>
  );
}