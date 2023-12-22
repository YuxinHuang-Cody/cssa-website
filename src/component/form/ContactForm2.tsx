'use client'
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm2 = () => {
    const [name,setName] = useState('')
    const [address,setAddress] = useState('')
    const [number,setNumber] = useState('')
    const [subject,setSubject] = useState('')
    const [ques,setQues] = useState('')
    const handleFormSubmit = (e: any) => {
        e.preventDefault();
    
        if (!name && !address && !subject && !number &&!ques) {
            toast.error('Please fill out all fields.', { position: 'top-right' });
        } else if (!address) {
            toast.warning('Please provide address.', { position: 'top-right' });
        } else if(!name){
            toast.warning('Please provide user name.', { position: 'top-right' });
        } else if (!subject) {
            toast.warning('Please provide subject.', { position: 'top-right' });
        } else if(!number){
            toast.warning('Please provide user number.', { position: 'top-right' });
        } else if(!ques){
            toast.warning('Please provide question.', { position: 'top-right' });
        }
         else {
    
            // If the form is successfully submitted, show a success toast
            toast.success('Info submitted successfully!', { position: 'top-right' });
            setName('');
            setAddress('');
            setSubject('');
            setNumber('');
            setQues('');
        }
      };
  return (
    <form 
    onSubmit={handleFormSubmit}
    className="tl-5-consult-form tl-3-consult-form"
    >
      <div className="row g-4 g-md-5">
        <div className="col-12">
          <span className="input-field-container input-field-container-name">
            <input
              type="text"
              name="client-name"
              id="consult-client-name"
              placeholder="Input Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </span>
        </div>

        <div className="col-12">
          <span className="input-field-container input-field-container-address">
            <input
              type="text"
              name="client-address"
              id="consult-client-address"
              placeholder="Input Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </span>
        </div>

        <div className="col-12">
          <span className="input-field-container input-field-container-number">
            <input
              type="tel"
              name="client-number"
              id="consult-client-number"
              placeholder="Input Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </span>
        </div>

        <div className="col-12">
          <span className="input-field-container input-field-container-subject">
            <input
              type="text"
              name="client-subject"
              id="consult-client-subject"
              placeholder="Input subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </span>
        </div>

        <div className="col-12">
          <span className="input-field-container input-field-container-ques">
            <textarea
              name="client-ques"
              id="consult-client-ques"
              placeholder="Input Your Question"
              value={ques}
              onChange={(e) => setQues(e.target.value)}
            ></textarea>
          </span>
        </div>

        <div className="col-12">
          <button type="submit" className="tl-3-def-btn">
            Submit Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm2;
