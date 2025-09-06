"use client";

import React, { useState, useEffect, useRef } from "react";
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

// Simple background rotator for the hero section, with a subtle glow overlay
const BackgroundRotator: React.FC<{ intervalMs?: number }> = ({ intervalMs = 6000 }) => {
  const images = ['/gold-1.jpg', '/gold-bars.jpeg'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
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
      {/* Subtle overlay with a gold gradient glow */}
      <div className="absolute inset-0 bg-black opacity-80 dark:opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent opacity-50 dark:opacity-50" />
    </div>
  );
};

// Small count-up component for stats, with a small bounce effect
const CountUp: React.FC<{ end: number; durationMs?: number; format?: (n: number) => string }> = ({ end, durationMs = 1200, format }) => {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const step = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - (startRef.current || 0);
      const progress = Math.min(1, elapsed / durationMs);
      setValue(Math.floor(progress * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, durationMs]);

  const out = format ? format(value) : value.toLocaleString();
  return <span className="animate-in fade-in-0 duration-500 ease-out">{out}</span>;
};

const formatCompact = (n: number) => {
  if (n >= 1000000) return (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1) + "M+";
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "k+";
  return n.toString();
};

const Home = () => {
  const [connectedAddress] = useState<string | null>("0x1234567890123456789012345678901234567890");
  const [entered, setEntered] = useState(false);
  
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 120);
    return () => clearTimeout(t);
  }, []);
  
  const heroCardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroCardRef.current) return;
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = heroCardRef.current;
    const x = (clientX - offsetLeft - offsetWidth / 2) / (offsetWidth / 2);
    const y = (clientY - offsetTop - offsetHeight / 2) / (offsetHeight / 2);

    heroCardRef.current.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.03)`;
    heroCardRef.current.style.boxShadow = `${x * 20}px ${y * 20}px 50px rgba(0, 0, 0, 0.3)`;
  };

  const handleMouseLeave = () => {
    if (!heroCardRef.current) return;
    heroCardRef.current.style.transform = `rotateY(0) rotateX(0) scale(1)`;
    heroCardRef.current.style.boxShadow = `0px 0px 30px rgba(0, 0, 0, 0.1)`;
  };

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-500">
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 min-h-[80vh] flex items-center">
        <BackgroundRotator />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700` }>
              <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl max-w-lg mx-auto lg:mx-0 transition-colors">
                <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight drop-shadow-lg">
                  Trust in Every
                  <span className="text-amber-600 dark:text-amber-500 block animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">Grain of Gold</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
                  Blockchain-powered transparency for the global gold supply chain. Verify authenticity and trace provenance with immutable digital certificates.
                </p>

                {connectedAddress && (
                  <div className="flex items-center space-x-3 mt-6">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Connected:</span>
                    <Address address={connectedAddress} />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    href="/verify"
                    className="inline-flex items-center justify-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    <CheckBadgeIcon className="h-5 w-5" />
                    <span>Connect Wallet</span>
                  </Link>
                  <Link
                    href="/demo"
                    className="border-2 border-amber-500 text-amber-500 px-8 py-4 rounded-full font-semibold hover:bg-amber-500 hover:text-black transition-colors text-center"
                  >
                    Watch Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative transform-style-3d perspective-1000 hidden lg:block">
              <div
                ref={heroCardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 ring-1 ring-amber-500/20 shadow-2xl transition-transform duration-500 hover:shadow-amber-500/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Gold Certificate #GH-2025-001</h3>
                  <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                    <ShieldCheckIcon className="h-5 w-5" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-300/50 dark:border-gray-700/50">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Purity</span>
                    <span className="font-semibold text-gray-900 dark:text-white text-lg">99.99%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-300/50 dark:border-gray-700/50">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Weight</span>
                    <span className="font-semibold text-gray-900 dark:text-white text-lg">1.000 oz</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-300/50 dark:border-gray-700/50">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Origin</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Certified Mine, Obuasi, Ghana</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b-0">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Refiner</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Ghana Refinery Co. 🇬🇭</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full animate-pulse" aria-hidden="true"></div>
                    <span className="text-sm">Blockchain verified • Block #18,234,567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-in fade-in-up duration-500 delay-100">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 drop-shadow-lg"><CountUp end={2500000} format={formatCompact} /></div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">Gold Items Tracked</div>
            </div>
            <div className="text-center animate-in fade-in-up duration-500 delay-200">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 drop-shadow-lg"><CountUp end={150} /></div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">Partner Organizations</div>
            </div>
            <div className="text-center animate-in fade-in-up duration-500 delay-300">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 drop-shadow-lg">99.9%</div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">Verification Accuracy</div>
            </div>
            <div className="text-center animate-in fade-in-up duration-500 delay-400">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 drop-shadow-lg"><CountUp end={45} /></div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Complete Gold Supply Chain Transparency</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From mine to market, every step is recorded on the blockchain, providing unprecedented visibility and trust in gold provenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:ring-2 ring-amber-500">
              <div className="bg-amber-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                <CheckBadgeIcon className="h-8 w-8 text-amber-500 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Instant Verification</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Verify gold authenticity in seconds using unique blockchain IDs. Access complete certification and purity data instantly.
              </p>
              <Link
                href="/verify"
                className="text-amber-600 dark:text-amber-500 font-semibold hover:text-amber-500 dark:hover:text-amber-400 inline-flex items-center group-hover:scale-105 transition-transform"
              >
                Verify Now <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div className="group bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:ring-2 ring-blue-500">
              <div className="bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <GlobeAltIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Full Traceability</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Track gold&apos;s complete journey from extraction to final product. View every transaction and transformation along the supply chain.
              </p>
              <Link href="/trace" className="text-blue-600 dark:text-blue-500 font-semibold hover:text-blue-500 dark:hover:text-blue-400 inline-flex items-center group-hover:scale-105 transition-transform">
                Trace Gold <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div className="group bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:ring-2 ring-green-500">
              <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <PlusCircleIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Digital Certification</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Create immutable digital certificates for new gold batches. Streamline compliance and reduce paperwork.
              </p>
              <Link href="/add" className="text-green-600 dark:text-green-500 font-semibold hover:text-green-500 dark:hover:text-green-400 inline-flex items-center group-hover:scale-105 transition-transform">
                Add Batch <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div className="group bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:ring-2 ring-purple-500">
              <div className="bg-purple-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <MagnifyingGlassIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Blockchain Explorer</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Explore transaction history and blockchain data with our purpose-built explorer for gold supply chain transparency.
              </p>
              <Link
                href="/blockexplorer"
                className="text-purple-600 dark:text-purple-500 font-semibold hover:text-purple-500 dark:hover:text-purple-400 inline-flex items-center group-hover:scale-105 transition-transform"
              >
                Explore <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Serving miners, refiners, manufacturers, and retailers worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl animate-in fade-in-up duration-500 delay-100">
              <DocumentCheckIcon className="h-12 w-12 text-amber-600 dark:text-amber-500 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mining & Extraction</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Record gold at source with GPS coordinates, mining permits, and environmental compliance data for complete transparency.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 bg-amber-600 dark:bg-amber-500 rounded-full"></div><span>ESG compliance tracking</span></li>
                <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 bg-amber-600 dark:bg-amber-500 rounded-full"></div><span>Conflict-free certification</span></li>
                <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 bg-amber-600 dark:bg-amber-500 rounded-full"></div><span>Environmental impact records</span></li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl animate-in fade-in-up duration-500 delay-200">
              <ChartBarIcon className="h-12 w-12 text-blue-600 dark:text-blue-500 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Refining & Processing</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Track purity improvements, alloy compositions, and processing methods with immutable quality assurance records.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full"></div><span>Purity verification</span></li>
                <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full"></div><span>Processing history</span></li>
                <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full"></div><span>Quality certifications</span></li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl animate-in fade-in-up duration-500 delay-300">
              <UserGroupIcon className="h-12 w-12 text-green-600 dark:text-green-500 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Retail & Investment</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Provide customers with complete provenance data and authenticity guarantees for investment-grade gold products.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-500 rounded-full"></div><span>Customer verification tools</span></li>
                <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-500 rounded-full"></div><span>Investment grade tracking</span></li>
                <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-500 rounded-full"></div><span>Authenticity guarantees</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-yellow-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Gold Supply Chain?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Join leading organizations using blockchain technology to ensure transparency, authenticity, and trust in gold trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Free Trial
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
};

export default Home;