import CareerForm from "@/components/ui/carreer";
import { FloatingNav } from "@/components/ui/floating-navbar";

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
    <main className='flex min-h-screen h-fit flex-col  relative overflow-hidden'>
         <div className="flex items-center justify-center">
     <FloatingNav navItems={navItems} brandLogo="/logo.webp" brandLink="/" />
     </div>
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-full max-w-full">
        <CareerForm />
      </div>
    </div>
    </main>
  );
}
