"use client";

import { useParams } from "next/navigation";
import { Store } from "@/components/stores/store-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StateClientComponent({ state }: { state: string }) {
  const stateFormatted = state
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
            Bin Stores in {stateFormatted}
          </h1>
          <p className="text-muted-foreground mt-2">
            Find the best bin stores and liquidation centers in {stateFormatted}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Store
          name="Sample Bin Store"
          location={stateFormatted}
          rating={4.5}
          image={`/images/states/${stateFormatted}.jpg`}
          tags={["Wholesale", "Electronics"]}
        />
      </div>
    </div>
  );
}
