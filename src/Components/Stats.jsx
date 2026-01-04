import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Award, Star, TrendingUp, Zap, Target, Heart } from "lucide-react";

const stats = [
    {
        id: 1,
        icon: Users,
        value: "15,000+",
        label: "Active Students",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/20",
    },
    {
        id: 2,
        icon: BookOpen,
        value: "1,200+",
        label: "Online Courses",
        color: "text-primary",
        bgColor: "bg-primary/10",
        borderColor: "border-primary/20",
    },
    {
        id: 3,
        icon: Award,
        value: "250+",
        label: "Expert Mentors",
        color: "text-secondary",
        bgColor: "bg-secondary/10",
        borderColor: "border-secondary/20",
    },
    {
        id: 4,
        icon: Star,
        value: "4.9/5",
        label: "Average Rating",
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
        borderColor: "border-yellow-500/20",
    },
];

const Stats = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className={`h-full p-8 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5 group-hover:-translate-y-2`}>
                                <div className={`w-16 h-16 rounded-2xl ${stat.bgColor} flex items-center justify-center ${stat.color} mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                
                                <div className="space-y-2">
                                    <h3 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                                        {stat.value}
                                    </h3>
                                    <p className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                        {stat.label}
                                    </p>
                                </div>

                                {/* Subtle background icon */}
                                <div className="absolute top-8 right-8 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-10 transition-opacity">
                                    <stat.icon className="w-20 h-20" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

