"use client";
import { useRouter } from "next/navigation";

import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import Link from 'next/link';

import { motion } from "framer-motion";
import React, { useState } from 'react';


export function Hero() {
const router = useRouter();
// List of US states
const states = [
  { name: "Alabama", value: "alabama" },
  { name: "Alaska", value: "alaska" },
  { name: "Arizona", value: "arizona" },
  { name: "Arkansas", value: "arkansas" },
  { name: "California", value: "california" },
  { name: "Colorado", value: "colorado" },
  { name: "Connecticut", value: "connecticut" },
  { name: "Delaware", value: "delaware" },
  { name: "Florida", value: "florida" },
  { name: "Georgia", value: "georgia" },
  { name: "Hawaii", value: "hawaii" },
  { name: "Idaho", value: "idaho" },
  { name: "Illinois", value: "illinois" },
  { name: "Indiana", value: "indiana" },
  { name: "Iowa", value: "iowa" },
  { name: "Kansas", value: "kansas" },
  { name: "Kentucky", value: "kentucky" },
  { name: "Louisiana", value: "louisiana" },
  { name: "Maine", value: "maine" },
  { name: "Maryland", value: "maryland" },
  { name: "Massachusetts", value: "massachusetts" },
  { name: "Michigan", value: "michigan" },
  { name: "Minnesota", value: "minnesota" },
  { name: "Mississippi", value: "mississippi" },
  { name: "Missouri", value: "missouri" },
  { name: "Montana", value: "montana" },
  { name: "Nebraska", value: "nebraska" },
  { name: "Nevada", value: "nevada" },
  { name: "New Hampshire", value: "new-hampshire" },
  { name: "New Jersey", value: "new-jersey" },
  { name: "New Mexico", value: "new-mexico" },
  { name: "New York", value: "new-york" },
  { name: "North Carolina", value: "north-carolina" },
  { name: "North Dakota", value: "north-dakota" },
  { name: "Ohio", value: "ohio" },
  { name: "Oklahoma", value: "oklahoma" },
  { name: "Oregon", value: "oregon" },
  { name: "Pennsylvania", value: "pennsylvania" },
  { name: "Rhode Island", value: "rhode-island" },
  { name: "South Carolina", value: "south-carolina" },
  { name: "South Dakota", value: "south-dakota" },
  { name: "Tennessee", value: "tennessee" },
  { name: "Texas", value: "texas" },
  { name: "Utah", value: "utah" },
  { name: "Vermont", value: "vermont" },
  { name: "Virginia", value: "virginia" },
  { name: "Washington", value: "washington" },
  { name: "West Virginia", value: "west-virginia" },
  { name: "Wisconsin", value: "wisconsin" },
  { name: "Wyoming", value: "wyoming" },
];

  return (
    
    <div className="relative overflow-hidden bg-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-24"
      >
        <div className="max-w-3xl">
          <motion.h1 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            initial={false} // Skip animation on initial load

            className="text-5xl font-bold mb-6"
          >
            Find Bin Stores Near You
          </motion.h1>
          <motion.p 
            initial={false} // Skip animation on initial load

            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
            className="text-xl mb-8 opacity-90"
          >
            Discover the best bin stores across the United States. Save big on retail products
            with our comprehensive directory of discount bin stores.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4"
          >
            
            
        <Popover>
        {/* Trigger Button */}
        <PopoverTrigger asChild>
        <Button size="lg" variant="outline" className="bg-transparent border-black shadow-md hover:shadow-lg hover:border-golden text-black hover:bg-white/10">
              <MapPin className="mr-2 h-5 w-5" /> Browse by State
            </Button>
        </PopoverTrigger>

        {/* Popover Content */}
        <PopoverContent className="bg-transparent border-golden text-black">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Select a State:</h3>
            <Select
              onValueChange={(value) => {
                router.push(`/places/${value}`);
              }}
            >
<SelectTrigger className="w-full backdrop-blur-md bg-transparent" >
                <span>Select a State</span>
              </SelectTrigger>
              <SelectContent>

                {states.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </PopoverContent>
      </Popover>
    
          </motion.div>
        </div>
      </motion.div>
    </div>



  );
}