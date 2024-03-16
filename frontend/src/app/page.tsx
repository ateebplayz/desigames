"use client"
import styles from "@/assets/styles";
import React from "react";

export default function Home() {
  const [credentials, setCredentials] = React.useState({
    username: '',
    password: '',
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pastelPink p-24">
      <div className={`${styles.divs.forms}`}>
        <h1 className="font-primary text-pastelYellow text-4xl w-full text-center">Home Page</h1>
      </div>
    </main>
  );
}
