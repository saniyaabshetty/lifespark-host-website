import { Delivery } from "@/components/order";
import Link from "next/link";


export default function Deliverytrack() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-100">
          <div className="w-full max-w-full">
        <Delivery/>
      </div>
    </div>
  );
}
