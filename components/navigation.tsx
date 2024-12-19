"use client";

import Link from "next/link";
import { Store, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="border-b bg-opacity-25 backdrop-blur-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Store className="h-6 w-6" />
            <span className="text-xl font-bold">Lo Bin Stores</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/blog">
              <Button variant="ghost" className="flex items-center bg-white bg-opacity-60">
                <BookOpen className="h-5 w-5 mr-2" />
                Blog
              </Button>
            </Link>

            <Link href="/about-us">
              <Button variant="ghost" className="flex items-center bg-white bg-opacity-60">
                <BookOpen className="h-5 w-5 mr-2" />
                About
              </Button>
            </Link>

            <Button>Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}