"use client";

import React from "react";
import Link from "next/link";
import { BoltIcon, ServerStackIcon, ShieldCheckIcon, CubeTransparentIcon, CodeBracketIcon, ArrowsRightLeftIcon } from "@heroicons/react/24/outline";

const BackgroundRotator: React.FC<{ intervalMs?: number }> = ({ intervalMs = 6000 }) => {
  const images = ["/gold-1.jpg", "/gold-bars.jpeg"];
  const [index, setIndex] = React.useState(0);

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
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-black/55" />
    </div>
  );
};

export default function TechnologyPage() {
  

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
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 px-3 py-2 text-sm font-medium transition-colors">
                  About
                </Link>
                <Link href="/technology" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 px-3 py-2 text-sm font-medium transition-colors">
                  Technology
                </Link>
                <Link href="/faq" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 px-3 py-2 text-sm font-medium transition-colors">
                  FAQ
                </Link>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </Link>
                
                <button className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-600 transition-colors shadow-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative overflow-hidden py-24">
        <BackgroundRotator />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-gray-200 dark:border-gray-800">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Our Technology</h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              Built for transparency and scale — our stack combines secure smart contracts, verifiable on-chain records, and developer-friendly tooling to make traceability practical for the gold industry.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/70 dark:bg-gray-900/60 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-md bg-amber-50 dark:bg-amber-800/30 flex items-center justify-center mb-4">
                  <BoltIcon className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">High-Performance Blockchain</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Our custom-built blockchain is optimized for high transaction throughput and low latency, ensuring real-time traceability without compromise.
                </p>
              </div>

              <div className="p-6 bg-white/70 dark:bg-gray-900/60 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-md bg-amber-50 dark:bg-amber-800/30 flex items-center justify-center mb-4">
                  <ServerStackIcon className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Distributed Data Integrity</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  We use a hybrid on-chain/off-chain data model. Critical provenance data is stored immutably on-chain, while large-scale metadata is anchored cryptographically and stored efficiently off-chain.
                </p>
              </div>

              <div className="p-6 bg-white/70 dark:bg-gray-900/60 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-md bg-amber-50 dark:bg-amber-800/30 flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Enterprise-Grade Security</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Our platform features a permissioned blockchain network, ensuring only verified partners can transact. We employ robust cryptographic protocols and conduct regular third-party audits.
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/get-started" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 shadow-lg">Get Started</Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Blockchain Architecture */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blockchain Architecture: The Engine of Trust</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our core infrastructure is a purpose-built, permissioned blockchain network designed specifically for the high-value gold supply chain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-gray-950 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 text-center">
              <CubeTransparentIcon className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Permissioned Network</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Unlike public blockchains, our network ensures that only vetted industry participants (miners, refiners, vaults) can operate nodes, maintaining a secure and trusted ecosystem.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-950 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 text-center">
              <ArrowsRightLeftIcon className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Smart Contracts for Provenance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our smart contracts, deployed on-chain, automatically verify and record key events like mining, refining, and transfer of ownership, creating an immutable chain of custody.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-950 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 text-center">
              <CodeBracketIcon className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Interoperability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We&apos;re built to integrate with legacy systems. Our platform supports industry-standard protocols, allowing seamless data exchange with existing enterprise resource planning (ERP) systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Data Flow and Integrity */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">How Data Integrity is Guaranteed</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Every step of the gold&apos;s journey is a digital record, cryptographically secured and verifiable by all network participants.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Asset Digitization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A unique **digital certificate** is created for each piece of gold. This certificate acts as a digital twin, holding metadata like origin, purity, and weight.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Event Hashing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Each time the physical asset changes hands, a **cryptographic hash** of the event data is generated and logged on the blockchain, connecting it to the original digital certificate.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Public Verification</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Any authorized user can use the gold&apos;s unique ID to query the blockchain and view its full **unaltered transaction history**, guaranteeing its authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-20 bg-amber-600 dark:bg-amber-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Supply Chain?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Let's build a more transparent and trustworthy gold ecosystem together. Our team is ready to provide a full technical demonstration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-colors"
            >
              Contact Sales
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