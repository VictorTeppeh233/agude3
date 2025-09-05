"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChartBarIcon,
  CheckBadgeIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home = () => {
  const [connectedAddress] = useState<string | null>("0x1234567890123456789012345678901234567890");

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-amber-600">GoldTrace</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/verify" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">
                  Verify
                </Link>
                <Link href="/trace" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">
                  Trace
                </Link>
                <Link href="/solutions" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">
                  Solutions
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">
                  About
                </Link>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Trust in Every
                <span className="text-amber-600 block">Grain of Gold</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Blockchain-powered transparency for the global gold supply chain. Verify authenticity, trace provenance,
                and ensure ethical sourcing with immutable digital certificates.
              </p>

              {connectedAddress && (
                <div className="flex items-center space-x-3 mt-6">
                  <span className="text-sm text-gray-600">Connected:</span>
                  <Address address={connectedAddress} />
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/verify"
                  className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-center"
                >
                  Verify Gold Now
                </Link>
                <Link
                  href="/demo"
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
                >
                  Watch Demo
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Gold Certificate #AU-2024-001</h3>
                  <div className="flex items-center space-x-2">
                    <ShieldCheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-green-600 font-medium">Verified</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Purity</span>
                    <span className="font-semibold">99.99%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight</span>
                    <span className="font-semibold">1.000 oz</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Origin</span>
                    <span className="font-semibold">Certified Mine, Canada</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Refiner</span>
                    <span className="font-semibold">Royal Canadian Mint</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Blockchain verified • Block #18,234,567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">2.5M+</div>
              <div className="text-gray-300 mt-2">Gold Items Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">150+</div>
              <div className="text-gray-300 mt-2">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">99.9%</div>
              <div className="text-gray-300 mt-2">Verification Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">45</div>
              <div className="text-gray-300 mt-2">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Gold Supply Chain Transparency</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From mine to market, every step is recorded on the blockchain, providing unprecedented visibility and
              trust in gold provenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-amber-200">
              <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                <CheckBadgeIcon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Verification</h3>
              <p className="text-gray-600 mb-6">
                Verify gold authenticity in seconds using unique blockchain IDs. Access complete certification and
                purity data instantly.
              </p>
              <Link
                href="/verify"
                className="text-amber-600 font-semibold hover:text-amber-700 inline-flex items-center"
              >
                Verify Now →
              </Link>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-amber-200">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <GlobeAltIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Traceability</h3>
              <p className="text-gray-600 mb-6">
                Track gold's complete journey from extraction to final product. View every transaction and
                transformation along the supply chain.
              </p>
              <Link href="/trace" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                Trace Gold →
              </Link>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-amber-200">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <PlusCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Certification</h3>
              <p className="text-gray-600 mb-6">
                Create immutable digital certificates for new gold batches. Streamline compliance and reduce paperwork.
              </p>
              <Link href="/add" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">
                Add Batch →
              </Link>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-amber-200">
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <MagnifyingGlassIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Blockchain Explorer</h3>
              <p className="text-gray-600 mb-6">
                Explore transaction history and blockchain data with our purpose-built explorer for gold supply chain
                transparency.
              </p>
              <Link
                href="/blockexplorer"
                className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">Serving miners, refiners, manufacturers, and retailers worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <DocumentCheckIcon className="h-12 w-12 text-amber-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mining & Extraction</h3>
              <p className="text-gray-600 mb-6">
                Record gold at source with GPS coordinates, mining permits, and environmental compliance data for
                complete transparency.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• ESG compliance tracking</li>
                <li>• Conflict-free certification</li>
                <li>• Environmental impact records</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <ChartBarIcon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Refining & Processing</h3>
              <p className="text-gray-600 mb-6">
                Track purity improvements, alloy compositions, and processing methods with immutable quality assurance
                records.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Purity verification</li>
                <li>• Processing history</li>
                <li>• Quality certifications</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <UserGroupIcon className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Retail & Investment</h3>
              <p className="text-gray-600 mb-6">
                Provide customers with complete provenance data and authenticity guarantees for investment-grade gold
                products.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Customer verification tools</li>
                <li>• Investment grade tracking</li>
                <li>• Authenticity guarantees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Gold Supply Chain?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Join leading organizations using blockchain technology to ensure transparency, authenticity, and trust in
            gold trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">GoldTrace</h3>
              <p className="text-gray-300 mb-4">Blockchain-powered transparency for the global gold supply chain.</p>
              <p className="text-sm text-gray-400">Built with Scaffold-ETH 2 for enterprise-grade reliability.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/verify" className="hover:text-white">
                    Verify Gold
                  </Link>
                </li>
                <li>
                  <Link href="/trace" className="hover:text-white">
                    Trace History
                  </Link>
                </li>
                <li>
                  <Link href="/add" className="hover:text-white">
                    Add Records
                  </Link>
                </li>
                <li>
                  <Link href="/blockexplorer" className="hover:text-white">
                    Block Explorer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/mining" className="hover:text-white">
                    Mining
                  </Link>
                </li>
                <li>
                  <Link href="/refining" className="hover:text-white">
                    Refining
                  </Link>
                </li>
                <li>
                  <Link href="/retail" className="hover:text-white">
                    Retail
                  </Link>
                </li>
                <li>
                  <Link href="/investment" className="hover:text-white">
                    Investment
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GoldTrace. All rights reserved. Powered by blockchain technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
