'use client'
import { useState } from 'react';

export default function AddPet() {
  const [form, setForm] = useState({
    owner: '',
    name: '',
    species: '',
    breed: '',
    dob: '',
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to a backend
    console.log(form);
    alert('Pet added successfully!');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-2xl font-bold">Add a New Pet</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="owner" className="form-label">
            Owner's Name
          </label>
          <input
            type="text"
            className="form-control"
            id="owner"
            name="owner"
            value={form.owner}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Pet Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="species" className="form-label">
            Species
          </label>
          <input
            type="text"
            className="form-control"
            id="species"
            name="species"
            value={form.species}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="breed" className="form-label">
            Breed
          </label>
          <input
            type="text"
            className="form-control"
            id="breed"
            name="breed"
            value={form.breed}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dob"
            name="dob"
            value={form.dob}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Pet
        </button>
      </form>
    </div>
  );
}
