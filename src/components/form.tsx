import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Form() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-sky-100">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white rounded-lg p-8 w-full max-w-4xl shadow-lg">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="fullname">
                Name of primary user
              </Label>
              <Input className="border-gray-200 focus:border-gray-600 focus:ring-gray-200" id="fullname" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="age">
                Age of primary user
              </Label>
              <Input
                className="border-gray-200 focus:border-gray-600 focus:ring-gray-200"
                id="age"
                type="number"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="age">
                Order no
              </Label>
              <Input
                className="border-gray-200 focus:border-gray-600 focus:ring-gray-200"
                id="age"
                type="number"
                required
              />
            </div>
            <div className="flex flex-col bg-white space-y-2">
              <Label className="text-gray-800" htmlFor="gender">
                Gender
              </Label>
              <Select id="gender" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="buyer-not-primary">
                If buyer is not primary caregiver
              </Label>
              <Checkbox id="buyer-not-primary" />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="alternate-contact">
                Alternate contact (buyer)
              </Label>
              <Input
                className="border-gray-200 focus:border-gray-600 focus:ring-gray-200"
                id="alternate-contact"
                required
              />

<div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="thigh-measurement">
                Thigh Measurement (in cm)
              </Label>
              <Input
                className="border-gray-200 focus:border-gray-600 focus:ring-gray-200"
                id="thigh-measurement"
                type="number"
                required
              />
            </div>
          

            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="address-line-1">
                Address Line 1
              </Label>
              <Input
                className="border-gray-200 focus:border-gray-600 focus:ring-gray-200"
                id="address-line-1"
                required
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="contact">
                Contact for primary user
              </Label>
              <Input
                className="border-gray-200 focus:border-gray-600 focus:ring-gray-200"
                id="contact"
                type="tel"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="primary-caregiver-contact">
                Primary caregiver contact
              </Label>
              <Input
                className="border-gray-200 focus:border-gray-600 focus:ring-gray-200"
                id="primary-caregiver-contact"
                type="tel"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="city">
                City
              </Label>
              <Input className="border-gray-200 focus:border-gray-600 focus:ring-gray-200" id="city" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="country">
                Country
              </Label>
              <Input className="border-gray-200 focus:border-gray-600 focus:ring-gray-200" id="country" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="pin-code">
                Pin code
              </Label>
              <Input className="border-gray-200 focus:border-gray-600 focus:ring-gray-200" id="pin-code" required />
            </div>
            
          <Button className="w-full bg-green-800 text-white" type="submit">
            Submit
          </Button>
          {/* <div className="mt-4 text-center text-sm">
            <Link className="underline text-green-800" href="#" prefetch={false}>
              Sumbit
            </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
