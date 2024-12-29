import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Store } from "@/components/stores/store-card";


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

interface SearchableStoreListProps {
  initialStores: StoreData[];
}

export default function SearchableStoreList({ initialStores }: SearchableStoreListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStores, setFilteredStores] = useState(initialStores);

  useEffect(() => {
    const filtered = initialStores.filter(store =>
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStores(filtered);
  }, [searchTerm, initialStores]);

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search stores by name, city or address..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStores.length > 0 ? (
          filteredStores.map((store, index) => (
            <Store
              key={index}
              name={store.name}
              location={store.city}
              rating={store.rating}
              image={
                store.photos_sample &&
                store.photos_sample.length > 0 &&
                store.photos_sample[0].photo_url_large?.trim() // Check if string is non-empty
                  ? store.photos_sample[0].photo_url_large
                  : "/images/states/notfound.webp"
              }
              
              
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
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">No stores found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}