import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function CardCom() {
  return (
    <div className="flex justify-center p-8 bg-sky-100">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6 bg-slate-50">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Reach out to us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              If you have a family member who has been diagnosed with Parkinson's or if you are a caregiver, please feel
              free to contact us
            </p>
            <a href="#" className="block mt-4 text-blue-600">
              info@lifesparktech.com
            </a>
          </CardContent>
        </Card>
        <Card className="p-6 bg-slate-50">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Contribute to the community</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              If you're an expert in neurology, movement disorders, physiotherapy, or anything related to Parkinson's,
              and would like to contribute your expertise, please reach out to us
            </p>
            <a href="#" className="block mt-4 text-blue-600">
              contribute@lifesparktech.com
            </a>
          </CardContent>
        </Card>
        <Card className="p-6 bg-slate-50">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Participate with us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We have an upcoming research study for a non-invasive mobility aid for people with Parkinson's disease.
              Please contact us to learn more or participate.
            </p>
            <a href="#" className="block mt-4 text-blue-600">
              trials@lifesparktech.com
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}