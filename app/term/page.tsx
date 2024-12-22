// app/terms/page.tsx
import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms - Lo binStores",
    description:
      "Review the terms and conditions governing your use of Bin Stores' website and services. Learn about your rights and responsibilities as a user.",
  };
export default function Terms() {
    return (
     
      <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <p className="mb-4">
        Welcome to Lo Bin Stores! These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website or services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
      </p>

      <h2 className="text-2xl font-bold mt-8">1. Use of Services</h2>

      <p className="mb-4">
        You may use our services for lawful purposes only. You are responsible for all activity that occurs under your account. You agree not to:
      </p>

      <ul className="list-disc ml-6">
        <li>Use our services for any illegal or unauthorized purpose.</li>
        <li>Interfere with or disrupt our services.</li>
        <li>Violate any applicable laws or regulations.</li>
        <li>Use any automated means to access our services.</li>
        <li>Use our services to transmit any viruses or malware.</li>
      </ul>

      {/* Add more sections and clauses as needed */}

      <h2 className="text-2xl font-bold mt-8">2. Intellectual Property</h2>

      <p className="mb-4">
        All content on our website, including but not limited to text, images, and logos, is protected by copyright, trademark, and other intellectual property laws. You may not use any of our content without our prior written consent.
      </p>

      {/* Add more sections and clauses as needed */}

      <h2 className="text-2xl font-bold mt-8">3. Disclaimer of Warranties</h2>

      <p className="mb-4">
        Our services are provided "as is" and "as available" without any warranties, express or implied. We disclaim all warranties, including but not limited to the implied warranties of merchantability and fitness for a particular purpose.
      </p>

      {/* Add more sections and clauses as needed */}

      <h2 className="text-2xl font-bold mt-8">4. Limitation of Liability</h2>

      <p className="mb-4">
        In no event shall we be liable for any damages whatsoever, including but not limited to direct, indirect, incidental, consequential, or punitive damages, arising out of or in connection with your use of our services.
      </p>

      {/* Add more sections and clauses as needed */}

      <h2 className="text-2xl font-bold mt-8">5. Changes to Terms</h2>

      <p className="mb-4">
        We may update these Terms from time to time. We will notify you of any material changes to these Terms by posting the updated Terms on our website. You are advised to review these Terms periodically for any changes.
      </p>

      <h2 className="text-2xl font-bold mt-8">6. Contact Us</h2>

      <p>
        If you have any questions about these Terms, please <Link href="/contact-us">contact us </Link>
      </p>
    </div>
    );
  }
  