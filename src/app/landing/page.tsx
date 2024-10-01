"use client"
import React from 'react'
// import { IconHome, IconUser } from "@tabler/icons-react";
import { ThreeDPhotoCarousel } from "@/components/ui/three-d-carousel"
import { FloatingNav } from '@/components/ui/floating-navbar'
import { FaPersonFalling } from "react-icons/fa6"
import CardCom from '@/components/ui/cardcom'
import { InfiniteMovingCards } from '@/components/ui/movingcard'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'

export default function Landing() {
  const navItems = [
    {
      name: "Home",
      link: "/landing",
      // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/About",
      // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "WALK",
      link: "/walk",
      // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Dashboard",
      link: "/dashboard",
      // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Blog",
      link: "/Blog",
      // icon: <FaLock className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Other Products",
      link: "/Other",
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
    {
      name: "More",
      link: "/career",
      // icon: <FaFlag className="h-4 w-4 text-neutral-500 dark:text-white" />,
    }
  ];
  const words = [
    {
      text: "Beating Parkinson's, ",
      className: "text-6xl font-bold text-white",
    },
    {
      text: "one step at a time",
      className: "text-6xl font-bold text-white",
    },
  ];
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <>
      <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
        <FloatingNav navItems={navItems} brandLogo="/logo.webp" brandLink="/" />
        
        <header id="home" className="flex flex-col md:flex-row w-full h-screen max-w-9xl items-center justify-center relative ">
          <div className='w-full h-full flex flex-col justify-center items-center md:items-start relative mr-6 ml-6 mt-24'>
            <img src="/im1.webp" alt="Landing Image" className="w-full h-auto object-cover"/>
            <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center items-start p-8 bg-opacity-50 text-white">
            <TypewriterEffectSmooth words={words} />
              {/* <h1 className="text-6xl font-bold">Beating Parkinson's, one step at a time</h1> */}
              <p className="mt-2 text-2xl">Introducing WALK, a wearable assistive device for mobility and gait</p>
              <div className="flex mt-6">
                <button className="bg-emerald-800 text-white px-6 py-3 rounded mr-16">Pre-Order WALK</button>
                <button className="border border-white text-white px-6 py-3 rounded">Learn More</button>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center mt-8">
              <div className="flex items-center space-x-1">
                <img src="/im3.webp" alt="Small Image" className="w-18 h-20 object-cover"/>
                <div className="relative w-full">
                  <div className="before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-full before:h-[2px] before:bg-neutral-300 dark:before:bg-neutral-700"></div>
                  <hr className="h-px my-0 bg-sky-800 border-0 dark:bg-sky-800"/>
                  <p className="relative z-10 bg-white px-2 py-2 text-2xl font-semibold text-center dark:text-sky-800">
                    An ISO 13485 Certified Organization
                  </p>
                  <hr className="h-px my-0 bg-sky-800 border-0 dark:bg-sky-800"/>
                  <div className="after:content-[''] after:absolute after:top-1/2 after:left-0 after:w-full after:h-[2px] after:bg-neutral-300"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* New div below the header */}
        <div className="w-full mt-12 flex flex-col items-center justify-center">
          <div className="w-full md:flex">
            <div className="md:w-1/2 md:mr-4 ml-52 md:mt-12 text-6xl">
              <h1 className="text-6xl font-bold mb-4 text-green-800">WALK</h1>
              <p className="text-xl mb-6">Wearable Assistive Device</p>
              <p className="text-xl">WALK reduces falls, improves gait and balance, and increases mobility in Parkinson's Disease</p>
              <div className="flex mt-6 h-8px w-8px text-xl">
                <button className="bg-emerald-800 text-white px-6 py-3 rounded mr-16">Pre-Order WALK</button>
                <button className="border border-green-800 text-green-800 px-6 py-3 rounded">Learn More</button>
              </div>
            </div>
            <div className="md:w-1/2 md:mr-52 md:ml-4 md:mt-12">
              <img src="/im4.webp" alt="Image Description" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
        
        <div className="w-full flex flex-col items-center justify-center mt-8">
          <div className="flex items-center space-x-1">
            <img src="/im5.webp" alt="Small Image" className="w-18 h-20 object-cover"/>
            <div className="relative w-full">
              <div className="before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-full before:h-[2px] before:bg-neutral-300 dark:before:bg-neutral-700"></div>
              <hr className="h-px my-0 bg-sky-800 border-0 dark:bg-sky-800"/>
              <p className="relative z-10 bg-white px-2 py-2 text-xl font-semibold text-center dark:text-sky-800">
          
                Made with ❤️ at IIT Bombay
              </p>
              <hr className="h-px my-0 bg-sky-800 border-0 dark:bg-sky-800"/>
              <div className="after:content-[''] after:absolute after:top-1/2 after:left-0 after:w-full after:h-[2px] after:bg-neutral-300"></div>
            </div>
          </div>
        </div>

        {/* New div with three parts */}
        <div className="w-full mt-12 flex justify-center h-48 bg-sky-100 items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 md:mr-4 md:ml-8">
            <div className="flex flex-col md:flex-row items-center text-center">
              <img src="/im6.png" alt="Description 1" className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-slate-400 mb-2">Improved Gait and Balance</h3>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center text-center">
              <img src="/im7.png" alt="Description 2" className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-slate-400 mb-2">Reduced freezing and falls</h3>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center text-center">
              <img src="/im8.png" alt="Description 3" className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-slate-400 mb-2">Increased Independence and Confidence</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="flex justify-center items-center mt-14">
        <div className=' text-2xl text-sky-400'>
        <p>Ecosystem Support</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-1 text-4xl">
      <h1>Our Partners</h1>
      </div>
      <ThreeDPhotoCarousel/>
      <div className='bg-sky-100'>
        <CardCom/>
      </div>
      <div className="flex justify-center items-center mt-6">
        <div className=' text-4xl  text-slate-800'>
        <h1>Read our blog</h1>
        </div>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
  
    </>
  );
}