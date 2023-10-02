import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Login() {
  const background = '/background.png';
  const image = '/icon.svg';

  return (
    <main>
      <div
        className={'w-full min-h-screen'}
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className={"text-white text-8xl font-normal font-['Jockey One'] pt-2.5 text-center"}>
          <span>RateMyResume</span>
        </div>

        <div className="justify-center flex mt-60">
          <div className="w-[845px] bg-zinc-300 rounded-[40px]">
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
                />
                <input
                  className="mb-5 bg-zinc-500 text-opacity-30 text-[40px] font-normal font-['Inter'] rounded-2xl pl-5"
                  placeholder="Password"
                  type="text"
                />
                <button className="bg-sky-950 mb-10 rounded-[20px] font-normal font-['Inter'] text-[40px] text-white">
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
