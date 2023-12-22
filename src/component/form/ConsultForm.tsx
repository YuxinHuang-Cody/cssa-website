'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
interface ConsultProps {
    style: string,
    column: string,
    btnStyle: string,
}
const ConsultForm:React.FC<ConsultProps> = ({style,column,btnStyle}) => {
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [number, setNumber] = useState('');
    const [subject, setSubject] = useState<string>('');
    const [ques, setQues] = useState<string>('');

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!name || !address || !number || !subject || !ques) {
            toast.error('Please fill out all fields.', { position: 'top-right' });
        }  else {
            // If the form is successfully submitted, show a success toast
            toast.success('Form submitted successfully!', { position: 'top-right' });
            setName('');
            setAddress('');
            setNumber('');
            setSubject('');
            setQues('');
        }
        };

  return (
    <form 
    className={`tl-5-consult-form ${style}`}
    onSubmit={handleFormSubmit}
    >
        <div className="row g-4 g-md-5">
            <div className={column}>
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

            <div className={column}>
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

            <div className={column}>
                <span className="input-field-container input-field-container-number">
                    <input 
                    type="number" 
                    name="client-number" 
                    id="consult-client-number" 
                    placeholder="Input Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    />
                </span>
            </div>

            <div className={column}>
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
                <button type="submit" className={btnStyle}>Get a Consultation</button>
            </div>
        </div>
    </form>
  )
}

export default ConsultForm