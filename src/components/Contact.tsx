import React, { FormEvent, useState } from 'react';
import { Button } from 'react-bootstrap';
import { SectionTitle } from './styled/shared';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    msg: '',
  });

  const handleFormDataChange = evt => {
    setFormData(prev => ({
      ...prev,
      [evt.target.name]: evt.target.value,
    }));
  };

  const sendContact = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    fetch(process.env.NEXT_PUBLIC_URL + '/api/contact', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        alert(data.msg);
      });
  };

  return (
    <div>
      <SectionTitle> Contacto... </SectionTitle>
      <form onSubmit={sendContact}>
        <label htmlFor={'emailForm'}> Información de emisor </label> <br />
        <input
          name='email'
          id={'emailForm'}
          value={formData.email}
          onChange={handleFormDataChange}
          placeholder={'Nombre o Correo'}
        />
        <br />
        <label htmlFor={'emailForm'}> Mensaje </label> <br />
        <textarea name='msg' id={'msgForm'} value={formData.msg} onChange={handleFormDataChange} /> <br />
        <Button type={'submit'}>Enviar</Button>
      </form>
    </div>
  );
};

export default Contact;
