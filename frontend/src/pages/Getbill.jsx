import React from 'react'
import { useState, useEffect } from 'react';

function Getbill() {
    const [slotNumber, setSlotNumber] = useState('');
  const [timeElapsed, setTimeElapsed] = useState('');
  const [rate, setRate] = useState('');
  const [finalAmount, setFinalAmount] = useState('');
  const [vehiclePlateNumber, setVehiclePlateNumber] = useState('');
  useEffect(() => {
    // Simulating API call to fetch data
    const fetchData = async () => {
      try {
        // Replace this with the actual API endpoint
        const response = await fetch('https://dummy-api.com/bill-data');
        const data = await response.json();

        // Update state with fetched data
        setSlotNumber(data.slotNumber);
        setTimeElapsed(data.timeElapsed);
        setRate(data.rate);
        setFinalAmount(data.finalAmount);
        setVehiclePlateNumber(data.vehiclePlateNumber);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []);
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


<div className="mt-16 max-w-screen-xl mx-auto p-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4">Bill Details</h2>

          <div className="mb-4">
            <label htmlFor="slotNumber" className="block text-gray-700 font-medium mb-2">Slot Number:</label>
            <p>{slotNumber}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="timeElapsed" className="block text-gray-700 font-medium mb-2">Time Elapsed:</label>
            <p>{timeElapsed}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="rate" className="block text-gray-700 font-medium mb-2">Rate:</label>
            <p>{rate}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="finalAmount" className="block text-gray-700 font-medium mb-2">Final Amount:</label>
            <p>{finalAmount}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="vehiclePlateNumber" className="block text-gray-700 font-medium mb-2">Vehicle Plate Number:</label>
            <p>{vehiclePlateNumber}</p>
          </div>
        </div>
      </div>


</div>
  )
}

export default Getbill