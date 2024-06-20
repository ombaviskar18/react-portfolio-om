import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import './ContactForm.css';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_vz2e1nd', 'template_65wa6pq', form.current, {
          publicKey: 'CffeAsOEjHBalSgk8',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Message has successfully sent!');
            setFormData({ user_name: '', user_email: '', message: '' });
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="form-group">
      <label>Name</label>
      <input  type="text" name="user_name" 
      className="form-control"
      />
      </div>
      <div className="form-group">
      <label>Email</label>
      <input type="email" name="user_email"
      className="form-control"
       />
       </div>
      <div className="form-group">
      <label>Message</label>
      <textarea name="message"
      className="form-control"
       />
       </div>
      <center><motion.button type="submit" value="Send" 
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}} className="btn btn-primary">Send</motion.button>
      </center>
    </form>
  );
};

export default ContactForm;
