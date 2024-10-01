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
                <h1 className="text-8xl font-bold mb-4 text-green-800"> MyoAir</h1>
                <p className="text-xl mb-6 text-slate-400">Wireless EMG Acquisition System</p>
               
                <div className="flex mt-16 text-xl">
                  <button className="bg-emerald-800 text-white px-6 py-3 rounded mr-4">Get quotation</button>
                </div>
              </div>
              <div className="md:mr-3 md:mt-44">
                <img src="/myoim3.png" alt="Image Description" className="w-4xl h-5xl object-cover" />
              </div>
            </div>
          </div>
        </header>

        <div className="w-full mt-16 text-slate-500 text-xl mb-5 bg-sky-100 h-48">
          <div className=" flex mt-16 items-center justify-center">A low-noise, high bandwidth and high sampling rate wired EMG acquisition system</div>
          <div className='flex items-center justify-center'>compatible with standard gel electrodes</div>
        </div>
        
        <div className="flex flex-col md:flex-row w-full max-w-9xl items-center justify-center relative mt-20">
          <div className="w-full flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 md:mr-8 md:ml-60 md:mt-4 relative grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mt-2">Symbol 1 Title</h3>
                <p className="text-sm mt-1">Description for symbol 1.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mt-2">Symbol 2 Title</h3>
                <p className="text-sm mt-1">Description for symbol 2.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mt-2">Symbol 3 Title</h3>
                <p className="text-sm mt-1">Description for symbol 3.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mt-2">Symbol 4 Title</h3>
                <p className="text-sm mt-1">Description for symbol 4.</p>
              </div>
              
            </div>
            <div className="md:w-1/2 mr-36 md:ml-80 text-3xl text-center">
              <img src="/im15.webp" alt="Centered Image" className="w-full h-full object-cover mx-auto" />
            </div>
          </div>
          </div>


      </main>
    </>
  );
}
