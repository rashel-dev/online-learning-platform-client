import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Logo from "./ui/Logo";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Press", href: "/press" },
            { name: "Blog", href: "/blog" },
            { name: "Contact", href: "/contact" },
        ],
        courses: [
            { name: "Web Development", href: "/courses/web-development" },
            { name: "Data Science", href: "/courses/data-science" },
            { name: "Design", href: "/courses/design" },
            { name: "Business", href: "/courses/business" },
            { name: "Marketing", href: "/courses/marketing" },
        ],
        support: [
            { name: "Help Center", href: "/help" },
            { name: "FAQs", href: "/faq" },
            { name: "Student Support", href: "/student-support" },
            { name: "Instructor Support", href: "/instructor-support" },
            { name: "System Status", href: "/status" },
        ],
        resources: [
            { name: "Become an Instructor", href: "/teach" },
            { name: "Teaching Resources", href: "/teaching-resources" },
            { name: "Free Resources", href: "/free-resources" },
            { name: "Affiliate Program", href: "/affiliate" },
            { name: "Partnerships", href: "/partnerships" },
        ],
        legal: [
            { name: "Terms of Service", href: "/terms" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Cookie Policy", href: "/cookies" },
            { name: "Accessibility", href: "/accessibility" },
            { name: "Sitemap", href: "/sitemap" },
        ],
    };

    const socialLinks = [
        { name: "Facebook", icon: <FaFacebook />, href: "https://web.facebook.com/mohammadrashel.mohammodrashel" },
        { name: "Github", icon: <FaGithub />, href: "https://github.com/rashel9255" },
        { name: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/mohammad-rashel-2197322b2/" },
        { name: "Instagram", icon: <FaInstagram />, href: "#" },
        { name: "YouTube", icon: <FaYoutube />, href: "#" },
    ];

    return (
        <footer className="bg-neutral dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand & Newsletter Section */}
                    <div className="sm:col-span-2 lg:col-span-4 space-y-8">
                        <div>
                            <div className="flex items-center mb-6">
                                <Logo />
                            </div>
                            <p className="mb-6 leading-relaxed max-w-md">
                                Empowering learners worldwide with quality education. Join millions of students learning new skills and advancing their careers with our expert-led courses.
                            </p>
                        </div>

                        {/* Newsletter */}
                        <div className="space-y-4">
                            <h4 className="text-slate-900 dark:text-white font-semibold">Subscribe to our newsletter</h4>
                            <div className="flex max-w-sm">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                />
                                <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-r-xl transition-all flex items-center gap-2 group">
                                    <span>Join</span>
                                    <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    whileHover={{ y: -4 }}
                                    className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-primary hover:bg-primary hover:text-white hover:border-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-primary/20"
                                    aria-label={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="lg:col-span-2">
                        <h3 className="text-primary font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.href} className="hover:text-primary transition-colors duration-200">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-primary font-bold text-lg mb-6">Courses</h3>
                        <ul className="space-y-4">
                            {footerLinks.courses.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.href} className="hover:text-primary transition-colors duration-200">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-primary font-bold text-lg mb-6">Support</h3>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.href} className="hover:text-primary transition-colors duration-200">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-primary font-bold text-lg mb-6">Resources</h3>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.href} className="hover:text-primary transition-colors duration-200">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Copyright */}
                        <div className="text-sm text-center md:text-left font-medium">
                            © {currentYear} <span className="text-primary font-bold">PathShala</span><span className="text-secondary font-bold">BD</span>. All rights reserved.
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            {footerLinks.legal.slice(0, 3).map((link) => (
                                <Link key={link.name} to={link.href} className="hover:text-primary transition-colors duration-200">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


