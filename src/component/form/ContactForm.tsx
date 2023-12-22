'use client'
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [age,setAge] = useState('')
    const [number,setNumber] = useState('')
    const [msg,setMsg] = useState('')
    const handleFormSubmit = (e: any) => {
        e.preventDefault();
    
        if (!name && !email && !age && !number &&!msg) {
            toast.error('Please fill out all fields.', { position: 'top-right' });
        } else if (!email) {
            toast.warning('Please provide email.', { position: 'top-right' });
        } else if(!name){
            toast.warning('Please provide user name.', { position: 'top-right' });
        } else if (!age) {
            toast.warning('Please provide age.', { position: 'top-right' });
        } else if(!number){
            toast.warning('Please provide user number.', { position: 'top-right' });
        } else if(!msg){
            toast.warning('Please provide user message.', { position: 'top-right' });
        }
         else {
    
            // If the form is successfully submitted, show a success toast
            toast.success('Info submitted successfully!', { position: 'top-right' });
            setName('');
            setEmail('');
            setAge('');
            setNumber('');
            setMsg('');
        }
      };
  return (
    <form 
    className="tl-7-contact-form"
    onSubmit={handleFormSubmit}
    >
      <div className="row g-3 g-md-4">
        <div className="col-6 col-xxs-12">
          <input
            type="text"
            name="stud-name"
            id="tl-7-stud-name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-6 col-xxs-12">
          <input
            type="email"
            name="stud-mail"
            id="tl-7-stud-mail"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col-6 col-xxs-12">
          <input
            type="number"
            name="stud-age"
            id="tl-7-stud-age"
            placeholder="Your Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="col-6 col-xxs-12">
          <input
            type="tel"
            name="stud-number"
            id="tl-7-stud-namer"
            placeholder="Your Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <div className="col-12">
          <textarea
            name="stud-message"
            id="tl-7-stud-message"
            placeholder="Your Message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
        </div>

        <div className="col">
          <button type="submit" className="tl-7-def-btn">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
