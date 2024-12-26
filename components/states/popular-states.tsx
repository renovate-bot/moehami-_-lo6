import Link from "next/link";
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';


const popularStates = [
  { name: "Florida", count: 156, image: "/images/states/fl3.webp" },
  { name: "Texas", count: 203, image: "/images/states/tx.webp" },
  { name: "California", count: 178, image: "/images/states/cal.webp" },
  { name: "New York", count: 145, image: "/images/states/ny.webp" },
];

export function PopularStates() {
  return (
    <section className="mt-16 p-4 ">
   
        <motion.h2
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl font-semibold mb-6"
      >
      Popular States
      </motion.h2>

      <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
               
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >

      
        {popularStates.map((state) => (
          <Link 
            key={state.name} 
            href={`/places/${state.name.toLowerCase().replace(/\s+/g, '-')}`}
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
      </motion.div>

    </section>
  );
}