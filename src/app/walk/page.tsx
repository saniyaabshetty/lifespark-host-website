"use client";
import React from 'react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { FaUserNurse, FaUserMd } from 'react-icons/fa';
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
  ];
  const sectionItems = [
    { number: 1, src: '/walk.webp', description: 'Description for image 1' },
    { number: 2, src: '/walk2.webp', description: 'Description for image 2' },
    { number: 3, src: '/swing.gif', description: 'Description for image 3' },
    { number: 4, src: '/mobilewalk.webp', description: 'Description for image 4' },
    { number: 5, src: '/doctor_consultation_03.webp', description: 'Description for image 5' },
    { number: 6, src: '/help.webp', description: 'Description for image 6' },
  ];

  return (
    <>
      <main className='flex min-h-screen h-fit flex-col items-center justify-center relative overflow-hidden'>
        <FloatingNav navItems={navItems} brandLogo="/logo.webp" brandLink="/" />
        
        <header id="home" className="flex flex-col md:flex-row w-full h-screen max-w-9xl items-center justify-center relative overflow-hidden">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full md:flex">
              <div className="md:w-1/2 mr-36 md:ml-44 md:mt-16 text-6xl">
                <h1 className="text-6xl font-bold mb-4 text-green-800">WALK</h1>
                <p className="text-xl mb-6">Wearable Assistive Device</p>
                <p className="text-xl text-slate-500">
                  <span className='text-green-700'>WALK </span>
                  reduces freezing of gait, slowness, and falls in Parkinson's Disease. It uses muscle stimulation to improve coordination while walking. Through onboard sensors, WALK collects data and tracks symptoms that may lead to falls, enabling individuals to stay active in their everyday lives without stigma or the fear of falls.
                </p>
                <div className="flex mt-6 text-xl">
                  <button className="bg-emerald-800 text-white px-6 py-3 rounded mr-4">Buy WALK</button>
                  <button className="border border-green-800 text-green-800 px-6 py-3 rounded">See how it works</button>
                </div>
              </div>
              <div className="md:w-1/2 md:mr-48 md:ml-4 md:mt-28 relative">
                <img src="/im4.webp" alt="Image Description" className="w-full max-w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </header>
        <div className="w-full flex justify-center h-44 bg-sky-100 items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:mr-28 md:ml-28">
            <div className="flex flex-col md:flex-row items-center text-center">
              <img src="/im6.png" alt="Description 1" className="w-32 h-28 object-cover mb-4 md:mb-0 md:mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-slate-400 mb-2">Improved Gait and Balance</h3>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center text-center">
              <img src="/im7.png" alt="Description 2" className="w-32 h-28 object-cover mb-4 md:mb-0 md:mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-slate-400 mb-2">Reduced freezing and falls</h3>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center text-center">
              <img src="/im8.png" alt="Description 3" className="w-32 h-28 object-cover mb-4 md:mb-0 md:mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-slate-400 mb-2">Increased Independence and Confidence</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-20 md:ml-4 md:flex-row w-full max-w-9xl items-center relative">
              <button className="border border-sky-600 text-sky-600 flex items-center h-16 px-6 text-xl py-3 ml-36 rounded mr-7">
                <FaUserMd className="mr-2" /> For Doctors ↗
              </button>
              <button className="border border-sky-600 text-sky-600 flex items-center h-16 text-xl px-6 py-3 rounded">
                <FaUserNurse className="mr-2" /> For Caregivers ↗
              </button>
            </div>
        <div className="w-full mt-16 text-slate-500 text-xl flex items-center justify-center">
          Order now to reserve your WALK device and get priority delivery
        </div>

        <div className="flex flex-col md:flex-row w-full max-w-9xl items-center justify-center relative mt-8">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full md:flex">
              <div className="md:w-1/2 md:mr-4 md:ml-52 text-6xl">
                <h1 className="text-3xl mt-9 font-bold mb-4 text-slate-800">Why Order Now?</h1>
                <ul className="text-xl mb-6 list-disc pl-5">
                  <li className="text-xl text-slate-500">Personalized fitting and delivery in 3 weeks from the date of order</li>
                  <li className="text-xl mt-4 text-slate-500">Free 3 months of premium therapeutics, including online consultations</li>
                </ul>
                <div className="flex mt-6 text-xl">
                  <button className="bg-emerald-800 text-white px-6 py-3 rounded mr-4">Buy WALK</button>
                  <button className="border border-green-800 text-green-800 px-6 py-3 rounded">See how it works</button>
                </div>
              </div>
              <div className="md:w-1/2 md:mr-48 md:ml-4 md:mt-1 relative">
                <img src="/Website_Card.png" alt="Image Description" className="w-full max-w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full bg-sky-100 mt-10 py-12 flex justify-center">
          <iframe 
            width="760" 
            height="395" 
            src="https://www.youtube.com/embed/e8MOxBKVeNw" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className='text-center'>
          <p className='text-3xl mt-4'>"My fear of falling was reduced."</p>
          <p className='mt-2'>Kiran Deshpande</p>
          <p className='mt-2 text-slate-600 mb-9'>66 years, Parkinson patient</p>
        </div>

        <div className='w-full flex justify-center'>
          <iframe 
            width="760" 
            height="395" 
            src="https://www.youtube.com/embed/SxOPKX4UhLg" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="flex flex-col md:flex-row w-full max-w-9xl items-center justify-center relative mt-20">
          <div className="w-full flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 mr-36 md:ml-44 text-3xl text-center">
              <img src="/im15.webp" alt="Centered Image" className="w-full h-full object-cover mx-auto" />
            </div>
            <div className="md:w-1/2 md:mr-48 md:ml-4 md:mt-4 relative grid grid-cols-2 gap-8">
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
          </div>
          </div>


          <div className="w-full flex bg-sky-100 flex-col items-center justify-center">
            <div className="w-full mb-24 md:flex">
              <div className="md:w-1/2 mr-36 md:ml-44 md:mt-16 text-6xl">
                <p className="text-4xl mb-6">Gamified therapy sessions</p>
                <p className="text-xl text-slate-500">
                The WALK app includes games that guide the user through specific exercises based on their movement parameters. These activities target and exercise those neuromuscular systems that are most important for gait and balance.
                </p>
              </div>
              <div className='mt-12 w-full flex mb-12 justify-center'>
          <video width="425" height="425" controls>
            <source src="/walkhowtouse.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
            </div>
          </div>

        <div className='mt-28 w-full flex justify-center'>
          <video width="760" height="395" controls>
            <source src="/walkhowtouse.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        
          
        <div className='mt-9'>
          <p className='flex text-3xl justify-center'>Take control of your therapy with</p>
          <p className='flex justify-center text-2xl'>the walk ecosystem</p>
          <p className='text-xl text-slate-400 mt-4'>Identify your gait phenotype, get the best therapy </p>
          <span className='flex justify-center text-slate-400 text-xl'>designed for<span className='ml-1 text-xl text-slate-900'>YOU</span></span>
        </div>

        <section className="flex flex-col items-center mt-16 mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {sectionItems.slice(0, 3).map((item) => (
              <div key={item.number} className="flex flex-col justify-center items-center text-center">
                <p className="text-2xl font-bold mb-2">{item.number}</p>
                <div className="w-48 h-48 overflow-hidden flex justify-center items-center">
                  <img
                    src={item.src}
                    alt={`Image ${item.number}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xl text-slate-500 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-12">
            {sectionItems.slice(3).map((item) => (
              <div key={item.number} className="flex flex-col justify-center items-center text-center">
                <p className="text-2xl font-bold mb-2">{item.number}</p>
                <div className="w-48 h-48 overflow-hidden flex justify-center items-center">
                  <img
                    src={item.src}
                    alt={`Image ${item.number}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xl text-slate-500 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="w-full flex flex-col bg-sky-100 items-center justify-center">
            <div className="w-full mb-14 md:flex">
              <div className="md:w-1/2 mr-36 md:ml-44 md:mt-16 text-6xl">
                <h1 className="text-4xl font-bold mb-4">
                How does WALK work?</h1>
                <p className="text-2xl text-slate-500">WALK uses muscle stimulation, delivered through a specialised form of vibration, to improve walking and balance.</p>
                <p className="text-2xl mt-12 text-slate-500">
                Difficulties in walking and balance in Parkinson’s disease arise from cell loss in the Basal Ganglia, a part of the brain responsible for voluntary movements. This creates a disruption in communication from the Basal Ganglia to the spinal cord and onwards to the muscle. Patterned muscle stimulation has been shown to reduce the effect of this disruption and elicit walking-like patterns
                </p>
              </div>
              <div className="md:w-1/2 md:mr-38 md:ml-12 md:mt-12 relative">
      <img src="/im14.gif" alt="Image Description" className="w-1/2 h-4/4 max-w-xs" />
    </div>
            </div>
            </div> 
        <div className="text-">
         <p className='flex text-4xl mt-11 mb-4 justify-center'> How to use WALK</p>

          <iframe 
            width="760" 
            height="395" 
            src="https://www.youtube.com/embed/e8MOxBKVeNw" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div></div>
        <div className='flex flex-col justify-center items-center text-center'>
              <p className='text-4xl mt-12'>Frequently asked questions</p>
              <FAQAccordion questions={ questions }/>
            </div>
            <div>
            <button className='bg-green-800 px-6 py-3 text-whiterear rounded mr-4'>Pre-order WALK</button>
            </div>
            <div className='flex bg-sky-100 mt-12 items-center justify-center w-full'>
              <div className='mt-12 mb-12'>
  <GlareCard className="flex items-center justify-center p-6">
    <div className="text-center">
      <p className="font-bold text-slate-800 text-lg">
        Still have questions?
      </p>
      <button className="font-normal bg-green-700 px-6 py-3 rounded mt-4 text-slate-700">
        Contact Us
      </button>
    </div>
  </GlareCard>
  </div>
</div>
      </main>
    </>
  );
}
