import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <div className="w-full max-w-6xl mx-auto p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Patient Report</h1>
          <Button className="bg-blue-600 text-white" size="sm">Add New Report</Button>
        </div>
        <div className="overflow-x-auto mt-9 rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted text-muted-foreground">
                <th className="px-4 py-3 text-left font-medium">Therapy Session Number</th>
                <th className="px-4 py-3 text-left font-medium">Name of the Patient</th>
                <th className="px-4 py-3 text-left font-medium">Date of the Session</th>
                <th className="px-4 py-3 text-left font-medium">Time of the Session</th>
                <th className="px-4 py-3 text-left font-medium">Report PDF</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">John Doe</td>
                <td className="px-4 py-3">2023-06-01</td>
                <td className="px-4 py-3">10:00 AM - 11:00 AM</td>
                <td className="px-4 py-3">
                  <Link href="#" className="text-primary hover:underline hover:text-sky-600 transition-colors" prefetch={false}>
                    View Report
                  </Link>
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3">Jane Smith</td>
                <td className="px-4 py-3">2023-06-15</td>
                <td className="px-4 py-3">2:00 PM - 3:00 PM</td>
                <td className="px-4 py-3">
                  <Link href="#" className="text-primary hover:underline hover:text-sky-400 transition-colors" prefetch={false}>
                    View Report
                  </Link>
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3">3</td>
                <td className="px-4 py-3">Michael Johnson</td>
                <td className="px-4 py-3">2023-07-01</td>
                <td className="px-4 py-3">9:00 AM - 10:00 AM</td>
                <td className="px-4 py-3">
                   <Link href="#" className="text-primary hover:underline hover:text-sky-600 transition-colors" prefetch={false}>
                    View Report
                  </Link>
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3">4</td>
                <td className="px-4 py-3">Emily Davis</td>
                <td className="px-4 py-3">2023-07-15</td>
                <td className="px-4 py-3">4:00 PM - 5:00 PM</td>
                <td className="px-4 py-3">
                   <Link href="#" className="text-primary hover:underline hover:text-sky-400 transition-colors" prefetch={false}>
                    View Report
                  </Link>
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">David Wilson</td>
                <td className="px-4 py-3">2023-08-01</td>
                <td className="px-4 py-3">11:00 AM - 12:00 PM</td>
                <td className="px-4 py-3">
                   <Link href="#" className="text-primary hover:underline hover:text-sky-600 transition-colors" prefetch={false}>
                    View Report
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}