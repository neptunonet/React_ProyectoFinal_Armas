import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor
    console.log('Formulario enviado:', formData);
    // Resetear el formulario después del envío
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guests: '',
      message: ''
    });
    alert('¡Gracias por tu reserva! Te contactaremos pronto para confirmar.');
  };

  return (
    <main className="contact-page">
      <h1>Programa tu Visita</h1>
      <p>Completa el formulario a continuación para reservar tu visita a nuestros viñedos.</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Fecha de visita preferida:</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="guests">Número de invitados:</label>
          <input 
            type="number" 
            id="guests" 
            name="guests" 
            value={formData.guests} 
            onChange={handleChange} 
            required 
            min="1" 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Mensaje adicional:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            rows="4"
          ></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Reservar Visita</button>
      </form>
    </main>
  );
};

export default Contact;

// const Contact = () => {

//   return (
//     <main className="container">
//       <h2>Contact Page</h2>
//     </main>
//   );
// };

// export default Contact;