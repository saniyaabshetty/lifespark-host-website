
import { FloatingNav } from "@/components/ui/floating-navbar";
import RequestCall from "@/components/ui/reqcall";

export default function Formcomp() {

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
            <main className='flex min-h-screen h-fit flex-col items-center justify-center bg-sky-100 relative overflow-hidden'>
              <FloatingNav navItems={navItems} brandLogo="/logo.webp" brandLink="/" />
             <div className="flex flex-col items-center justify-center min-h-screen bg-sky-100">
      <div className="w-full max-w-full bg-sky-100">
    <RequestCall />
      </div>
    </div>
    </main>
    </>
  );
}