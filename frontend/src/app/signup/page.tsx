"use client"
import styles from "../../assets/styles";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter()
  const [credentials, setCredentials] = React.useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pastelPink">
      <div className={`${styles.divs.forms}`}>
        <h1 className="font-primary text-pastelYellow text-4xl w-full text-center">Signup</h1>
        <h1 className="font-primary text-white w-96 text-xl w-full text-center">Enter your new credentials below. No verification of E-mail or anything!</h1>
        <div className="flex justify-center items-center mt-4 flex-col w-11/12">
          
          <input className={`${styles.inputs.green}`} placeholder="Username" onChange={(e)=>{setCredentials({...credentials, username: e.target.value})}}/>
          <input className={`${styles.inputs.green}`} placeholder="Password" type="password" onChange={(e)=>{setCredentials({...credentials, password: e.target.value})}}/><input className={`${styles.inputs.green} mb-4`} placeholder="Confirm Password" type="password" onChange={(e)=>{setCredentials({...credentials, confirmPassword: e.target.value})}}/>
          <button className={`${styles.buttons.green} ${credentials.username == '' || credentials.password == '' || credentials.confirmPassword == '' ? 'cursor-not-allowed pointer-events-none opacity-[60%]' : ''}`}>Signup</button>
        </div>
        <div className="flex justify-between items-center w-11/12 pt-4">
          <h1 onClick={()=>{router.push('/login')}} className="w-full text-center text-lg font-primary text-pastelYellow cursor-pointer transition duration-500 hover:scale-110 active:scale-90">Already have an account? Login</h1>
        </div>
      </div>
    </main>
  );
}
