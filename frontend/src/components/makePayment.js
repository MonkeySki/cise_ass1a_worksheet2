import React, { useState } from 'react';
import axios from "axios"

export default function Payment(){

  const [form, setForm] = useState({
    userId: '1234',
    businessId: '4321',
    amount: '',
  });
  
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
  
    const newPayment = { ...form };
  
    await axios.post('http://localhost:5000/payments', newPayment).then(res => res.data)
  
    setForm({
      userId: '1234',
      businessId: '4321',
      amount: '',
    });

  }
  // What will show on page
    return (
      <div>
      <div id="createForm">
      <h3>You are User ID: 1234</h3>  
      <h3>Make Payment to Business ID: 4321</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            value={form.amount}
            onChange={(e) => updateForm({ amount: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Make Payment"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
    <a href="http://localhost:5000/payments">
        <button>View Payments</button>
      </a>
      </div>
    )
}
