"use client";

import React, { useEffect, useState } from 'react';
import matter from "gray-matter";
import { Store } from "@/components/stores/store-card";
import { Button } from "@/components/ui/button";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SearchableStoreList from '@/components/SearchableStoreList';
import Head from 'next/head';
import { Metadata } from 'next';



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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [customText, setCustomText] = useState<string>(
    `Explore great deals at bin stores across ${stateFormatted}.`
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch store data
        const storeResponse = await fetch(`/data/${state}.json`);
        if (!storeResponse.ok) {
          throw new Error(`Failed to load data: ${storeResponse.statusText}`);
        }
        const storeData = await storeResponse.json();
        if (storeData?.data) {
          setStoreData(storeData.data);
        }

        // Try to fetch custom state text separately - failures here won't affect the main flow
        const fetchStateText = async () => {
          try {
            const stateTextResponse = await fetch(`/content/stateTexts/${state}.md`);
            if (stateTextResponse.ok) {
              const stateText = await stateTextResponse.text();
              const { content } = matter(stateText);
              if (content) {
                setCustomText(content.trim());
              }
            } else {
              // Just use the default text, no need to log an error for expected 404s
              console.info(`No custom text found for ${state}, using default.`);
            }
          } catch (textError) {
            // Silently handle errors for state text - just use the default
            console.info(`Using default text for ${state} due to error:`, textError);
            // Default text is already set in useState initialization
          }
        };

        // Execute but don't await - we don't want this to block or cause errors
        fetchStateText().catch(() => {
          // Catch and suppress any uncaught promise rejections
          // The default text will remain
        });
        
      } catch (err) {
        console.error('Error loading store data:', err);
        setError('Failed to load store data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [state, stateFormatted]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 flex justify-center items-center">
        <div className="text-center">
          <p className="text-lg">Loading stores in {stateFormatted}...</p>
          <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-16 h-16 border-b-4 border-orange-500 border-solid rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <p className="text-red-500">{error}</p>
          <Button className="mt-4" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-2">
          Bin Stores in {stateFormatted}
        </h1>
        <p className="text-muted-foreground mt-2 p-3">
          Find the best bin stores and liquidation centers in {stateFormatted}
        </p>
        <Link href="#bstores">
          <Button className="w-full md:w-2/6">Jump To Stores</Button>
        </Link>
        <div className="p-3"></div>
      </div>

      <div className="prose text-lg font-semibold prose-sm max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{customText}</ReactMarkdown>
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
          - Let fellow treasure hunters know about it! Just drop us a message, and we'll add it to our growing directory.
        </p>
        {/* Search */}
        <SearchableStoreList initialStores={storeData} />
      </div>

      <div id="bstores" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storeData.length > 0 ? (
          storeData.map((store, index) => (
            <Store
              key={index}
              name={store.name}
              location={store.city}
              rating={store.rating}
              image={store.photos_sample &&
                store.photos_sample.length > 0 &&
                store.photos_sample[0].photo_url_large?.trim() // Check if string is non-empty
                ? store.photos_sample[0].photo_url_large
                : "/images/states/notfound.webp"}
              tags={store.subtypes}
              address={store.address}
              phone={store.phone_number}
              reviewCount={store.review_count}
              status={store.opening_status}
              website={store.website || undefined}
              facebook={store.emails_and_contacts.facebook || undefined}
              instagram={store.emails_and_contacts.instagram || undefined}
              yelp={store.emails_and_contacts.yelp || undefined} />
          ))
        ) : (
          <Store
            name="Sample Bin Store"
            location={stateFormatted}
            rating={4.5}
            image="/images/states/notfound.webp"
            tags={["Wholesale", "Electronics"]}
            address="Sample Address"
            phone="000-000-0000"
            reviewCount={0}
            status="Unknown"
            website={undefined}
            facebook={undefined}
            instagram={undefined}
            yelp={undefined} />
        )}
      </div>
    </div>
  );
}