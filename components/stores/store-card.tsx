"use client";

import { Star, MapPin, Phone, Map, Globe, Facebook, Instagram, Link as LinkIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

interface StoreProps {
  name: string;
  location: string;
  rating: number;
  image: string;
  tags: string[];
  address: string;
  phone: string;
  reviewCount: number;
  status: string;
  website?: string;
  facebook?: string;
  instagram?: string;
  yelp?: string;
}

export function Store({
  name,
  location,
  rating,
  image,
  tags,
  address,
  phone,
  reviewCount,
  status,
  website,
  facebook,
  instagram,
  yelp
}: StoreProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden">
        <div className="relative h-48">
          <Image
            src={image}
            alt={name}
            fill
            priority 
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="p-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">
                {website ? (
                  <a href={website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {name}
                  </a>
                ) : (
                  name
                )}
              </h3>
              <p className="text-sm text-muted-foreground flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {location}
              </p>
            </div>
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.1 }}
            >
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <p className="text-sm text-muted-foreground flex items-center">
            <Map className="h-4 w-4 mr-1" />
            {address}
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            <Phone className="h-4 w-4 mr-1" />
            {phone}
          </p>
          <p className="text-sm text-muted-foreground">
            Reviews: {reviewCount}
          </p>
          <p className="text-sm text-muted-foreground">
            Status: {status}
          </p>
          <div className="flex gap-2 mt-2">
              {tags?.map((tag, index) => (
<motion.span
                key={tag}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <div className="flex gap-2 mt-4">
            {facebook && (
              <a href={facebook} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-700 hover:underline">
                <Facebook className="h-5 w-5 mr-1" />
                Facebook
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-500 hover:underline">
                <Instagram className="h-5 w-5 mr-1" />
                Instagram
              </a>
            )}
            {yelp && (
              <a href={yelp} target="_blank" rel="noopener noreferrer" className="flex items-center text-red-700 hover:underline">
                <LinkIcon className="h-5 w-5 mr-1" />
                Yelp
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
