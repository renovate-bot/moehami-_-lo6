"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export function SearchBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 15 }}
      transition={{ duration: 0.5 }}
      className="relative max-w-2xl mx-auto"
    >
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <Input
        type="search"
        placeholder="Search stores, categories, or locations..."
        className="pl-10 py-6"
      />
    </motion.div>
  );
}