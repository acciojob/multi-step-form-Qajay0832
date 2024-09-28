
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [formData, setFormData] = useState({ first_name: '', last_name: '', model: '', car_price: '', card_info: '', expiry_date: '' })
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };
  const handleChange = (e) => {
    e.preventDefault()
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  }
  const handleNext = () => {
    setStep(step + 1)
  }
  const handlePrev = () => {
    setStep(step - 1)
  }
  const [step, setStep] = useState(0);
  return (
    <div>
      {/* Do not remove the main div */}
      <form onSubmit={handleSubmit} className="form">
        {step === 0 && <div id="step1" className="steps">
          <h2>Customer Details</h2>
          <label htmlFor='first_name'>First Name</label>
          <input id="first_name" name="first_name" placeholder="First Name" onChange={handleChange} value={formData.first_name} required />
          <label htmlFor='last_name'>Last Name</label>
          <input id="last_name" name="last_name" placeholder="Last Name" onChange={handleChange} value={formData.last_name} required />
        </div>}
        {step === 1 && <div id="step2" className="steps">
          <h2>Car Details</h2>
          <label htmlFor='model'>Model</label>
          <input id="model" name="model" placeholder="Model" onChange={handleChange} value={formData.model} required />
          <label htmlFor='car_price'>Car Price</label>
          <input id="car_price" name="car_price" placeholder="Car Price" onChange={handleChange} value={formData.car_price} required />
        </div>}
        {step === 2 && <div id="step3" className="steps">
          <h2>Payment Details</h2>
          <label htmlFor='card_info'>Credit Card Number</label>
          <input type="number" id="card_info" name="card_info" placeholder="Card Info" onChange={handleChange} value={formData.card_info} required />
          <label htmlFor='expiry_date'>Expiration Date</label>
          <input id="expiry_date" name="expiry_date" placeholder="Expiry Date" onChange={handleChange} value={formData.expiry_date} required />
        </div>}
        <div className="buttons">
          {step > 0 && <button type="button" onClick={() => { handlePrev() }}>Previous</button>}
          {step < 2 && <button type="button" onClick={() => { handleNext() }}>Next</button>}
          {step === 2 && <button type="submit" >Submit</button>}
        </div>

      </form>
    </div>
  )
}

export default App
