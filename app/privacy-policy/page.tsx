// app/privacy-policy/page.tsx
import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - LobinStores",
    description:
      "Learn about Lobinstores commitment to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.",
  };
export default function PrivacyPolicy() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600">
            We collect information to enhance your experience on our website. This includes:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and other
              details you provide when contacting us or subscribing to our services.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Browser type, device information, IP
              address, and browsing patterns collected automatically through cookies and similar
              technologies.
            </li>
            <li>
              <strong>Third-Party Data:</strong> Information received from analytics services or
              advertising networks.
            </li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>To provide, operate, and maintain our website.</li>
            <li>To personalize your experience and improve our services.</li>
            <li>To communicate with you, including sending newsletters or updates.</li>
            <li>To analyze usage trends and monitor website performance.</li>
            <li>To detect and prevent fraudulent or illegal activities.</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Sharing Your Information</h2>
          <p className="text-gray-600">
            We respect your privacy and only share your data under specific circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>
              <strong>Service Providers:</strong> We may share information with third-party vendors
              who help us operate our website and services.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may disclose information if required by law or to
              protect our rights.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of
              assets, your information may be transferred.
            </li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="text-gray-600">
            Our website uses cookies to improve your experience:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to function properly.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us understand how visitors use the site.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Used to display relevant advertisements.
            </li>
          </ul>
          <p className="text-gray-600 mt-2">
            You can control or disable cookies through your browser settings.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Data Security</h2>
          <p className="text-gray-600">
            We implement robust security measures to protect your data, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>Encryption of sensitive information.</li>
            <li>Regular security audits and updates.</li>
            <li>Restricted access to personal data.</li>
          </ul>
          <p className="text-gray-600 mt-2">
            While we strive to safeguard your information, no method of transmission over the
            internet is 100% secure.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Your Rights</h2>
          <p className="text-gray-600">
            You have the following rights regarding your personal data:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>
              <strong>Access:</strong> Request a copy of your personal information.
            </li>
            <li>
              <strong>Correction:</strong> Update or correct your data.
            </li>
            <li>
              <strong>Deletion:</strong> Request the deletion of your data.
            </li>
            <li>
              <strong>Objection:</strong> Opt-out of certain data uses, such as direct marketing.
            </li>
          </ul>
          <p className="text-gray-600 mt-2">
            To exercise these rights, contact us at <span className="select-none font-bold">privacy@lobinstores.com</span>
            .
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions, concerns, or feedback regarding this Privacy Policy, please 
            <Link href="/contact-us"  target="_blank" className="text-blue-500 p-1 font-bold hover:underline">
       Contact Us
      </Link>
          </p>
          
          <p className="text-gray-600">
            <strong>Address:</strong>789 Fifth Avenue, 10th Floor New York, NY 10022
          </p>
        </section>
        <p className="text-sm text-gray-500 mt-8">Last updated: {new Date().toLocaleDateString()}</p>

      </div>
    );
  }
  