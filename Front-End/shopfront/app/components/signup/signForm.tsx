'use client'
import React from "react";
import {useState} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

type Props = {}


const SignForm = (props: Props) => {
    const [user, setUser] = useState({
        name:"",
        email:"",
        passwprd:"",
        type : ""
    })

    const router = useRouter()

    const Register = () => {
        const data = {
            name: user.name,
            email: user.email,
            password: user.passwprd,
            type: user.type
        }

        //axios.post('/api/register', data)
        axios.post('http://localhost:5001/api/register', data)
            .then((response)=>{
                console.log(response)
            }).catch((error)=>{
                console.log(error)
            }).finally(()=>{
                router.push('./signin');
            })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col p-10 rounded-lg shadow-lg">
                <h1 className="text-xl font-medium mb-4">Sign Up</h1>
                <label htmlFor="" className="mb-2">Name</label>
                <input
                    type="text"
                    className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4
                    focus:outline-none focus:border-gray-600 text-black'
                    id="name"
                    placeholder="name"
                    value={user.name}
                    onChange={(e)=>setUser({...user, name: e.target.value})}
                />
                <label htmlFor="" className="mb-2">Email</label>
                <input
                    type="email"
                    className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4
                    focus:outline-none focus:border-gray-600 text-black'
                    id="email"
                    placeholder="email"
                    value={user.email}
                    onChange={(e)=>setUser({...user, email: e.target.value})}
                />
                <label htmlFor="" className="mb-2">Type</label>
                <input
                    type="text"
                    className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4
                    focus:outline-none focus:border-gray-600 text-black'
                    id="type"
                    placeholder="Type"
                    value={user.type}
                    onChange={(e)=>setUser({...user, type: e.target.value})}
                />
                <label htmlFor="" className="mb-2">Password</label>
                <input
                    type="password"
                    className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4
                    focus:outline-none focus:border-gray-600 text-black'
                    id="password"
                    placeholder="password"
                    value={user.passwprd}
                    onChange={(e)=>setUser({...user, passwprd: e.target.value})}
                />
                <button onClick={Register} className="p-2 border bg-purple-600 text-white border-gray-300 mt-2 mb-4
                    focus:outline-none focus:border-gray-600">
                    Registr Now
                </button>
                <Link href='./components/signin' className="text-sm text-center mt-5 text-neutral-600">
                    Sign In
                </Link>
                <Link href='/' className='text-center mt-2 '>
                    Home
                </Link>
            </div>
        </div>
    )
}

export default SignForm;