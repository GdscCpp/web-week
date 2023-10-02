'use client';
import { login } from '@/api/userService';
import Router, { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
  const background = '/background.png';
  const image = '/icon.svg';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const res = await login(username, password);
    if (res === true) {
      router.push('./upload');
    } else {
      toast.error('Incorrect Credentials 🤓☝️, Please Try Again', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    <main>
      <div
        className={'w-full h-screen overflow-y-hidden'}
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className={"text-white text-8xl font-normal font-['Jockey One'] pt-2.5 text-center"}>
          <span>RateMyResume</span>
        </div>
        <div className="justify-center flex ">
          <div className="w-[845px] bg-zinc-300 rounded-[40px] mt-60">
            <div className="relative flex justify-center">
              <img
                className="rounded-full h-45 w-45 border absolute top-[-130px]"
                src={image}
                alt="image description"
              />
            </div>
            <div className="justify-center flex mt-40">
              <div className="flex flex-col w-[420px]">
                <input
                  className="mb-5 bg-zinc-500 text-opacity-30 text-[40px] font-normal font-['Inter'] rounded-2xl pl-5"
                  placeholder="Username/Email"
                  type="text"
                  onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
                />
                <input
                  className="mb-5 bg-zinc-500 text-opacity-30 text-[40px] font-normal font-['Inter'] rounded-2xl pl-5"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
                />
                <button
                  onClick={handleLogin}
                  className="bg-sky-950 mb-10 rounded-[20px] font-normal font-['Inter'] text-[40px] text-white"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
