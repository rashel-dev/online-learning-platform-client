import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, HelpCircle } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            value: "support@pathshalabd.com",
            desc: "We'll respond within 24 hours.",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
        },
        {
            icon: Phone,
            title: "Call Us",
            value: "+880 1234 567890",
            desc: "Mon-Fri from 9am to 6pm.",
            color: "text-primary",
            bgColor: "bg-primary/10",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            value: "123 Learning Lane, Dhaka",
            desc: "Bangladesh, 1200",
            color: "text-secondary",
            bgColor: "bg-secondary/10",
        },
    ];

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-primary/10 text-primary mb-6"
                        >
                            Contact Us
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight"
                        >
                            Let's Start a <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Conversation</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed"
                        >
                            Have a question about our courses, pricing, or anything else? 
                            Our team is here to help you every step of the way.
                        </motion.p>
                    </div>
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
                                    className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${info.bgColor} ${info.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                                        <info.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">{info.title}</h3>
                                    <p className="text-primary font-bold text-lg mb-2">{info.value}</p>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{info.desc}</p>
                                </motion.div>
                            ))}

                            {/* Additional Help Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="p-10 rounded-[2.5rem] bg-linear-to-br from-primary to-secondary text-white shadow-2xl shadow-primary/20 relative overflow-hidden group"
                            >
                                <div className="absolute -right-8 -bottom-8 opacity-20 group-hover:scale-110 transition-transform duration-500">
                                    <MessageSquare className="w-32 h-32" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10">Live Support</h3>
                                <p className="text-white/80 text-lg mb-8 relative z-10">Need immediate help? Our support team is ready to chat with you.</p>
                                <button className="w-full py-4 bg-white text-primary font-black rounded-2xl hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] relative z-10">
                                    Start Live Chat
                                </button>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-900 p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800"
                            >
                                <div className="mb-12">
                                    <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Send us a Message</h2>
                                    <p className="text-gray-500 dark:text-gray-400">Fill out the form below and we'll get back to you as soon as possible.</p>
                                </div>

                                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest ml-1">Full Name</label>
                                            <input 
                                                type="text" 
                                                placeholder="John Doe"
                                                className="w-full px-8 py-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white font-medium"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest ml-1">Email Address</label>
                                            <input 
                                                type="email" 
                                                placeholder="john@example.com"
                                                className="w-full px-8 py-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white font-medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest ml-1">Subject</label>
                                        <input 
                                            type="text" 
                                            placeholder="How can we help you?"
                                            className="w-full px-8 py-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white font-medium"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest ml-1">Message</label>
                                        <textarea 
                                            rows="6"
                                            placeholder="Tell us more about your inquiry..."
                                            className="w-full px-8 py-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white font-medium resize-none"
                                        ></textarea>
                                    </div>
                                    <button className="w-full md:w-auto px-12 py-5 bg-primary hover:bg-primary/90 text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/20">
                                        Send Message
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-[3rem] overflow-hidden h-[500px] bg-gray-200 dark:bg-gray-800 group">
                        {/* Simulated Map Background */}
                        <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/basic-v2/static/-0.1276,51.5072,12/1000x500.png?key=get_your_own_key')] bg-cover bg-center opacity-50 dark:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                        
                        <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent flex items-end p-12">
                            <div className="bg-white dark:bg-gray-900 p-8 rounded-4xl shadow-2xl max-w-md relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-gray-900 dark:text-white">Our Headquarters</h3>
                                        <p className="text-gray-500 dark:text-gray-400">Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">123 Learning Lane, Suite 456, Dhaka 1200, Bangladesh</p>
                                <button className="flex items-center gap-2 text-primary font-black hover:gap-3 transition-all">
                                    Get Directions
                                    <Globe className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

