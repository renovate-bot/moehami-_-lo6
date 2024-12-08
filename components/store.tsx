import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface StoreProps {
  name: string;
  category: string;
  rating: number;
  image: string;
  address: string;
  phone: string;
  reviewCount: number;
  status: string;
}

export function Store({
  name,
  category,
  rating,
  image,
  address,
  phone,
  reviewCount,
  status
}: StoreProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
            <p className="text-sm text-muted-foreground">Address: {address}</p>
            <p className="text-sm text-muted-foreground">Phone: {phone}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground">Review Count: {reviewCount}</p>
        <p className="text-sm text-muted-foreground">Status: {status}</p>
        <div className="flex gap-2 mt-2">
          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            Open
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            Featured
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
