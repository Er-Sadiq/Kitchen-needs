import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Table() {
  const [selectedUser, setSelectedUser] = useState('');
  const [tableData, setTableData] = useState(null);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [check, setCheck] = useState(false); // This tracks the checkbox state

  const handleCheck = () => {
    // Update the state based on the checkbox status
    setCheck(!check); 
  };

  // Fetch usernames once when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user/usernames', { timeout: 6000 });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Fetch table data based on selected username
  useEffect(() => {
    if (!selectedUser) {
      setTableData(null);
      setError(false);
      return;
    }

    const fetchData = async () => {
      try {
        setError(false);
        const response = await axios.get(`http://localhost:8080/api/${selectedUser}`);
        setTableData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
      }
    };

    fetchData();
  }, [selectedUser]);

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <div className="w-full bg-slate-200 p-3 rounded-lg shadow-xl mt-5 overflow-hidden z-40">
      <div className='w-full py-1 bg-MidNight rounded-lg text-Accent flex justify-center items-center overflow-hidden font-sans'>
        <h2 className='text-2xl font-light tracking-widest'>
          <span className='text-slate-50'>K</span>itc<span className='text-slate-50'>h</span>en N<span className='text-slate-50'>ee</span>ds  <span className='text-slate-50'>R</span>ecords <span className='text-slate-50'>R</span>epository
        </h2>
      </div>

      <div className="w-full my-2 rounded-md flex flex-row py-2 px-10 justify-center items-center gap-5 bg-slate-300 text-Accent">
        <label htmlFor="user-select" className="block font-semibold my-auto text-MidNight text-xl underline">Select Employee Here:</label>
        <select
          id="user-select"
          className="w-1/2 p-2 rounded-lg border-2 border-slate-100 bg-MidNight"
          value={selectedUser}
          onChange={handleUserChange}
        >
          <option value="">Select a user</option>
          {users.map((username) => (
            <option key={username} value={username}>
              {username}
            </option>
          ))}
        </select>
        <div className='flex flex-row gap-2 justify-center items-center font-semibold my-auto text-MidNight text-xl underline'>
          <label>Display IDs</label>
          <input type="checkbox" onChange={handleCheck} checked={check} />
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          Unable to fetch data from the server.
        </div>
      )}

      <table className="w-full table-auto text-left">
        <thead className="bg-slate-300 text-fontColor text-balance">
          <tr>
            {/* Define fixed table headers */}
            <th className="px-1 py-2 text-balance">SnID</th>
            <th className={`px-1 py-2 text-balance ${check ? 'block' : 'hidden'}`} id="ohead">Object-Id</th>
            <th className="px-1 py-2 text-balance">Fuel in ₹</th>
            <th className="px-1 py-2 text-balance">Venue Name</th>
            <th className="px-1 py-2 text-balance">Payment status</th>
            <th className="px-1 py-2 text-balance">Mode of Payment</th>
            <th className="px-1 py-2 text-balance">Amount Paid ₹</th>
            <th className="px-1 py-2 text-balance">Balance in ₹</th>
            <th className="px-1 py-2 text-balance">Commission Qty/L</th>
            <th className="px-1 py-2 text-balance">Total Milk Qty/L</th>
          </tr>
        </thead>
        <tbody>
          {tableData ? (
            tableData.map((item, index) => (
              <tr key={index} className="bg-MidNight text-Accent hover:bg-slate-500">
                <td className="border px-1 py-2 text-center">{index + 1}</td>
                <td className={`border px-1 py-2 text-center ${check ? 'block' : 'hidden'}`} id="obody">{item.id}</td>
                <td className="border px-1 py-2 text-center">{item.fuelPrice}</td>
                <td className="border px-1 py-2 text-center">{item.venueName}</td>
                <td className="border px-1 py-2 text-center">{item.paymentStatus}</td>
                <td className="border px-1 py-2 text-center">{item.paymentMode}</td>
                <td className="border px-1 py-2 text-center">{item.amountPaid}</td>
                <td className="border px-1 py-2 text-center">{item.balance}</td>
                <td className="border px-1 py-2 text-center">{item.commissionPerL}</td>
                <td className="border px-1 py-2 text-center">{item.milkDeliveredL}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center py-4">No data available. Select a user to view data.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
