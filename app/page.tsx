"use client";

import { Hero } from "@/components/hero";
import { SearchBar } from "@/components/search-bar";
import { USAMap } from "@/components/map/usa-map";
import { FeaturedStores } from "@/components/stores/featured-stores";
import { PopularStates } from "@/components/states/popular-states";
import { useEffect } from "react";

const HomePage = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bin Stores Directory",
    "description": "Find the best bin stores near you with our directory. Get updates, store locations, and deals.",
    "url": "https://lobinstores.com/",
    "publisher": {
      "@type": "Organization",
      "name": "Lo bin Stores",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lobinstores.com/images/logo.png",
        "width": 200,
        "height": 50,
      },
    },
    "mainEntity": {
      "@type": "WebSite",
      "name": "Bin Stores Directory",
      "url": "https://lobinstores.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://lobinstores.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLdData);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);


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