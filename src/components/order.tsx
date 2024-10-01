import { Progress } from "@/components/ui/progress"

export function Delivery() {
  const order = {
    id: "OD-12345",
    date: "2023-06-15",
    customer: "John Doe",
    estimatedDelivery: "2023-06-20",
    items: [
      {
        name: "Product A",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        name: "Product B",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        name: "Product C",
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
    status: {
      orderConfirmation: 100,
      qualityInspection: 100,
      packaging: 100,
      pdi: 100,
      dispatch: 50,
    },
  }
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid gap-8">
        <div>
          <h1 className="text-2xl font-bold">Order Details</h1>
          <div className="mt-4 overflow-x-auto rounded-lg shadow-md">
            <table className="w-full table-auto bg-background  rounded-lg shadow-md">
              <thead>
                <tr className="bg-slate-100 text-muted-foreground  rounded-t-lg">
                  <th className="px-4 py-3 text-left">Order Date</th>
                  <th className="px-4 py-3 text-left">Order ID</th>
                  <th className="px-4 py-3 text-left">Customer</th>
                  <th className="px-4 py-3 text-left">Estimated Delivery</th>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">Image</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b last:border-b-0 hover:bg-sky-100/50 transition-colors">
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3">{order.id}</td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="px-4 py-3">{order.estimatedDelivery}</td>
                  <td className="px-4 py-3">
                    {order.items.map((item, index) => (
                      <div key={index}>{item.name}</div>
                    ))}
                  </td>
                  <td className="px-4 py-3">
                    {order.items.map((item, index) => (
                      <img
                        key={index}
                        src="/placeholder.svg"
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-md mt-3"
                      />
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Delivery Status</h2>
          <div className="mt-4 grid gap-4">
            <div className="grid grid-cols-5 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="aspect-square w-3 bg-blue-600 rounded-full" />
                <span>Order Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`aspect-square w-3 rounded-full ${
                    order.status.qualityInspection === 100 ? "bg-blue-600" : "bg-muted"
                  }`}
                />
                <span>In Production</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`aspect-square w-3 rounded-full ${
                    order.status.packaging === 100 ? "bg-blue-600" : "bg-muted"
                  }`}
                />
                <span>Quality Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`aspect-square w-3 rounded-full ${order.status.pdi === 100 ? "bg-blue-600" : "bg-muted"}`}
                />
                <span>Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`aspect-square w-3 rounded-full ${order.status.pdi === 100 ? "bg-blue-600" : "bg-muted"}`}
                />
                <span>Delivered</span>
              </div>
            </div>
            <Progress
              value={
                (order.status.orderConfirmation +
                  order.status.qualityInspection +
                  order.status.packaging +
                  order.status.pdi +
                  order.status.dispatch) /
                5
              }
              className="w-full bg-sky-100 rounded-full h-4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
