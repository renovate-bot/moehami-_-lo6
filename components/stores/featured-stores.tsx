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
          image="/images/states/fl.jpg"
          tags={["Wholesale", "Electronics"]}
        />
        <Store
          name="Treasure Hunt Bins"
          location="Houston, TX"
          rating={4.5}
          image="/images/states/tx.jpg"
          tags={["Retail", "Home Goods"]}
        />
        <Store
          name="The Bin Store"
          location="Miami, FL"
          rating={4.7}
          image="/images/states/fl2.jpg"
          tags={["Liquidation", "Fashion"]}
        />
      </div>
    </section>
  );
}