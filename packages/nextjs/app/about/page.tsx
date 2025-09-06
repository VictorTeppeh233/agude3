"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  SparklesIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CubeTransparentIcon,
  RocketLaunchIcon,
  HeartIcon,
  HandRaisedIcon,
  ScaleIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";

// Background rotator (same as home) with overlay
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
      <div className="absolute inset-0 bg-black opacity-80 dark:opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent opacity-50 dark:opacity-50" />
    </div>
  );
};

export default function AboutPage() {

  return (

    <div className="min-h-screen bg-amber-50 dark:bg-gray-950 transition-colors duration-500">
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
      <section className="relative overflow-hidden py-20 lg:py-32">
        <BackgroundRotator />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <div className="bg-gradient-to-br from-amber-50/80 to-white/60 dark:from-gray-900/70 dark:to-gray-900/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl ring-1 ring-amber-100/30 dark:ring-amber-900/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-amber-100/60 dark:bg-amber-600/20 flex items-center justify-center">
                    <SparklesIcon className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                  </div>
                  <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">About GoldTrace</h1>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  At AGUDE3, we believe trust is the most valuable asset in the gold industry. We’re on a mission to bring unprecedented transparency and accountability to the global gold supply chain by using the power of blockchain technology.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                  Our platform creates a <strong className="font-semibold text-gray-900 dark:text-white">digital twin</strong> for every piece of gold, providing an immutable record of its journey from the mine to the final consumer. This ensures authenticity, combats illegal mining, and gives investors and consumers a new level of confidence.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/verify" className="inline-flex items-center justify-center gap-3 bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 shadow-lg transform transition-all">
                    Verify Your Gold
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-3 border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full mt-12 lg:mt-0">
              <div className="p-8 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Key Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 p-4 rounded-lg hover:shadow-md transition transform hover:-translate-y-1 bg-white/60 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-50 dark:bg-amber-800/40 flex items-center justify-center">
                      <ShieldCheckIcon className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Tamper-Proof Certificates</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Every record is a permanent, immutable entry on the blockchain, ensuring its history can&apos;t be altered.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-lg hover:shadow-md transition transform hover:-translate-y-1 bg-white/60 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-50 dark:bg-amber-800/40 flex items-center justify-center">
                      <ChartBarIcon className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">End-to-End Traceability</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">We provide a complete audit trail, showing every step of the gold&apos;s journey from mine to market.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-lg hover:shadow-md transition transform hover:-translate-y-1 bg-white/60 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-50 dark:bg-amber-800/40 flex items-center justify-center">
                      <RocketLaunchIcon className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Seamless Integration</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Our API and user-friendly interface make it easy for partners to integrate our technology into their existing workflows.</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Values Section */}
  <section className="py-20 bg-transparent dark:bg-transparent transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our work is guided by the principles that form the foundation of a new, transparent, and ethical gold industry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <HandRaisedIcon className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Transparency</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We provide full visibility into the gold supply chain, ensuring every transaction is documented and verifiable.
              </p>
            </div>
            <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <ScaleIcon className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our technology is designed to build a system based on honesty and trust, combating fraud and unethical practices.
              </p>
            </div>
            <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <GlobeAmericasIcon className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Accountability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We empower stakeholders to be accountable for their part in the supply chain, from mine to market.
              </p>
            </div>
          </div>
        </div>
      </section>

  {/* Why Blockchain Section */}
  <section className="py-20 bg-transparent dark:bg-transparent transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Blockchain for Gold?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Blockchain isn&apos;t just a buzzword; it&apos;s the foundation of a more secure and ethical gold market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-gray-950 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 text-center">
              <CubeTransparentIcon className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Unbreakable Trust</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The decentralized nature of blockchain means no single entity can control or alter the data, creating an unshakeable foundation of trust.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-950 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 text-center">
              <ShieldCheckIcon className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Authenticity & Security</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Each certificate is cryptographically secured, making it virtually impossible to counterfeit or duplicate.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-950 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 text-center">
              <HeartIcon className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Ethical Sourcing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Blockchain provides transparent proof of origin, helping to combat the trade of conflict minerals and promote ethical mining practices.
              </p>
            </div>
          </div>
        </div>
      </section>

  {/* Our Process Section */}
  <section className="py-20 bg-transparent dark:bg-transparent transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We make the complex simple. Our process is designed to be seamless for every stakeholder in the supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-800/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-4 text-3xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Certification at Source</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Gold from certified mines is registered with a unique digital certificate on our blockchain network, recording its origin and initial data.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-800/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-4 text-3xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Immutable Traceability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                As the gold moves from refiners to manufacturers, each transaction is logged on the blockchain, creating a transparent, unbroken chain of custody.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-800/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-4 text-3xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Consumer Verification</h3>
              <p className="text-gray-600 dark:text-gray-300">
                End consumers can scan a QR code or enter an ID to instantly verify the gold’s authenticity and trace its full history.
              </p>
            </div>
          </div>
        </div>
      </section>
      
  

{/* <section className="py-20 bg-transparent dark:bg-transparent transition-colors duration-500">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Trusted by Industry Leaders</h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        We partner with some of the most respected organizations in the gold and technology sectors to deliver our solutions.
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Logo" className="h-16 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity duration-300" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft Logo" className="h-16 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity duration-300" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" className="h-16 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity duration-300" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%2C_dark_blue%29.svg" alt="Intel Logo" className="h-16 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity duration-300" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Adobe_Inc._logo.svg" alt="Adobe Logo" className="h-16 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity duration-300" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Spotify_logo.svg" alt="Spotify Logo" className="h-16 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity duration-300" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Facebook_logo_%28alternate%29.svg" alt="Meta Logo" className="h-16 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity duration-300" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Slack_logo.svg" alt="Slack Logo" className="h-16 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity duration-300" />
    </div>
  </div>
</section> */}

  {/* Team Section */}
  <section className="py-20 bg-transparent dark:bg-transparent transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We are a passionate team of innovators and industry experts dedicated to building a more trustworthy future for the gold market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg text-center border border-gray-200 dark:border-gray-800">
              <img src="https://i.pravatar.cc/150?img=32" alt="Aniwa Mensah" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-amber-500" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Anthony Gudu</h3>
              <p className="text-amber-600 dark:text-amber-400 font-medium">Founder & CEO</p>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                Aniwa is a visionary leader with over a decade of experience in the commodities market and a deep passion for blockchain&apos;s potential to drive global change.
              </p>
            </div>
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg text-center border border-gray-200 dark:border-gray-800">
              <img src="https://i.pravatar.cc/150?img=12" alt="Kofi Asante" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-amber-500" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Kofi Asante</h3>
              <p className="text-amber-600 dark:text-amber-400 font-medium">Head of Partnerships</p>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                Kofi&apos;s expertise in business development and his extensive network within the mining community are crucial to building our global partner ecosystem.
              </p>
            </div>
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg text-center border border-gray-200 dark:border-gray-800">
              <img src="https://i.pravatar.cc/150?img=48" alt="Efua Boateng" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-amber-500" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Efua Boateng</h3>
              <p className="text-amber-600 dark:text-amber-400 font-medium">Lead Product Manager</p>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                Efua crafts intuitive user experiences that make our powerful technology accessible to everyone, from miners to retail investors.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/team" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
              Learn more about our team
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-20 bg-amber-600 dark:bg-amber-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join the Movement?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Partner with AGUDE3 to lead the charge towards a more transparent and ethical gold supply chain.
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