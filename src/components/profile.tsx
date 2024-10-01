import { Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

export default function Introduction() {
  return (
    <Card className="flex items-center justify-center w-3xl h-3xl mt-8  p-6  m-6 rounded-lg shadow-md">
      <div className="flex-shrink-0 mr-6">
        <img src="/image copy 2.png" alt="Patient" width={120} height={120} className="rounded-full" />
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl">John Doe</h3>
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="text-xl mr-14">
              <span>Age : 35 years old</span>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl ">Gender : Female</h3>
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="text-xl mr-6">
              <span>Primary Contact: 987654321</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl">Primary caregiver: 987654321</h3>
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="text-xl mr-1">
              <span>Alternative number : 987654321</span>
            </div>
          </div>
        </div>
      </div>
        </div>
        
    </Card>
  )
}

function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function GroupIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}