"use client"
//frontend

import Image from 'next/image'
import { useState } from 'react'

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleFormSubmit(e) {
        e.preventDefault();
        try{
            fetch('/api/register', {
                method: 'Post',
                body: JSON.stringify({email, password}),
                headers: {'Content-Type' : 'application/json'}
            }).then((e)=>{
                console.log("EEEEEEE=" + JSON.stringify(e));
            })
        }
        catch(e){
            console.log("fetch error [" + e + "]");
        }
    }

    return (
        <section className="my-8">
            <h1 className=" text-red-500 text-center text-2xl font-semibold my-6 ">
                Register
            </h1>
            <form className="flex flex-col  max-w-xs gap-3 mx-auto text-center"
               onSubmit={handleFormSubmit} >
                <input type="email" placeholder="email" value={email} onChange={(e) =>{
                    setEmail(e.target.value)
                }}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                <button type="submit"> Register</button>
                <div>
                    or login with provider
                </div>
                <button className="border-black flex items-center gap-16">
                    <Image src={'/google.png'} alt={'google'} width={30}
                     height={40}/>
                    Login with google
                </button>
            </form>
        </section>
    )
}