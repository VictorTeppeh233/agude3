"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "idle" | "sending" | "sent" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // placeholder: in a real app you'd POST to an API endpoint
      await new Promise(r => setTimeout(r, 800));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
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
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/gold-1.jpg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 animate-fade-in"
          />
          <div className="absolute inset-0 bg-black opacity-70 dark:opacity-85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent opacity-50 dark:opacity-50" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Frosted Glass Container for readability */}
          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Get in Touch with AGUDE3
            </h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Questions about integrations, partnerships, or support? Our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section with Glow Effect */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 transition-colors duration-500">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-amber-500 focus:outline-none transition-colors dark:text-gray-200"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-amber-500 focus:outline-none transition-colors dark:text-gray-200"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help?"
                rows={6}
                required
                className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-amber-500 focus:outline-none transition-colors dark:text-gray-200"
              />
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 shadow-lg transform transition-transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'sent' && <span className="text-sm text-green-600 dark:text-green-400">Message sent — we will reply shortly.</span>}
                {status === 'error' && <span className="text-sm text-red-600 dark:text-red-400">Something went wrong. Please try again.</span>}
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 transition-colors duration-500">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact & Support</h3>
            <div className="space-y-6 text-base text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-800/20 flex items-center justify-center">
                  <EnvelopeIcon className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white mb-1">Email Support</div>
                  <Link href="mailto:support@goldtrace.example" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">support@agude3.example</Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-800/20 flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white mb-1">Phone</div>
                  <Link href="tel:+15551234567" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">+1 (555) 123-4567</Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-800/20 flex items-center justify-center">
                  <MapPinIcon className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white mb-1">Head Office</div>
                  <div>Accra, Ghana</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">By appointment only</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Learn More About Us
              </Link>
            </div>
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
            <p>&copy; 2024 GoldTrace. All rights reserved. Powered by blockchain technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}