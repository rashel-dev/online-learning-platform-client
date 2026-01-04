import React from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, Bell, ShieldCheck } from "lucide-react";

const Newsletter = () => {
    return (
        <section className="py-32 bg-white dark:bg-gray-950 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="relative bg-gray-900 dark:bg-gray-900 rounded-[4rem] overflow-hidden shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" 
                         style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                    </div>
                    
                    {/* Animated Glows */}
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"
                    />
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]"
                    />

                    <div className="relative z-10 grid lg:grid-cols-2 items-center gap-16 p-10 md:p-20 lg:p-24">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-secondary mb-8 border border-white/10"
                            >
                                <Sparkles className="w-4 h-4" />
                                <span className="text-xs font-black tracking-widest uppercase">Join the Community</span>
                            </motion.div>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight"
                            >
                                Stay Ahead with <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary">Latest Updates</span>
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-gray-400 max-w-md leading-relaxed font-medium mb-10"
                            >
                                Join our community of 5,000+ learners. Get exclusive course discounts, career tips, and platform updates.
                            </motion.p>
                            
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-3 text-white/60">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                        <Bell className="w-5 h-5 text-secondary" />
                                    </div>
                                    <span className="text-sm font-bold">Weekly Updates</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/60">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-sm font-bold">No Spam Policy</span>
                                </div>
                            </div>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-12 rounded-[3rem] shadow-2xl"
                        >
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-white/60 uppercase tracking-widest ml-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        placeholder="your@email.com" 
                                        className="w-full px-8 py-6 rounded-2xl bg-gray-800/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
                                        required
                                    />
                                </div>
                                <button 
                                    type="submit"
                                    className="w-full px-8 py-6 bg-primary hover:bg-primary/90 text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-primary/20"
                                >
                                    Subscribe Now
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                            <p className="mt-8 text-center text-xs text-gray-500 font-bold">
                                By subscribing, you agree to our <a href="#" className="text-white/60 hover:text-white underline">Privacy Policy</a>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

