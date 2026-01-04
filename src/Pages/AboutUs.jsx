import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Award, Target, Heart, Shield } from "lucide-react";

const AboutUs = () => {
    const stats = [
        { label: "Students", value: "15k+", icon: <Users className="w-6 h-6" /> },
        { label: "Courses", value: "1.2k+", icon: <BookOpen className="w-6 h-6" /> },
        { label: "Instructors", value: "250+", icon: <Award className="w-6 h-6" /> },
    ];

    const values = [
        {
            title: "Our Mission",
            desc: "To democratize education by providing high-quality, accessible learning experiences for everyone, everywhere.",
            icon: <Target className="w-8 h-8 text-primary" />,
        },
        {
            title: "Our Passion",
            desc: "We are passionate about empowering individuals to reach their full potential through continuous learning and skill development.",
            icon: <Heart className="w-8 h-8 text-secondary" />,
        },
        {
            title: "Our Commitment",
            desc: "We are committed to excellence, integrity, and providing a supportive environment for our global community of learners.",
            icon: <Shield className="w-8 h-8 text-blue-500" />,
        },
    ];

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-primary/5 dark:bg-gray-900/50">
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
                    >
                        Empowering Minds, <br />
                        <span className="text-primary">Transforming Futures</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        PathshalaBD is a leading online learning platform dedicated to providing world-class education. 
                        We believe that learning should be accessible, engaging, and life-changing.
                    </motion.p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-sm"
                            >
                                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                    {stat.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">What Drives Us</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Our core values define who we are and how we serve our community.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {values.map((value, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-gray-50 dark:bg-gray-900 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section Placeholder */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-12">Our Journey</h2>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>
                        <div className="space-y-12">
                            {[
                                { year: "2020", title: "The Beginning", desc: "PathshalaBD was founded with a vision to revolutionize online learning." },
                                { year: "2022", title: "10k Students", desc: "We reached a major milestone of 10,000 active learners on our platform." },
                                { year: "2024", title: "Global Expansion", desc: "Launched international courses and partnered with global industry leaders." }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                                >
                                    <div className="flex-1 text-center md:text-left">
                                        <div className={`p-6 rounded-3xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                                            <span className="text-primary font-bold text-xl mb-2 block">{item.year}</span>
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 rounded-full bg-primary relative z-10 hidden md:block"></div>
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
