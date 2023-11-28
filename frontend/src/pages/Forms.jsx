import React from 'react'
import Sidebar from './Sidebar'


const Forms = () => {
    return (
    <div className='bg-black h-full  flex-1'>
        <Sidebar/>

    <div class="mt-8 flex-1">

        <div class="mt-4 flex-1">
            <div class="p-6 bg-white   flex-1 h-full">
                <h2 class=" text-gray-700 px-[400px] py-[100px] text-5xl font-semibold capitalize">Add Vehcile</h2>
                
                <form>
                    <div class="flex-1 gap-7  px-[400px]">
                        <div className='gap-1  items-center px-2 p-2 justify-center'>
                            <label class="text-gray-700 font-bold text-lg" for="username">License Plate Number</label>
                            <input class="form-input w-full border mt-2 rounded-md focus:border-indigo-600" type="text"/>
                        </div>

                        <div className='gap-1  items-center px-2 p-2 justify-center'>
                            <label class="text-gray-700 font-bold text-lg" for="username">Company Manfacture:</label>
                            <input class="form-input w-full border mt-2 rounded-md focus:border-indigo-600" type="text"/>
                        </div>

                        <div className='gap-1  items-center px-2 p-2 justify-center'>
                            <label class="text-gray-700 font-bold text-lg" for="username">Model:</label>
                            <input class="form-input w-full border mt-2 rounded-md focus:border-indigo-600" type="text"/>
                        </div>

                        <div className='gap-1  items-center px-2 p-2 justify-center'>
                            <label class="text-gray-700 font-bold text-lg" for="username">Color:</label>
                            <input class="form-input w-full border mt-2 rounded-md focus:border-indigo-600" type="color" value="#ff0000"/>
                        </div>
                    </div>

                    <div class="flex justify-end mt-4">
                        <button class="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>

    )
}

export default Forms