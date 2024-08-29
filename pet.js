// 'use client'
// import { useState } from 'react';

// export default function Pets() {
//   // Sample data; in a real app, fetch from an API
//   const [pets, setPets] = useState([
//     { owner: 'dabid', name: 'dabid the dog', species: 'Dog', breed: 'labrador', dob: 'July 28, 2003' },
//     { owner: 'dabid', name: 'dabid the dog', species: 'Dog', breed: 'labrador', dob: 'July 28, 2003' },
//   ]);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-10">
//       <h1 className="text-4xl font-bold mb-6">Pet System Activity</h1>
//       <div className="flex justify-between items-center mb-4">
//         <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded">Add Pet</button>
//         <input
//           type="text"
//           placeholder="Enter Pet :"
//           className="bg-gray-800 text-white p-2 rounded border border-gray-700"
//         />
//       </div>
//       <table className="min-w-full table-auto bg-gray-800 rounded-lg overflow-hidden">
//         <thead>
//           <tr className="bg-gray-700">
//             <th className="py-3 px-4 text-left">Owner’s Name</th>
//             <th className="py-3 px-4 text-left">Pet’s Name</th>
//             <th className="py-3 px-4 text-left">Species</th>
//             <th className="py-3 px-4 text-left">Breed</th>
//             <th className="py-3 px-4 text-left">Date of Birth</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pets.map((pet, index) => (
//             <tr key={index} className="border-b border-gray-700">
//               <td className="py-3 px-4">{pet.owner}</td>
//               <td className="py-3 px-4">{pet.name}</td>
//               <td className="py-3 px-4">{pet.species}</td>
//               <td className="py-3 px-4">{pet.breed}</td>
//               <td className="py-3 px-4">{pet.dob}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
