"use client";

import { Hero } from "@/components/hero";
import { SearchBar } from "@/components/search-bar";
import { USAMap } from "@/components/map/usa-map";
import { FeaturedStores } from "@/components/stores/featured-stores";
import { PopularStates } from "@/components/states/popular-states";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <USAMap />
<PopularStates />
        <FeaturedStores />
      </div>
    </main>
  );
}