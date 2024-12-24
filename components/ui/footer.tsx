import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  const links = [
    { href: "/", label: "Bin Stores Near Me" },
    { href: "/blog", label: "Blog" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/disclosure", label: "Disclosure" },
    { href: "/term", label: "Terms" },
  ];

  return (
    <footer className="bg-orange-500 text-white p-6">
      <div className="container mx-auto text-center">
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
          {links.map((link) => (
            <li
              key={link.href}
              className="rounded-lg hover:bg-orange-900 transition duration-300"
            >
              <Link
                href={link.href}
                className="px-3 py-2 text-sm md:text-base font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>


        <p className="mt-4 text-sm text-black font-bold">
          &copy; {new Date().getFullYear()} Lo Bin Stores. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
