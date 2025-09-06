"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

// Background rotator with subtle glow and decorative blobs (matches Home)
const BackgroundRotator: React.FC<{ intervalMs?: number }> = ({ intervalMs = 6000 }) => {
  const images = ['/gold-1.jpg', '/gold-bars.jpeg'];
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, images.length]);

  return (
    <div className="absolute inset-0 z-0">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-70 dark:opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent opacity-50 dark:opacity-50" />

      {/* Decorative soft blobs */}
      <div className="absolute -left-32 -top-20 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl transform rotate-12" aria-hidden />
      <div className="absolute -right-32 -bottom-24 w-80 h-80 rounded-full bg-amber-300/20 blur-3xl transform rotate-45" aria-hidden />
    </div>
  );
};

const faqs = [
  {
    q: "What is AGUDE3 and how does it work?",
    a: "AGUDE3 creates immutable digital certificates for gold items by anchoring metadata on a public blockchain and linking off-chain metadata for richer records. Users can verify provenance using an ID or QR code, providing a transparent and tamper-proof history of the gold.",
  },
  {
    q: "Is my personal data stored on-chain?",
    a: "No — only non-personal, cryptographic anchors and provenance metadata are stored on-chain. Sensitive or personal information, such as partner details or specific transaction amounts, is kept off-chain in secure, permissioned databases and shared only with authorized partners.",
  },
  {
    q: "Which networks do you support?",
    a: "We design our smart contracts to be portable and chain-agnostic. By default, our public services are deployed to testnets and a configurable mainnet target. For enterprise deployments, we offer private network options tailored to your needs, providing enhanced privacy and transaction speed.",
  },
  {
    q: "Can I integrate AGUDE3 with my existing inventory systems?",
    a: "Yes — we provide robust and well-documented REST APIs and TypeScript SDKs to integrate certificate issuance and verification with your existing inventory, ERP, and supply-chain systems. Our developer portal offers comprehensive guides to help you get started quickly.",
  },
  {
    q: "How do you ensure the physical gold matches the digital certificate?",
    a: "Physical and digital integrity is a critical aspect of our solution. We work with certified assayers and auditors at the point of origin who physically inspect and weigh the gold before its unique certificate is created. This initial 'minting' event is verified by multiple network participants to ensure accuracy.",
  },
  {
    q: "What makes your blockchain solution different from others?",
    a: "Unlike public, anonymous blockchains, AGUDE3 uses a purpose-built, permissioned network. This provides enterprise-grade scalability, predictable transaction costs, and ensures all network participants are known and trusted entities within the gold supply chain.",
  },
  {
    q: "What are the costs involved with using AGUDE3?",
    a: "Our pricing is structured on a per-certificate basis, with tiers available for high-volume partners. We also offer custom enterprise packages that include dedicated support, private network access, and full API integration. Contact our sales team for a detailed quote tailored to your business.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-transparent backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-2">
                <Link href="/" aria-label="GoldTrace home" className="flex items-center space-x-2 animate-in slide-in-from-left-4 duration-500">
                  <img src="/favicon.png" alt="GoldTrace Logo" className="h-8 w-8 rounded-full object-cover ring-2 ring-amber-500/50" />
                 <span className="text-2xl font-extrabold tracking-tight text-amber-600 dark:text-amber-500 font-serif">AGUDE3</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:block animate-in fade-in-0 duration-700 delay-200">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 px-3 py-2 text-sm font-medium transition-colors">About</Link>
                <Link href="/technology" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 px-3 py-2 text-sm font-medium transition-colors">Technology</Link>
                <Link href="/faq" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 px-3 py-2 text-sm font-medium transition-colors">FAQ</Link>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
                
                <button className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-600 transition-colors shadow-lg">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <BackgroundRotator />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Content container for readability */}
          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-amber-50 dark:bg-amber-800/20 mb-6">
              <QuestionMarkCircleIcon className="h-8 w-8 text-amber-600 dark:text-amber-300" />
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">Common questions and clear answers about AGUDE3, our technology, and how to get started.</p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-12 lg:py-20 bg-transparent dark:bg-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((f, i) => {
              const open = openIndex === i;
              return (
                <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden transition-colors duration-300">
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 bg-gray-50 dark:bg-gray-900 text-left transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span className="text-left text-lg text-gray-900 dark:text-white font-semibold">{f.q}</span>
                    <ChevronDownIcon className={`h-6 w-6 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`px-6 pt-0 pb-6 bg-white dark:bg-gray-950 transition-all duration-300 ease-in-out ${open ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                    <p className="text-gray-600 dark:text-gray-300 pt-4">{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-16 bg-amber-600 dark:bg-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still have a question?</h2>
          <p className="mt-2 text-amber-100 max-w-2xl mx-auto">
            Our team is here to help. Reach out to us directly for more detailed information or to request a technical consultation.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 shadow-lg transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-4">AGUDE3</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Blockchain-powered transparency for the global gold supply chain.</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Built with Scaffold-ETH 2 for enterprise-grade reliability.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><Link href="/verify" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Verify Gold</Link></li>
                <li><Link href="/trace" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Trace History</Link></li>
                <li><Link href="/add" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Add Records</Link></li>
                <li><Link href="/blockexplorer" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Block Explorer</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><Link href="/mining" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Mining</Link></li>
                <li><Link href="/refining" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Refining</Link></li>
                <li><Link href="/retail" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Retail</Link></li>
                <li><Link href="/investment" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Investment</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><Link href="/about" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-500 dark:text-gray-500">
            <p>&copy; 2025 AGUDE3. All rights reserved. Powered by blockchain technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}