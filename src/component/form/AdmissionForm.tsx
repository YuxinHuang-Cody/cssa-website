"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
interface FormProps {
  style: string;
}
const AdmissionForm:React.FC<FormProps> = ({style}) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [zip, setZip] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState<string>('');

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!firstName || !lastName || !email || !address || !number || !city || !state || !zip || !date || !message) {
            toast.error('Please fill out all fields.', { position: 'top-right' });
        }  else {
            // If the form is successfully submitted, show a success toast
            toast.success('Form submitted successfully!', { position: 'top-right' });
            setFirstName('');
            setLastName('');
            setEmail('');
            setAddress('');
            setNumber('');
            setCity('');
            setState('');
            setZip('');
            setDate('');
            setMessage('');
        }
        };
  return (
    <form 
    className={`tl-5-admission-form ${style}`}
    onSubmit={handleFormSubmit}
    >
      <h5 className="tl-5-admission-form-title">Admission</h5>
      <div className="row g-14">
        <div className="col-sm-6 col-12">
          <input
            type="text"
            name="applicant-first-name"
            id="tl-5-applicant-first-name"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="col-sm-6 col-12">
          <input
            type="text"
            name="applicant-last-name"
            id="tl-5-applicant-last-name"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="col-sm-6 col-12">
          <input
            type="email"
            name="applicant-mail"
            id="tl-5-applicant-mail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col-sm-6 col-12">
          <input
            type="number"
            name="applicant-numb"
            id="tl-5-applicant-numb"
            placeholder="Phone"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <div className="col-sm-6 col-12">
          <input
            type="text"
            name="applicanct-street-address"
            id="tl-5-applicant-street-address"
            placeholder="Street Addresss"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="col-sm-6 col-12">
          <input
            type="text"
            name="applicant-city"
            id="tl-5-applicant-city"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="col-sm-6 col-12">
          <input
            type="text"
            name="applicant-state"
            id="tl-5-applicant-state"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>

        <div className="col-sm-6 col-12">
          <input
            type="number"
            name="applicant-zip-code"
            id="tl-5-applicant-zip-code"
            placeholder="Zip Code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>

        <div className="col-12">
          <input
            type="date"
            name="applicant-birth-date"
            id="tl-5-applicant-birth-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="col-12">
          <textarea
            name="applicant-qualifics"
            id="tl-5-applicant-qualifics"
            placeholder="Academic Qualifications"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="col-12">
          <button type="submit" className="tl-def-btn tl-4-def-btn">
            Contact Us <i className="fa-regular fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdmissionForm;
