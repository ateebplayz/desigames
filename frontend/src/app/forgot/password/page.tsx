"use client"
import styles from "../../../assets/styles";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter()
  const [credentials, setCredentials] = React.useState({
    username: '',
    password: '',
    backupCode: ''
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pastelPink">
      <div className={`${styles.divs.forms}`}>
        <h1 className="font-primary text-pastelYellow text-4xl w-full text-center">Forgot Password</h1>
        <h1 className="font-primary text-white w-96 text-xl w-full text-center">Forgot your password? No worries. Enter your backup code</h1>
        <div className="flex justify-center items-center mt-4 flex-col w-11/12">
          <input className={`${styles.inputs.green}`} placeholder="Username" onChange={(e)=>{setCredentials({...credentials, username: e.target.value})}}/>
          <input className={`${styles.inputs.green}`} placeholder="New Password" type="password" onChange={(e)=>{setCredentials({...credentials, password: e.target.value})}}/><input className={`${styles.inputs.green}`} placeholder="Backup Code" type="password" onChange={(e)=>{setCredentials({...credentials, backupCode: e.target.value})}}/>
          <button className={`${styles.buttons.green} ${credentials.username == '' || credentials.password == '' || credentials.backupCode == '' ? 'cursor-not-allowed pointer-events-none opacity-[60%]' : ''}`}>Reset Password</button>
        </div>
        <div className="flex justify-between items-center w-11/12 pt-4">
          <h1 onClick={()=>{router.push('/login')}} className="w-full text-center text-lg font-primary text-pastelYellow cursor-pointer transition duration-500 hover:scale-110 active:scale-90">No backup code? Join our discord for help.</h1>
        </div>
      </div>
    </main>
  );
}
