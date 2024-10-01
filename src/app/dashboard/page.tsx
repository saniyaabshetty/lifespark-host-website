"use client";


import Dashboard  from "@/components/ui/Dashboard";

import "driver.js/dist/driver.css";
import { PersonIcon } from "@radix-ui/react-icons";
import { Box, GanttChartSquare, VideoIcon, VideoOffIcon, VideotapeIcon } from "lucide-react";
import { IconReportAnalytics } from "@tabler/icons-react";
import { FaMeetup, FaWpforms } from "react-icons/fa6";
import { Form } from "@/components/form";
import Formcomp from "../Form/page";
import Repanalysis from "../Rep/page";
import { Delivery } from "@/components/order";
import Profile from "@/components/profile";
import Intro from "../Profile/page";
import Meet from "../google/page";


const dashboardContent = [
    {
        panel: <Intro/>,
        key: "introduction",
        icon: <PersonIcon />,
        label: "Dashboard",
        link: null
    },
    {
        panel: <Formcomp />,
        key: "form",
        icon: <FaWpforms />,
        label: "Post purchase form",
        link: null
    },
    {
        panel: <Meet />,
        key: "camera",
        icon: <VideoIcon/>,
        label: "Meet",
        link: null
    },
    {
        panel: <Delivery />,
        key: "query",
        icon: <Box />,
        label: "Delivery",
        link: null
    },

    {
          panel: <Repanalysis />,
          key: "report",
          icon: <IconReportAnalytics />,
          label: "Report Analysis",
          link: null
    },
    
    
];

const steps = [
    { element: '#introduction', popover: { title: 'Dashboard', description: 'Dashboard of the patient' } },
    { element: '#form', popover: { title: 'Post Purchase form', description: 'Post purchase form for that the patient' } },
    { element: '#query', popover: { title: 'Delivery', description: 'Track the delivery of the product' } },
    { element: '#report', popover: { title: 'Report Analysis', description: 'Get your report' } },
]

export default function page() {
    return <Dashboard dashboardContent={dashboardContent} tutorialsteps={steps} title="" />
}
