import React, { useEffect, useState } from 'react'
import axios from 'axios'
const TableData = () => {
    const [allData,setAllData]=useState();
    useEffect(()=>{
       axios.get('http://localhost:5000/user')
       .then((res)=>setAllData(res.data?.doc))
       .catch(err=>console.log(err))
    },[])
  const data = [
    {
      name: "Peter Hernandez",
      job: "Training manager",
      email: "peterkhernandez@rhyta.com",
      created: "30/10/2021"
    },
    {
      name: "Candice Palmieri",
      job: "Landscape contractor",
      email: "candicejpalmieri@armyspy.com ",
      created: "16/06/2020"
    },
    
  ]
  console.log('====================================');
  console.log(allData);
  console.log('====================================');
    return (
        <div className="  w-full max-w-7xl overflow-x-auto">
            <table className=" min-w-full rounded-md border border-gray-200 overflow-hidden">

                {/* :TABLE HEAD */}
                <thead className="min-w-full bg-gray-100 text-left text-gray-700">
                    <tr>
                        {/* ::Name */}
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Name</th>
                        {/* ::Job Title */}
                        {/* <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Job Title</th> */}
                        {/* ::Email */}
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Email</th>
                        {/* ::Created Date */}
                        {/* <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Created</th> */}
                        {/* ::Actions */}
                        <th className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide" scope="col">Actions</th>
                    </tr>
                </thead>


                {/* :TABLE BODY */}
                <tbody className="">
                    {allData?.map((user, index) => (
                        <tr key={user.name} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"} whitespace-nowrap`}>
                            {/* ::User Name */}
                            <td className="py-3 px-4 text-base text-gray-700 font-semibold">{user.name}</td>
                            {/* ::User Job Title */}
                            {/* <td className="py-3 px-4 text-base text-gray-500 font-medium">{user.job}</td> */}
                            {/* ::User Email */}
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">{user.email}</td>
                            {/* ::User Created Date */}
                            {/* <td className="py-3 px-4 text-base text-gray-500 font-medium">{user.created}</td> */}
                            {/* ::Action Buttons */}
                            <td className="py-3 px-4 flex justify-around items-center space-x-6 text-base text-gray-700 font-medium">
                                {/* :::edit button */}
                                {/* <button type="button" className="text-sm text-gray-700 font-semibold hover:underline hover:text-black">Edit</button> */}
                                {/* :::delete button */}
                                <button type="button" className="text-sm text-black font-semibold hover:text-blue-500">Reply</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default TableData