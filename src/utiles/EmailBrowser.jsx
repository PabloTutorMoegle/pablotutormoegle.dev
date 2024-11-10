import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './EmailBrowser.css';
import { TextField } from '@mui/material';

export function EmailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      alert('Message sent successfully');
    }, (error) => {
      console.log(error.text);
      alert('Error at sending message');
    });

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='contact-form'>
        <TextField label="Message" name="message" value={formData.message} onChange={handleChange} fullWidth rows={4}/>
      </div>
      <br />
      <button type="submit" className='form-button'>Send</button>
    </form>
  );
}
