"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { USAStatesMap } from "@/components/map/usa-states-map";


export function USAMap() {
  const [activeState, setActiveState] = useState<string | null>(null);

  return (

    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-gradient-to-br from-background to-muted rounded-lg p-4 shadow-lg">
      <span className="text-lg  justify-center">Find Bin Stores Near You</span>
      <USAStatesMap
        onStateHover={setActiveState}
        className="w-full h-full md:w-5/6 "
      />

    

    <AnimatePresence>
       {activeState && (
       
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bg-blue-200 top-0 md:top-20 md:right-17 right-10 bg-card p-4 rounded-lg shadow-lg border"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-semibold text-lg"
            >
              {activeState}
            </motion.h3>
            <Link 
              href={`/places/${activeState.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-1"
            >
              View Bin Stores
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: 3 }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  duration: 0.6 
                }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
    

        )}
      </AnimatePresence>
    </div>
  );
}