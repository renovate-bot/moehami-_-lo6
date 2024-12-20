"use client";

import React, { useEffect, useState } from 'react';

import { Store } from "@/components/stores/store-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface StoreData {
  business_id: string;
  google_id: string;
  place_id: string;
  google_mid: string;
  phone_number: string;
  name: string;
  latitude: number;
  longitude: number;
  full_address: string;
  review_count: number;
  rating: number;
  timezone: string;
  opening_status: string;
  working_hours: Record<string, string[]>;
  website: string | null;
  verified: boolean;
  place_link: string;
  cid: string;
  reviews_link: string;
  owner_id: string;
  owner_link: string;
  owner_name: string;
  booking_link: string | null;
  reservations_link: string | null;
  business_status: string;
  type: string;
  subtypes: string[];
  photos_sample: {
    photo_id: string;
    photo_url: string;
    photo_url_large: string;
    video_thumbnail_url: string | null;
    latitude: number;
    longitude: number;
    type: string;
    photo_datetime_utc: string;
    photo_timestamp: number;
  }[];
  reviews_per_rating: any;
  photo_count: number;
  about: {
    summary: string | null;
    details: {
      [key: string]: any;
    };
  };
  address: string;
  order_link: string | null;
  price_level: string | null;
  district: string | null;
  street_address: string;
  city: string;
  zipcode: string;
  state: string;
  country: string;
  emails_and_contacts: {
    emails: string[];
    phone_numbers: string[];
    facebook: string | null;
    instagram: string | null;
    yelp: string | null;
  };
  no: number;
}

export default function StateClientComponent({ state }: { state: string }) {
  const stateFormatted = state
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const [storeData, setStoreData] = useState<StoreData[]>([]);

  useEffect(() => {
    const importData = async () => {
      try {
        const data = await import(`../data/${stateFormatted}.json`);
        console.log("JSON Data:", data.default?.data); // Log JSON data
        if (data.default?.data) {
          setStoreData(data.default.data);
        }
      } catch (error) {
        console.error(`Error loading JSON data for ${stateFormatted}:`, error);
      }
    };

    importData();
  }, [stateFormatted]);


  return (
    
    <div className="container mx-auto px-4 py-20">
        
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-2">
            Bin Stores in {stateFormatted}
          </h1>
          <p className="text-muted-foreground mt-2">
            Find the best bin stores and liquidation centers in {stateFormatted}
          </p>
        </div>
        <div className="prose text-lg font-semibold prose-sm max-w-none p-10">
      <p>
        Looking for bin stores in <span className="font-bold">{stateFormatted}</span> or Amazon bin stores in <span className="font-bold">{stateFormatted}</span>? Look no further!
      </p>
      <p>
        We've created a list of every bin store we've been able to find in {stateFormatted} state.
      </p>
      <p>
        As costs are starting to rise, some of the locations have started converting to a liquidation store; nevertheless, the popularity of the bin stores has become very high across the country.
      </p>
      <p>
        Our comprehensive guide includes operating hours and current pricing for stores whose information was publicly available.
      </p>
      <p>
        We've also included links to their social media pages, making it easy to stay updated on new inventory and special deals.
      </p>
      <blockquote className="blockquote bg-gray-100 rounded-lg p-4 italic text-gray-700">
        Know of a bin store that's not on our list below?
      </blockquote>
      <p>
        Let fellow treasure hunters know about it! Just drop us a message, and we'll add it to our growing directory.
      </p>
   
    </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storeData.length > 0 ? (
          storeData.map((store, index) => (
            <Store
              key={index}
              name={store.name}
              location={store.city}
              rating={store.rating}
              image={store.photos_sample[0]?.photo_url_large || "/images/states/notfound.png"}
              tags={store.subtypes}
              address={store.address}
              phone={store.phone_number}
              reviewCount={store.review_count}
              status={store.opening_status}
              website={store.website || undefined}
              facebook={store.emails_and_contacts.facebook || undefined}
              instagram={store.emails_and_contacts.instagram || undefined}
              yelp={store.emails_and_contacts.yelp || undefined}
            />
          ))
        ) : (
          <Store
            name="Sample Bin Store"
            location={stateFormatted}
            rating={4.5}
            image="/images/states/notfound.png"
            tags={["Wholesale", "Electronics"]}
            address="Sample Address"
            phone="000-000-0000"
            reviewCount={0}
            status="Unknown"
            website={undefined}
            facebook={undefined}
            instagram={undefined}
            yelp={undefined}
          />
        )}
      </div>
    </div>
  );
}

