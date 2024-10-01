"use client";
import { cn } from "@/lib/utils";
import React from "react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { FaTextHeight } from "react-icons/fa";
import { BiDoughnutChart, BiDumbbell, BiMouse, BiScreenshot } from "react-icons/bi";
import { Link1Icon, TimerIcon } from "@radix-ui/react-icons";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-screen-xl mt-5 mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
           className="bg-sky-100 rounded-lg shadow-md h-full"
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "MedScan Summarizer",
    description: "Import report images, witness automated extraction, and receive a concise summary, streamlining data interpretation and decision-making on our platform.",
    header: <Image src={"/1.jpeg"} alt="" width={700} height={700} style={{ width: "100%", height: "150px", objectFit: "cover" }}/>,
    icon: <FaTextHeight className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Calorie Detector",
    description: "Effortlessly calculate calorie content by simply uploading an image of your food on our platform.",
    header: <Image src={"/2.jpeg"} alt="" width={700} height={700} style={{ width: "100%", height: "150px", objectFit: "cover" }}/>,
    icon: <BiDoughnutChart className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "InsureLink Integration",
    description: "Incorporate medical insurance verification to ensure swift and accurate coverage assessment on our platform.",
    header: <Image src={"/3.jpeg"} alt=""  width={700} height={700} style={{ width: "100%", height: "150px", objectFit: "cover" }}/>,
    icon: <Link1Icon className="h-4 w-4 text-neutral-500" />,
  },
];