// app/disclosure/page.tsx
import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disclosure - LobinStores",
    description:
      "Learn about Lobin Stores' transparency in affiliate links, sponsored content, advertisements, and product reviews. We prioritize honesty and trust in all our content.",
  };
export default function Disclosure() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-18 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Disclosure</h1>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Purpose of Disclosure</h2>
          <p className="text-gray-600">
            Transparency and trust are core to the mission of lobinstores.com. This Disclosure page
            provides information about our partnerships, and monetization methods to
            ensure you are fully informed while using our website.
          </p>
        </section>
  
        
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Sponsored Content</h2>
          <p className="text-gray-600">
            Occasionally, we may feature sponsored content, which means a brand or company has paid
            to have their product or service highlighted on lobinstores.com. Sponsored content will
            always be clearly marked to maintain transparency.
          </p>
          <p className="text-gray-600 mt-2">
            We strive to provide honest opinions, findings, and experiences in all content, regardless
            of sponsorships.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Advertisements</h2>
          <p className="text-gray-600">
            Our website may display advertisements through third-party ad networks. These
            advertisements are not endorsements or recommendations of the advertised products or
            services unless explicitly stated.
          </p>
          <p className="text-gray-600 mt-2">
            Third-party ad networks may use cookies and tracking technologies to serve targeted ads
            based on your browsing behavior. For more information, please see our Privacy Policy.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Product and Service Reviews</h2>
          <p className="text-gray-600">
            All bin stores and service reviews on lobinstores.com reflect our honest opinions. While some
            reviews may involve products provided by sponsors or affiliates, we maintain editorial
            independence to ensure unbiased reviews.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Earnings Disclaimer</h2>
          <p className="text-gray-600">
            lobinstores.com is a for-profit website. We generate income through affiliate links,
            advertisements, and sponsorships. Our goal is to provide accurate and helpful information
            while maintaining the financial sustainability of the site.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or concerns about this Disclosure, feel free to reach out to us:
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> <span className="select-none font-bold">privacy@lobinstores.com</span>
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> 789 Fifth Avenue, 10th Floor New York, NY 10022
          </p>
        </section>
      </div>
    );
  }
  