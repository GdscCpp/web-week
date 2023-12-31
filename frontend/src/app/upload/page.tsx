'use client';

import { upload } from '@/api/uploadService';
import React, { ChangeEventHandler, MouseEventHandler, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { toast } from 'react-toastify';

export default function Upload() {
  const image = '/file-icon.png';
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (hiddenFileInput?.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const fileUploaded = event?.target?.files && event.target.files[0];

    if (fileUploaded != null) {
      const user = localStorage.getItem('user');
      const req = await upload(fileUploaded, user!)

      if(req === true) {
        toast("File Uploaded Successfully!",{type:"success"})
      }
    }

    event.target.value = '';
  };

  return (
    <main>
      <div className={'flex flex-row h-screen overflow-y-hidden w-full'}>
        <div className={'w-1/2 bg-neutral-800 pr-10 pl-10'}>
          <h1 className=" text-white text-[40px] font-semibold font-['Inter'] pl-[80px] mt-10">
            Upload your resume on the right!
          </h1>
          <p className=" text-white text-2xl font-semibold font-['Inter'] leading-[40px] mt-5 ">
            RateMyResume is a service that allows you to upload your resume, which will be reviewed by professionals,
            allowing you to make improvements and submit the best version you can.
          </p>
          <p className=" text-white text-2xl font-semibold font-['Inter'] leading-[40px] mt-5">
            To use the service, simply save your resume as a file on your computer (if you haven&apos;t already), and
            then either drag and drop it to the space on the right, or click the area to open a file picker.
          </p>
          <div className={"text-white text-5xl font-normal font-['Jockey One'] text-left fixed bottom-4"}>
            <span>RateMyResume</span>
          </div>
        </div>
        <div className={'w-1/2 bg-neutral-700 flex justify-center '}>
          <button onClick={handleClick}>
            <img className="h-400 w-400 pt-40" src={image} alt="file icon picture" />
            <p className="text-center text-white text-opacity-50 text-2xl font-semibold font-['Inter']">
              Drag and drop files here
            </p>
            <p className="text-center text-white text-opacity-50 text-2xl font-semibold font-['Inter']">
              or click to upload
            </p>
          </button>
        </div>
      </div>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        name={'upload'}
        id={'upload'}
        className={'h-0 appearance-none overflow-hidden'}
        accept={'image/png, image/jpeg'}
      />
    </main>
  );
}
