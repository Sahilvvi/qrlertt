import React from "react";
import Link from "next/link";
import { Smartphone, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-white">
                            <img
                                src="/qrlert.png"
                                alt="QrLert Logo"
                                className="w-full h-full object-contain p-1.5"
                            />
                        </div>
                        <span className="font-outfit text-2xl font-black tracking-tight text-white">
                            QrLert <span className="font-light text-secondary">Attendance</span>
                        </span>
                    </Link>
                    <p className="text-slate-400 max-w-sm">
                        The cutting-edge utility app designed to streamline attendance management in schools through encrypted QR technology.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors text-white">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors text-white">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors text-white">
                            <Instagram className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Explore</h4>
                    <ul className="space-y-4">
                        <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
                        <li><Link href="/product" className="hover:text-secondary transition-colors">Our Product</Link></li>
                        <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
                        <li><Link href="/blog" className="hover:text-secondary transition-colors">Blog & News</Link></li>
                        <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Support</h4>
                    <ul className="space-y-4">
                        <li><Link href="#" className="hover:text-secondary transition-colors">Help Center</Link></li>
                        <li><Link href="#" className="hover:text-secondary transition-colors">FAQs</Link></li>
                        <li><Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <MapPin className="w-5 h-5 text-secondary shrink-0" />
                            <span>15, 2nd Floor, Mahabir Market, Siliguri, India</span>
                        </li>
                        <li className="flex gap-3">
                            <Phone className="w-5 h-5 text-secondary shrink-0" />
                            <span>+91 70014 05007</span>
                        </li>
                        <li className="flex gap-3">
                            <Mail className="w-5 h-5 text-secondary shrink-0" />
                            <span>support@qrlert.in</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
                <p>© 2026 QRlert ID Solutions. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <Link href="#">Privacy</Link>
                    <Link href="#">Terms</Link>
                    <Link href="#">Cookies</Link>
                </div>
            </div>
        </footer>
    );
};
