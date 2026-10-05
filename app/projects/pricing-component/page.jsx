"use client";
import React from "react";

export default function PricingComponent() {
  return (
    <div className="box-border min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-center p-6">
      <main className="w-full max-w-6xl">
        <h1 className="mt-8 mb-12 text-center text-3xl md:text-5xl font-semibold text-gray-900">
          Choose your listening plan
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto items-stretch">
          {/* Card 1: Listener */}
          <div className="bg-gray-50 ring-1 ring-gray-300 grid grid-rows-[1fr_auto] rounded-xl p-8 gap-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="grid grid-rows-[auto_auto_auto_1fr] gap-y-2">
              <h2 className="text-lg font-semibold text-indigo-600">
                Listener
              </h2>
              <p className="text-4xl font-bold text-gray-900">
                $0
                <span className="text-base font-medium text-gray-500">
                  /month
                </span>
              </p>
              <p className="text-gray-600 mt-2">
                Start exploring millions of songs with basic features and ads.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span aria-hidden="true" className="text-green-700 mr-2">
                    &#10003;
                  </span>
                  <span>Ad-supported streaming</span>
                </li>
                <li className="flex items-center">
                  <span aria-hidden="true" className="text-green-700 mr-2">
                    &#10003;
                  </span>
                  <span>Curated playlists</span>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="block rounded-md bg-indigo-100 px-4 py-2.5 text-center font-semibold text-indigo-700 hover:bg-indigo-200 transition-colors duration-200 mt-6"
            >
              Start listening
            </a>
          </div>

          {/* Card 2: Premium (Most Popular) */}
          <div className="relative bg-gray-950 text-white ring-2 ring-fuchsia-500 p-8 grid grid-rows-[1fr_auto] gap-6 rounded-xl scale-105 shadow-xl shadow-fuchsia-500/5 hover:shadow-fuchsia-500/10 transition-all duration-300">
            <div className="absolute -top-3 right-4 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-full px-3 py-1 text-xs font-bold text-white shadow-md">
              Most Popular
            </div>
            <div className="grid grid-rows-[auto_auto_auto_1fr] gap-y-2">
              <h2 className="text-lg font-semibold text-fuchsia-200">
                Premium
              </h2>
              <p className="text-4xl font-bold text-white">
                $9.99
                <span className="text-base font-medium text-fuchsia-300">
                  /month
                </span>
              </p>
              <p className="text-gray-300 mt-2">
                Enjoy the full music experience with unlimited access and
                downloads.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-fuchsia-100">
                <li className="flex items-center">
                  <span aria-hidden="true" className="text-green-500 mr-2">
                    &#10003;
                  </span>
                  <span>Ad-free listening</span>
                </li>
                <li className="flex items-center">
                  <span aria-hidden="true" className="text-green-500 mr-2">
                    &#10003;
                  </span>
                  <span>Offline playback</span>
                </li>
                <li className="flex items-center">
                  <span aria-hidden="true" className="text-green-500 mr-2">
                    &#10003;
                  </span>
                  <span>Unlimited skips</span>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="block rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white hover:from-fuchsia-600 hover:to-indigo-700 px-4 py-2.5 text-center font-semibold transition-all duration-200 mt-6 shadow-md shadow-fuchsia-500/20"
            >
              Go Premium
            </a>
          </div>

          {/* Card 3: Family */}
          <div className="bg-gray-50 ring-1 ring-gray-300 p-8 rounded-xl grid grid-rows-[1fr_auto] gap-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="grid grid-rows-[auto_auto_auto_1fr] gap-y-2">
              <h2 className="text-lg font-semibold text-indigo-600">Family</h2>
              <p className="text-4xl font-bold text-gray-900">
                $14.99
                <span className="text-base font-medium text-gray-500">
                  /month
                </span>
              </p>
              <p className="text-gray-600 mt-2">
                Enjoy all of the features with a plan for up to 6 family
                members.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span aria-hidden="true" className="text-green-700 mr-2">
                    &#10003;
                  </span>
                  <span>All Premium features</span>
                </li>
                <li className="flex items-center">
                  <span aria-hidden="true" className="text-green-700 mr-2">
                    &#10003;
                  </span>
                  <span>Up to 6 accounts</span>
                </li>
                <li className="flex items-center">
                  <span aria-hidden="true" className="text-green-700 mr-2">
                    &#10003;
                  </span>
                  <span>Individual playlists & libraries</span>
                </li>
                <li className="flex items-center">
                  <span aria-hidden="true" className="text-green-700 mr-2">
                    &#10003;
                  </span>
                  <span>Family Mix playlists</span>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="block rounded-md bg-indigo-600 px-4 py-2.5 text-center font-semibold text-white hover:bg-indigo-700 transition-colors duration-200 mt-6"
            >
              Start Family Plan
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
