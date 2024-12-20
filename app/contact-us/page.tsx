// app/contact-us/page.tsx

import Link from 'next/link';
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
    title: "Contact Us - LobinStores",
    description:
      "Have a question or need assistance? Contact LobinStores customer support. We're here to help!",
  };

  import ContactForm from "@/components/ui/ContactForm";

export default function Page() {
  return <ContactForm />;
}