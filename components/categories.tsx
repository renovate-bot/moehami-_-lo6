import { ShoppingBag, Utensils, Laptop, Shirt, Home, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Retail", icon: ShoppingBag },
  { name: "Restaurants", icon: Utensils },
  { name: "Electronics", icon: Laptop },
  { name: "Fashion", icon: Shirt },
  { name: "Home & Garden", icon: Home },
  { name: "Gifts", icon: Gift },
];

export function Categories() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Browse Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.name}
              variant="outline"
              className="h-24 flex flex-col items-center justify-center gap-2"
            >
              <Icon className="h-6 w-6" />
              <span>{category.name}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}