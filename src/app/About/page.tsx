"use client";
import React, { useState } from 'react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { FaArrowLeft, FaArrowRight, FaPersonFalling } from 'react-icons/fa6';
import { BentoGridDemo } from '@/app/bentogrid/page'
import FAQAccordion from '@/components/ui/ques';


export default function Landing() {
  const navItems = [
    {
      name: 'Home',
      link: '/landing',
    },
    {
      name: 'About',
      link: '/About',
    },
    {
      name: 'WALK',
      link: '/walk',
    },
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
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
    {
      name: 'More',
      link: '/career',
    },
  ];
  const questions = [
    {
      question: "What is Lorem Ipsum?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Why do we use it?",
      answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    // Add more questions and answers as needed
  ];
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
      {
        heading: "National Bio Entrepreneurship",
        src: "/im9.jpg",
      },
      {
        heading: "Another Award",
        src: "/im10.webp",
      },
      // Add more slides as needed
    ];
    const nextSlide = () => {
      setCurrentSlide((prevSlide: number) => (prevSlide + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide: number) => (prevSlide - 1 + slides.length) % slides.length);
    };
  return (
    <>
      <main className="flex flex-col min-h-screen ">
      <header id="home" className="w-full max-w-9xl">
        <div className="w-full h-15 flex flex-col justify-center items-center bg-emerald-700 text-center mt-20">
        <FloatingNav navItems={navItems} brandLogo="/logo.webp" brandLink="/" />
          <p className="text-white  bg-emerald-700 text-xl mb-2">About Us</p>
          <p className="text-white  bg-emerald-700font-bold text-3xl">Healthcare at home, designed for you</p>
        </div>
        <div className=' flex flex-col justify-center items-center bg-sky-100 text-center'>
            <p className='text-5xl mt-16'>What we do</p>
            <p className='text-slate-500 text-xl mt-6 ml-72 mr-72'>Lifespark Technologies creates solutions for care in chronic neurological conditions such as Stroke, Parkinson's Disease, Spinal cord injury and more. We are based at the Indian Institute of Technology - Bombay, India. Our solutions are designed for individuals, caregivers and the entire family; because these conditions don't just affect the lives of individuals.</p>


            <p className='text-slate-500 text-xl mt-6 ml-72 mr-72'>Our solutions span the domains of AI/ML, medical devices, mobile applications and web applications. Lifespark aims to create the basic intelligence that will one day solve health issues at the earliest stage before they have damaging results. One day, a 60-year-old will look like today's 30-year-old.</p>


            <p className='text-slate-500 text-xl mb-8 mt-6 ml-72 mr-72'>Lifespark is among the top health-tech startups in the country and count many prominent business leaders and academics as our mentors. We have deployed our solutions in partnership with some of the largest healthcare organizations in India and are looking to establish ourselves as the go-to innovator globally</p>
          </div>
          <div className=' flex flex-col justify-center items-center text-center mt-16 mb-14'>
            <p className='text-5xl'>Our Values</p>
          </div>
          <div className='flex flex-col justify-center items-center bg-sky-100 text-center pt-6 pb-16'>
            <div className='text-5xl mb-8'>Meet Our Team</div>
            <div className='bg-sky-100 h-full'>
            <BentoGridDemo />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-center pt-6 pb-16'>
          <p className='text-4xl'>Awards and Recognition</p>
          <p className='text-xl text-sky-400 mt-4'>Featured on Shark Tank →</p>
          <div className='m-12'>
              <iframe 
                width="760" 
                height="395" 
                src="https://www.youtube.com/embed/7d8qIb5WxdU" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <div className='relative w-full max-w-xl m-12'>
              <p className='text-2xl text-sky-400 mt-4'>{slides[currentSlide].heading}</p>
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              
                <FaArrowLeft onClick={prevSlide} className="text-3xl cursor-pointer" />
              </div>
              <div className="absolute top-1/2 right-5 transform -translate-y-1/2">
                <FaArrowRight onClick={nextSlide} className="text-3xl cursor-pointer" />
                
              </div>
              <img 
                src={slides[currentSlide].src} 
                alt={slides[currentSlide].heading}
                className="w-full h-auto object-cover"
              />
            </div>
            <p className='flex text-xl mt-3 text-slate-500 '>AGC Jancare Top 75 startups in Healthcare in India</p>
<p className='flex text-xl mt-3  text-slate-500'>Among SLINGSHOT SWITCH Top 1000 Startups Globally</p>
<p className='flex text-xl mt-3 text-slate-500'>BIRAC Biotechnology Ignition Grant</p>
            </div>
            <div className='flex flex-col justify-center items-center bg-sky-100 text-center'>
              <p className='text-4xl mt-12'>Frequently asked questions</p>
              <FAQAccordion questions={ questions }/>
            </div>
      </header>
        {/* Your main content goes here */}
      </main>
    </>
  );
}
