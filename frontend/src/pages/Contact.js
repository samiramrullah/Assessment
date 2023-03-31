import React from 'react'
import { useState } from 'react'
import WrapperComponent from '../components/WrapperComponent'
import axios from 'axios'
const Contact = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")

    const submitHandler=(e)=>{
        e.preventDefault();
        const data={
            name,
            email,
            message
        }
        axios.post('http://localhost:5000/user',data)
        .then((res)=>{
            alert("Message sent")
            setName('')
            setEmail('')
            setMessage('')
        })
        .catch((err)=>console.log(err))

        
    }
    return (
        <WrapperComponent>
            <section class="py-16 pt-36 bg-stone-100 font-poppins dark:bg-gray-800">
                <div
                    class="max-w-4xl px-4 py-4 mx-auto bg-white border shadow-sm dark:border-gray-900 dark:bg-gray-900 lg:py-4 md:px-6">
                    <div class="mb-10 ">
                        <h2 class="pb-2 mb-2 text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
                            Hello
                        </h2>
                        <p class="text-sm dark:text-gray-400">
                            Fill your details and message
                        </p>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div class="mb-6">
                            <label  class="block mb-2 text-sm font-medium dark:text-gray-400">Full Name</label>
                            <input type="text"
                                class="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
                                placeholder="Full name...." required onChange={(e)=>setName(e.target.value)}
                                value={name}/>
                        </div>
                        <div class="mb-6">
                            <label  class="block mb-2 text-sm font-medium dark:text-gray-400">Email</label>
                            <input type="email" placeholder="abc@gmail.com" required
                                class="block w-full px-4 py-3 mb-3 leading-tight placeholder-gray-400 bg-gray-100 border rounded ark:border-gray-800 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 " 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                />
                        </div>
                        <div class="mb-6">
                            <label  class="block mb-2 text-sm font-medium dark:text-gray-400">Message</label>
                            <textarea type="message" placeholder="Message.." required
                                class="block w-full px-4 py-6 leading-tight placeholder-gray-400 bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                                 value={message}
                                 onChange={(e)=>setMessage(e.target.value)}
                                />
                        </div>
                        <button type='submit' class="px-4 py-2 text-base text-gray-100 bg-blue-600 rounded hover:bg-blue-500">Send</button>
                    </form>
                </div>
            </section >
        </WrapperComponent >
    )
}

export default Contact