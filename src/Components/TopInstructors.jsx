import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Award, Github, Linkedin, Twitter, ArrowUpRight, Users, BookOpen } from "lucide-react";
import axios from "axios";
import Spinner from "./Spinner";

const TopInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://online-learning-platform-server-alpha.vercel.app/instructors/top")
            .then((res) => {
                setInstructors(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching instructors:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="py-20 flex justify-center items-center bg-white dark:bg-gray-950">
                <Spinner />
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-secondary/10 text-secondary mb-6"
                    >
                        Expert Mentors
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-tight"
                    >
                        Meet Our <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Top Instructors</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed"
                    >
                        Learn from world-class educators and industry experts who are passionate about sharing their knowledge and helping you succeed.
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {instructors.map((ins, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group bg-white dark:bg-gray-900 rounded-[2.5rem] p-4 border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                        >
                            <div className="relative rounded-4xl overflow-hidden aspect-4/5 mb-6">
                                <img 
                                    src={ins.avatar} 
                                    alt={ins.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                
                                {/* Social Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <div className="flex items-center gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                            <Twitter className="w-5 h-5" />
                                        </button>
                                        <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                            <Linkedin className="w-5 h-5" />
                                        </button>
                                        <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                            <Github className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Rating Badge */}
                                <div className="absolute top-4 right-4">
                                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm font-black text-gray-900 dark:text-white">{ins.rating.toFixed(1)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 pb-4">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                            {ins.name}
                                        </h3>
                                        <p className="text-sm font-black text-primary uppercase tracking-widest">
                                            Expert Instructor
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                        <Users className="w-4 h-4" />
                                        <span className="text-xs font-bold">1.2k+</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                        <BookOpen className="w-4 h-4" />
                                        <span className="text-xs font-bold">12 Courses</span>
                                    </div>
                                </div>

                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium line-clamp-2 leading-relaxed">
                                    {ins.bio || "Passionate educator with years of experience in the industry."}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TopInstructors;

