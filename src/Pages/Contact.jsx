import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            value: "support@pathshalabd.com",
            desc: "We'll respond within 24 hours.",
            color: "bg-blue-500/10 text-blue-600",
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            value: "+880 1234 567890",
            desc: "Mon-Fri from 9am to 6pm.",
            color: "bg-primary/10 text-primary",
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Us",
            value: "123 Learning Lane, Dhaka",
            desc: "Bangladesh, 1200",
            color: "bg-secondary/10 text-secondary",
        },
    ];

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-primary/5 dark:bg-gray-900/50 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
                    >
                        Get in <span className="text-primary">Touch</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
                    </motion.p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className={`w-12 h-12 rounded-2xl ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        {info.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{info.title}</h3>
                                    <p className="text-primary font-semibold mb-2">{info.value}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.desc}</p>
                                </motion.div>
                            ))}

                            {/* Additional Help Card */}
                            <div className="p-8 rounded-3xl bg-primary text-white shadow-xl shadow-primary/20 relative overflow-hidden">
                                <div className="absolute -right-8 -bottom-8 opacity-10">
                                    <MessageSquare className="w-32 h-32" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 relative z-10">Live Support</h3>
                                <p className="text-white/80 mb-6 relative z-10">Our support team is available for live chat during business hours.</p>
                                <button className="px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-colors relative z-10">
                                    Start Chat
                                </button>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send us a Message</h2>
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                                            <input 
                                                type="text" 
                                                placeholder="John Doe"
                                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all dark:text-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                                            <input 
                                                type="email" 
                                                placeholder="john@example.com"
                                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all dark:text-white"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                                        <input 
                                            type="text" 
                                            placeholder="How can we help?"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                                        <textarea 
                                            rows="5"
                                            placeholder="Tell us more about your inquiry..."
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all dark:text-white resize-none"
                                        ></textarea>
                                    </div>
                                    <button className="w-full md:w-auto px-10 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20">
                                        Send Message
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section Placeholder */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[2.5rem] overflow-hidden h-96 bg-gray-200 dark:bg-gray-800 flex items-center justify-center relative group">
                        <div className="text-center z-10">
                            <MapPin className="w-12 h-12 text-primary mx-auto mb-4 group-hover:bounce transition-transform" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Headquarters</h3>
                            <p className="text-gray-500 dark:text-gray-400">Dhaka, Bangladesh</p>
                        </div>
                        {/* Overlay to simulate map */}
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
