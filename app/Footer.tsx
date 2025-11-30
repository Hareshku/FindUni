import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/icons/logo.png"
                height={40}
                width={40}
                alt="Logo"
                className="rounded-full"
              />
              <h3 className="text-2xl font-bold text-white">FindUni</h3>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Pakistan&apos;s most comprehensive university discovery platform. Helping students make informed decisions about their higher education journey since 2024.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  <span>Universities</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  <span>Team</span>
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  <span>Admission Guide</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  <span>Scholarships</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  <span>Test Preparation</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  <span>FAQ</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            Copyright © 2025 FindUni. All rights reserved. Made with <span className="text-red-500">❤</span> for Pakistani students.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
