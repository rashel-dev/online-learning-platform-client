import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Award, Target, Heart, Shield, Rocket, Globe, Zap } from "lucide-react";

const AboutUs = () => {
    const stats = [
        { label: "Active Students", value: "15,000+", icon: Users, color: "text-blue-500", bgColor: "bg-blue-500/10" },
        { label: "Online Courses", value: "1,200+", icon: BookOpen, color: "text-primary", bgColor: "bg-primary/10" },
        { label: "Expert Mentors", value: "250+", icon: Award, color: "text-secondary", bgColor: "bg-secondary/10" },
    ];

    const values = [
        {
            title: "Our Mission",
            desc: "To democratize education by providing high-quality, accessible learning experiences for everyone, everywhere.",
            icon: Target,
            color: "text-primary",
            bgColor: "bg-primary/10",
        },
        {
            title: "Our Passion",
            desc: "We are passionate about empowering individuals to reach their full potential through continuous learning and skill development.",
            icon: Heart,
            color: "text-secondary",
            bgColor: "bg-secondary/10",
        },
        {
            title: "Our Commitment",
            desc: "We are committed to excellence, integrity, and providing a supportive environment for our global community of learners.",
            icon: Shield,
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
        },
    ];

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-primary/10 text-primary mb-6"
                        >
                            Our Story
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight"
                        >
                            Empowering Minds, <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Transforming Futures</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed"
                        >
                            PathshalaBD is more than just an online learning platform. We are a community of dreamers, 
                            doers, and lifelong learners dedicated to making world-class education accessible to all.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${stat.bgColor} ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                                <p className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">What Drives Us</h2>
                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Our core values define who we are and how we serve our global community of learners.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {values.map((value, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className={`w-20 h-20 rounded-3xl ${value.bgColor} ${value.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    <value.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">{value.title}</h3>
                                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="py-32 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Our Journey</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">From a small idea to a global learning revolution.</p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-white/10 hidden md:block"></div>
                        
                        <div className="space-y-24">
                            {[
                                { year: "2020", title: "The Spark", desc: "PathshalaBD was founded with a vision to revolutionize online learning in Bangladesh.", icon: Zap },
                                { year: "2022", title: "Rapid Growth", desc: "We reached a major milestone of 10,000 active learners and 500+ premium courses.", icon: Rocket },
                                { year: "2024", title: "Global Reach", desc: "Expanded our horizons with international instructors and global certification programs.", icon: Globe }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                                >
                                    <div className="flex-1 text-center md:text-left">
                                        <div className={`p-10 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-colors group ${index % 2 === 0 ? "md:text-right" : ""}`}>
                                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/20 text-primary mb-6 group-hover:scale-110 transition-transform`}>
                                                <item.icon className="w-7 h-7" />
                                            </div>
                                            <span className="text-primary font-black text-2xl mb-2 block">{item.year}</span>
                                            <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                                            <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-primary relative z-10 hidden md:block shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]"></div>
                                    <div className="flex-1 hidden md:block"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;

