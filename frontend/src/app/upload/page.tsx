import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Upload() {
  const image = '/file-icon.png';

  return (
    <main>
      <div className={'flex flex-row h-screen w-full'}>
        <div className={'w-1/2 bg-neutral-800 pr-10 pl-10'}>
            <h1 className=" text-white text-[40px] font-semibold font-['Inter'] pl-[80px] mt-10">
                Upload your resume on the right!
            </h1>
            <p className=" text-white text-2xl font-semibold font-['Inter'] leading-[40px] mt-5 ">
                RateMyResume is a service that allows you to upload your resume, which will be reviewed by professionals,
                allowing you to make improvements and submit the best version you can.
            </p>
            <p className=" text-white text-2xl font-semibold font-['Inter'] leading-[40px] mt-5">
                To use the service, simply save your resume as a file on your computer (if you haven&apos;t already), and then
                either drag and drop it to the space on the right, or click the area to open a file picker.
            </p>
            <div className={"text-white text-5xl font-normal font-['Jockey One'] text-left fixed bottom-4"}>
                <span>RateMyResume</span>
            </div>
        </div>
        <div className={'w-1/2 bg-neutral-700 flex justify-center '}>
            <div>
                <img className="h-400 w-400 pt-40" src={image} alt="file icon picture" />
                <p className="text-center text-white text-opacity-50 text-2xl font-semibold font-['Inter']">
                Drag and drop files here
                </p>
                <p className="text-center text-white text-opacity-50 text-2xl font-semibold font-['Inter']">
                or click to upload
                </p>
            </div>
        </div>
      </div>
    </main>
  );
}
