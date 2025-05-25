// app/contact-us/page.tsx

import Link from 'next/link';
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
    title: "Contact Us - LobinStores",
    description:
      "Get in touch with our team for questions, feedback, or support regarding bin store locations and deals.",
  };

  import ContactForm from "@/components/ui/ContactForm";

export default function Page() {
  return <ContactForm />;
}
