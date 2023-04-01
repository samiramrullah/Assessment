import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EmailResponse from '../utils/modals/EmailResponse';
const TableData = () => {
    const [allData,setAllData]=useState();
    const [open, setOpen] = useState(false);
    useEffect(()=>{
       axios.get('http://localhost:5000/user')
       .then((res)=>setAllData(res.data?.doc))
       .catch(err=>console.log(err))
    },[])
    return (
        <div className="  w-full max-w-7xl overflow-x-auto">
            <table className=" min-w-full rounded-md border border-gray-200 overflow-hidden">
                <thead className="min-w-full bg-gray-100 text-left text-gray-700">
                    <tr>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Name</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Email</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Message</th>
                        <th className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide" scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="">
                    {allData?.map((user, index) => (
                        <tr key={user.name} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"} whitespace-nowrap`}>
                            <td className="py-3 px-4 text-base text-gray-700 font-semibold">{user.name}</td>
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">{user.email}</td>
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">{user.message}</td>
                            <td className="py-3 px-4 flex justify-around items-center space-x-6 text-base text-gray-700 font-medium">
                                <button onClick={()=>setOpen(true)} type="button" className="text-sm text-black font-semibold hover:text-blue-500">Reply</button>
                                {open&&<EmailResponse setOpen={setOpen} open={open} email={user.email}/>}
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