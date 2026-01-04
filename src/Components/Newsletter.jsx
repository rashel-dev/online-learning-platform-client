import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Newsletter = () => {
    return (
        <section className="py-12 bg-white dark:bg-gray-950 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="relative bg-gray-900 dark:bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" 
                         style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
                    </div>
                    
                    {/* Animated Glows */}
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-[100px]"
                    />
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-[100px]"
                    />

                    <div className="relative z-10 grid lg:grid-cols-2 items-center gap-12 p-8 md:p-16 lg:p-20">
                        <div>
                            <motion.span 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 text-secondary mb-6"
                            >
                                Newsletter
                            </motion.span>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
                            >
                                Stay Ahead with <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary">Latest Updates</span>
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-gray-400 max-w-md leading-relaxed"
                            >
                                Join our community of 5,000+ learners. Get exclusive course discounts, career tips, and platform updates.
                            </motion.p>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-xl"
                        >
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        placeholder="your@email.com" 
                                        className="w-full px-6 py-5 rounded-2xl bg-gray-800/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        required
                                    />
                                </div>
                                <button 
                                    type="submit"
                                    className="w-full px-8 py-5 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
                                >
                                    Subscribe to Newsletter
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500 font-medium">
                                <span className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                    Weekly Updates
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                    No Spam
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
