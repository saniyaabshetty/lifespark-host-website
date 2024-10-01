"use client";
import React from 'react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { FaUserNurse, FaUserMd, FaHeartbeat } from 'react-icons/fa';
import FAQAccordion from '@/components/ui/ques';
import { GlareCard } from '@/components/ui/glare-card';

export default function Landing() {
  const navItems = [
    { name: "Home", link: "/landing" },
    { name: "About", link: "/About" },
    { name: "WALK", link: "/walk" },
    { name: "Blog", link: "/Blog" },
    {
      name: "Other Products",
      link: "#",
      // icon: <FaFlag className="h-4 w-4 text-neutral-500 dark:text-white" />,
      subItems: [
        {
          name: "Myorhythm",
          link: "/myorhythm",
        },
        {
          name: "Myoair",
          link: "/myoair",
        },
      ],
    },
    { name: "More", link: "/career" },
  ];


  return (
    <>
      <main className='flex min-h-screen h-fit flex-col items-center justify-center relative overflow-hidden'>
        <FloatingNav navItems={navItems} brandLogo="/logo.webp" brandLink="/" />
        
        <header id="home" className="flex flex-col md:flex-row w-full max-w-6xl h-900 items-center justify-center relative overflow-hidden">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full md:flex">
              <div className="md:w-1/2 md:ml-44 md:mt-52 text-6xl">
                <h1 className="text-8xl font-bold mb-4 text-green-800"> MyoRhythm</h1>
                <p className="text-xl mb-6 text-slate-400">Wired EMG acquisition system</p>
               
                <div className="flex mt-16 text-xl">
                  <button className="bg-emerald-800 text-white px-6 py-3 rounded mr-4">Get quotation</button>
                </div>
              </div>
              <div className="md:mr-3 md:mt-44">
                <img src="/myo.webp" alt="Image Description" className="w-4xl h-5xl object-cover" />
              </div>
            </div>
          </div>
        </header>

        <div className="w-full mt-16 text-slate-500 text-xl mb-5 bg-sky-100 h-48">
          <div className=" flex mt-16 items-center justify-center">A low-noise, high bandwidth and high sampling rate wired EMG acquisition system</div>
          <div className='flex items-center justify-center'>compatible with standard gel electrodes</div>
        </div>

        <div className="w-full bg-gray-100 text-center">
          <img src="/im19.png" alt="Centered Image" className="w-2/4 h-2/4 object-cover mx-auto" />
        </div>

        <div className="w-full bg-gray-100 text-center">
          <img src="/myoim3.webp" alt="Centered Image" className="w-2/4 h-2/4 object-cover mx-auto " />
        </div>
        <div className="w-full text-center">
                <img src="/image.png" alt="Image Description" className="w-2/4 h-2/4 object-cover mx-auto" />
              </div>
              <section className="w-full py-16 bg-sky-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-around text-center">
              <div className="flex flex-col items-center mb-8 md:mb-0">
                <FaUserNurse className="text-4xl text-green-800 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Healthcare Professionals</h2>
                <p className="text-gray-600">Stabilzation straps to enable clean recordings in dynamic scenarios.</p>
              </div>
              <div className="flex flex-col items-center mb-8 md:mb-0">
                <FaUserMd className="text-4xl text-green-800 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Minimal footprint</h2>
                <p className="text-gray-600">Fits on a desk, battery powered to reduce wiring hassles.</p>
              </div>
              <div className="flex flex-col items-center">
                <FaHeartbeat className="text-4xl text-green-800 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Stackable</h2>
                <p className="text-gray-600">Multiple 8 channel systems can be synchronized for complex setups.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
