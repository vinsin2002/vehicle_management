import React from 'react';
import { useState } from 'react';
function Addtransaction() {

    const [checkinTime, setCheckinTime] = useState('');
  const [checkoutTime, setCheckoutTime] = useState('');
  const [slotNumber, setSlotNumber] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form values to the console
    console.log('Check-in Time:', checkinTime);
    console.log('Check-out Time:', checkoutTime);
    console.log('Slot Number:', slotNumber);
    console.log('Vehicle Number:', vehicleNumber);
  };

  return (
    <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
    {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VPMS</span>
</a>
<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
    <span class="sr-only">Open main menu</span>
    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
    </svg>
</button>
<div class="hidden w-full md:block md:w-auto" id="navbar-default">
  <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <li>
      <a href="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
    </li>
    <li>
      <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Login</a>
    </li>
    <li>
      <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Logout</a>
    </li>
  </ul>
</div>
</div>
</nav>


<div className=" mt-16 max-w-screen-xl mx-auto p-4">
        {/* Add your form here */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4">Add Transaction</h2>

          <div className="mb-4">
            <label htmlFor="checkinTime" className="block text-gray-700 font-medium mb-2">Check-in Time</label>
            <input
              type="text"
              id="checkinTime"
              value={checkinTime}
              onChange={(e) => setCheckinTime(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="checkoutTime" className="block text-gray-700 font-medium mb-2">Check-out Time</label>
            <input
              type="text"
              id="checkoutTime"
              value={checkoutTime}
              onChange={(e) => setCheckoutTime(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="slotNumber" className="block text-gray-700 font-medium mb-2">Slot Number</label>
            <select
              id="slotNumber"
              value={slotNumber}
              onChange={(e) => setSlotNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="slot1">Slot 1</option>
              <option value="slot2">Slot 2</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="vehicleNumber" className="block text-gray-700 font-medium mb-2">Vehicle Number</label>
            <select
              id="vehicleNumber"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="vehicle1">Vehicle 1</option>
              <option value="vehicle2">Vehicle 2</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Submit
          </button>
        </form>
      </div>


</div>
  )
}

export default Addtransaction