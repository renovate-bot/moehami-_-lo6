"use client";

import { useParams } from "next/navigation";
import { Store } from "@/components/stores/store-card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function StatePage() {
  const { state } = useParams();
  const stateFormatted = (state as string)
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Map
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-2">
            <MapPin className="h-8 w-8" />
            Bin Stores in {stateFormatted}
          </h1>
          <p className="text-muted-foreground mt-2">
            Find the best bin stores and liquidation centers in {stateFormatted}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder stores - will be replaced with actual state data */}
        <Store
          name="Sample Bin Store"
          location={`${stateFormatted}`}
          rating={4.5}
          image="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3"
          tags={["Wholesale", "Electronics"]}
        />
      </div>
    </div>
  );
}