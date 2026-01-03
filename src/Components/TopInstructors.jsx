import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Award, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
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
            <div className="py-24 flex justify-center items-center bg-gray-50 dark:bg-gray-950">
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-secondary/10 text-secondary mb-4"
                    >
                        Expert Mentors
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }} 
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
                    >
                        Meet Our <span className="text-primary">Top Instructors</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400"
                    >
                        Learn from world-class educators and industry experts who are passionate about sharing their knowledge and helping you succeed.
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {instructors.map((ins, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group bg-white dark:bg-gray-900 rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-gray-100 dark:border-gray-800"
                        >
                            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] mb-6">
                                <img 
                                    src={ins.avatar} 
                                    alt={ins.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                
                                {/* Social Overlay */}
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-end p-4 gap-3">
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-lg translate-x-10 group-hover:translate-x-0 transition-transform delay-75">
                                        <Twitter className="w-5 h-5" />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-lg translate-x-10 group-hover:translate-x-0 transition-transform delay-100">
                                        <Linkedin className="w-5 h-5" />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-lg translate-x-10 group-hover:translate-x-0 transition-transform delay-150">
                                        <Github className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Rating Badge */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-3 flex items-center justify-between shadow-lg">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-bold text-gray-900 dark:text-white">{ins.rating.toFixed(1)}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-primary">
                                            <Award className="w-4 h-4" />
                                            <span className="text-[10px] font-bold uppercase tracking-tighter">Top Rated</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-2 pb-2">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                            {ins.name}
                                        </h3>
                                        <p className="text-sm text-primary font-semibold uppercase tracking-wider">
                                            Senior Instructor
                                        </p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
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
