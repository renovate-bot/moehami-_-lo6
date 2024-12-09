import Link from "next/link";
import { Card } from "@/components/ui/card";

const popularStates = [
  { name: "Florida", count: 156, image: "/images/states/fl3.jpg" },
  { name: "Texas", count: 203, image: "/images/states/tx2.jpg" },
  { name: "California", count: 178, image: "/images/states/cal.jpg" },
  { name: "New York", count: 145, image: "/images/states/ny.jpg" },
  { name: "Iowa", count: 138, image: "/images/states/ny.jpg" },
];

export function PopularStates() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Popular States</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {popularStates.map((state) => (
          <Link 
            key={state.name} 
            href={`/places/${state.name.toLowerCase()}`}
            className="group"
          >
            <Card className="relative overflow-hidden h-40">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${state.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              </div>
              <div className="relative h-full p-4 flex flex-col justify-end text-white">
                <h3 className="text-lg font-semibold">{state.name}</h3>
                <p className="text-sm opacity-90">{state.count} Stores</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}