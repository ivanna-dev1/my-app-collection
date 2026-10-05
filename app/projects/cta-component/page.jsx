"use client";
import React from 'react';

export default function CTAComponent() {
  return (
    <div className="box-border min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="w-full">
        <div className="bg-indigo-600 text-white mt-8 p-4 md:w-1/2 mx-auto flex flex-col lg:flex-row justify-around items-center rounded-md shadow-2xl">
          <div>
            <span className="uppercase text-xs tracking-widest opacity-80">Soundflow</span>
            <h1 className="font-bold text-4xl my-4">Discover New Music</h1>
            <p className="opacity-90">Stream your favorite tracks and discover new artists.</p>
          </div>
          <div className="flex gap-2 mt-6">
            <a
              href="#"
              className="bg-white hover:bg-gray-100 text-indigo-600 px-4 py-2 font-semibold rounded transition-all duration-200"
            >
              Learn more
            </a>
            <a
              href="#"
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 font-semibold rounded transition-all duration-200"
            >
              Start listening
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
