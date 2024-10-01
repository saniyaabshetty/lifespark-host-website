import Link from "next/link";
import Rep from "@/components/rep";
import Introduction from "@/components/profile";
import "gantt-schedule-timeline-calendar/dist/style.css";
import dynamic from "next/dynamic";
const Gantt = dynamic(() => import('@/components/ui/Gantt'), {
    ssr: false,
  });

export default function Intro() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
         <div className="w-full max-w-full">
        <Introduction />
        <div className="m-12">
        <Gantt/>
      </div>
      </div>
    </div>
  );
}



