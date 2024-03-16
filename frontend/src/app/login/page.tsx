"use client"
import '../globals.css'
import styles from "../../assets/styles";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter()
  const [error, setError] = React.useState('')
  const [credentials, setCredentials] = React.useState({
    username: '',
    password: '',
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pastelPink">
      <div className={`${styles.divs.forms}`}>
        <h1 className="font-primary text-pastelYellow text-4xl w-full text-center">Login</h1>
        <h1 className="font-primary text-white w-96 text-xl w-full text-center">Enter your login credentials below. Or create a new account!</h1>
        <div className="flex justify-center items-center mt-4 flex-col w-11/12">
          {error !== '' ?
          <div className={`${styles.divs.error} mb-4`}>
            <p className='font-primary text-[1.05rem] text-black text-center'>{error}</p>
          </div>
          :
          <></>}
          <input className={`${styles.inputs.green}`} placeholder="Username" onChange={(e)=>{setCredentials({...credentials, username: e.target.value})}}/>
          <input className={`${styles.inputs.green} mb-4`} placeholder="Password" type="password" onChange={(e)=>{setCredentials({...credentials, password: e.target.value})}}/>
          <button className={`${styles.buttons.green} ${credentials.username == '' || credentials.password == '' ? 'cursor-not-allowed pointer-events-none opacity-[60%]' : ''}`}>Login</button>
        </div>
        <div className="flex justify-between items-center w-11/12 pt-4">
          <h1 onClick={()=>{router.push('/signup')}} className="text-lg font-primary text-pastelYellow cursor-pointer transition duration-500 hover:scale-110 active:scale-90">Signup</h1>
          <h1 onClick={()=>{router.push('/forgot/password')}} className="text-lg font-primary text-pastelYellow cursor-pointer transition duration-500 hover:scale-110 active:scale-90">Forgot Password</h1>
        </div>
      </div>
    </main>
  );
}
