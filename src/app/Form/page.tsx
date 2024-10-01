
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Form } from "@/components/form";

export default function Formcomp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-100">
      <h1 className="mb-6 text-2xl font-bold">Post Purchase Form</h1>
      <div className="w-full max-w-full">
        <Form />
      </div>
    </div>
  );
}