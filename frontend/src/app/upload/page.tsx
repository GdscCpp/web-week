import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Upload() {
  const image = '/file-icon.png';

  return (
    <main>
      <div className={'flex text-[24px]'}>
        <div
          className={"w-[55vw] h-[100vw] bg-neutral-800 flex-auto pt-10"}
        >
          <h1 className=" text-white text-[70px] font-semibold font-['Inter'] pl-[80px]">Upload your resume on the right!</h1>
          <p className="w-[852px] pl-[80px] text-white text-2xl font-semibold font-['Inter'] leading-[40px] pt-20">
            RateMyResume is a service that allows you to upload your resume, which will be reviewed by professionals,
            allowing you to make improvements and submit the best version you can.
          </p>
          <p className="w-[852px] pl-[80px] text-white text-2xl font-semibold font-['Inter'] leading-[40px] pt-20">
            To use the service, simply save your resume as a file on your computer (if you haven't already), and then
            either drag and drop it to the space on the right, or click the area to open a file picker.
          </p>
          <div
            className={"text-white text-5xl font-normal font-['Jockey One'] text-left absolute bottom-0 left-0 pl-20 pb-20"}
          >
            <span>RateMyResume</span>
          </div>
        </div>
        <div className={'w-[45vw] h-[100vw] bg-neutral-700 flex justify-center '}>
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
