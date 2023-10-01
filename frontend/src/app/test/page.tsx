'use client'
import Image from 'next/image';
import { login } from '../api/userService';

export default function Home() {
  const handleLogin = async () => { 
    const username="admin"
    const password="admin"
    const response = await login(username, password)

    console.log(response)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => handleLogin()}>BRUH</button>
    </main>
  );
}
