import React, { useState } from "react";
import { LoginDetails } from "./Interfaces";

const LoginPage:React.FC=()=>{
    const [Login,SetLogin]=useState<LoginDetails>({Email:"",Password:""});

    const HandleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value }=e.target;
        SetLogin((prev)=>({...prev, [name]:value}));
    }

    const HandleClick=(e:React.FormEvent)=>{
        e.preventDefault();
        SetLogin({Email:"",Password:""});
    }

    return(
        <div className="h-screen bg-white flex  justify-center items-center">
            <div>
                <form onSubmit={HandleClick} className="bg-white w-100 h-auto px-10 py-10 shadow-lg flex flex-col rounded-2xl">
                    <label className="font-semibold text-md mb-1 ml-1.5">Email :</label>
                    <input type="email" name="Email" value={Login.Email} onChange={HandleChange} className="border-2 rounded-lg border-gray-400 focus:border-black mb-2"/>
                    <label className="font-semibold text-md mb-1 ml-1.5">Password :</label>
                    <input type="password" name="Password" value={Login.Password} onChange={HandleChange} className="border-2 rounded-lg border-gray-400 focus:border-black mb-5"/>
                    <button type="submit" className="text-black bg-transparent border-2 rounded-2xl hover:bg-black hover:text-white cursor-pointer transition-all duration-300">Login</button>
                    <div className=" mt-2.5 flex justify-between cursor-pointer">
                        <p className="hover:text-blue-500">Create Account</p>
                        <p className="hover:text-blue-500">Forgot Password ?</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default LoginPage