'use client'
import { useState } from 'react';

export default function Dashboard() {
  const [pets, setPets] = useState([
    // { owner: 'dabid', name: 'dabid the dog', species: 'Dog', breed: 'Labrador', dob: 'July 28, 2003' },
  ]);

  const [formData, setFormData] = useState({
    owner: '',
    name: '',
    species: '',
    breed: '',
    dob: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPets([...pets, formData]);
    setFormData({ owner: '', name: '', species: '', breed: '', dob: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Pet System Activity</h1>
      <div className="flex space-x-10">
        <div className="w-1/3">
          <h2 className="text-2xl font-bold mb-4">Add Pet</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1">Owner's Name</label>
              <input
                type="text"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                placeholder="Enter Owner's Name :"
                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700"
              />
            </div>
            <div>
              <label className="block mb-1">Pet's Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Pet's Name :"
                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700"
              />
            </div>
            <div>
              <label className="block mb-1">Species</label>
              <input
                type="text"
                name="species"
                value={formData.species}
                onChange={handleChange}
                placeholder="Enter Species :"
                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700"
              />
            </div>
            <div>
              <label className="block mb-1">Breed</label>
              <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                placeholder="Enter Breed :"
                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700"
              />
            </div>
            <div>
              <label className="block mb-1">Date of Birth</label>
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Enter Date of Birth :"
                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700"
              />
            </div>
            <button type="submit" className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded w-full">
              Add Pet
            </button>
          </form>
        </div>
        <div className="w-2/3">
        <h2 className="text-2xl font-bold mb-4">Pet Record</h2>
          <table className="min-w-full table-auto bg-gray-800 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-700">
                <th className="py-3 px-4 text-left">Owner's Name</th>
                <th className="py-3 px-4 text-left">Pet's Name</th>
                <th className="py-3 px-4 text-left">Species</th>
                <th className="py-3 px-4 text-left">Breed</th>
                <th className="py-3 px-4 text-left">Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-3 px-4">{pet.owner}</td>
                  <td className="py-3 px-4">{pet.name}</td>
                  <td className="py-3 px-4">{pet.species}</td>
                  <td className="py-3 px-4">{pet.breed}</td>
                  <td className="py-3 px-4">{pet.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
