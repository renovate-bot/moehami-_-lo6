"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { statesData } from "./states-data";


interface USAStatesMapProps {
  className?: string;
  onStateHover: (state: string | null) => void;
}

export function USAStatesMap({ className, onStateHover }: USAStatesMapProps) {
  const [activeState, setActiveState] = useState<string | null>(null);

  const handleStateHover = (stateName: string | null) => {
    setActiveState(stateName);
    onStateHover(stateName);
  };

  return (
    
<svg
      viewBox="0 0 959 593"
      className={cn("w-full h-full md:w-5/6", className)}
      role="img"
      aria-label="USA States Map"
    >
      <g>
        {statesData.map((state) => (

          <motion.path
            key={state.name}
            d={state.path}
            initial={{ scale: 1 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            animate={{
              fill: activeState === state.name 
                ? "orange" 
                : "hsl(var(--muted))",
              opacity: activeState && activeState !== state.name ? 0.5 : 1
            }}
            stroke="black"
            strokeWidth="2"
            className="cursor-pointer"
            onMouseEnter={() => handleStateHover(state.name)}
            onMouseLeave={() => handleStateHover(state.name)}
            role="button"
            aria-label={state.name}
            transition={{
              fill: { duration: 0.4 },
              opacity: { duration: 0.6 }
            }}
          />

          
        ))}
      </g>
    </svg>

  );
}