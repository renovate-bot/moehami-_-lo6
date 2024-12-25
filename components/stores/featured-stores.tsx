import { Store } from "@/components/stores/store-card";

export function FeaturedStores() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Featured Bin Stores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Store
          name="Discount Bins Plus"
          location="Orlando, FL"
          rating={4.8}
          image="/images/states/fl.webp"
          tags={["Wholesale", "Electronics"]}
          address="123 Discount Rd, Orlando, FL"
          phone="(555) 123-4567"
          reviewCount={120}
          status="Open"
        />
        <Store
          name="Treasure Hunt Bins"
          location="Houston, TX"
          rating={4.5}
          image="/images/states/tx.webp"
          tags={["Retail", "Home Goods"]}
          address="456 Treasure Ln, Houston, TX"
          phone="(555) 234-5678"
          reviewCount={80}
          status="Open"
        />
        <Store
          name="The Bin Store"
          location="Miami, FL"
          rating={4.7}
          image="/images/states/fl2.webp"
          tags={["Liquidation", "Fashion"]}
          address="789 Bin Ave, Miami, FL"
          phone="(555) 345-6789"
          reviewCount={150}
          status="Closed"
        />
      </div>
    </section>
  );
}
