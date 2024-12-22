import { Suspense } from 'react'
import { Trophy, TrendingUp, MapPin } from 'lucide-react'
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "About Us | LobinStores",
    description:
      "Learn about America\'s leading bin store marketplace, connecting treasure hunters with amazing deals since years.",
  };
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-blue-500 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-75" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          
          <h1 className="text-4xl font-bold tracking-tight text-center mb-4">
            America's Leading Bin Store Marketplace
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Connecting treasure hunters with amazing deals since 2020
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing retail by bringing the excitement of bin store shopping to everyone. 
            Our mission is to make treasure hunting accessible, affordable, and fun for all.
          </p>
        </div>
      </section>

     

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Trophy className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">We partner with top retailers to bring you the best merchandise at incredible prices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Daily Updates</h3>
            <p className="text-gray-600">New items arrive daily, ensuring fresh and exciting shopping experiences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <MapPin className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nationwide Presence</h3>
            <p className="text-gray-600">With locations across the USA, there's always a bin store near you.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Treasure Hunting?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers who discover amazing deals every day.</p>
          <a 
            href="/search" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Find a Store Near You
          </a>
        </div>
      </section>
    </main>
  )
}