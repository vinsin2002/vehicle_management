import React from 'react'
import Sidebar from './Sidebar'

const Member = () => {
    return (
        <div class="bg-white  ">
            <Sidebar/>
            <div class="max-w-2xl py-2 mx-auto flex-1 w-full">
                <h1 class="text-2xl font-bold mb-4">Member Table</h1>


                <table class="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">Member ID</th>
                            <th class="py-2 px-4 border-b">Member Name</th>
                            <th class="py-2 px-4 border-b">Model Car</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td class="py-2 px-4 border-b">1</td>
                            <td class="py-2 px-4 border-b">John Doe</td>
                            <td class="py-2 px-4 border-b">Toyota Camry</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b">2</td>
                            <td class="py-2 px-4 border-b">Jane Doe</td>
                            <td class="py-2 px-4 border-b">Honda Accord</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Member