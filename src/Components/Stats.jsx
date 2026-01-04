import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Award, Star } from "lucide-react";

const stats = [
    {
        id: 1,
        icon: <Users className="w-8 h-8" />,
        value: "15,000+",
        label: "Active Students",
        color: "text-blue-500",
    },
    {
        id: 2,
        icon: <BookOpen className="w-8 h-8" />,
        value: "1,200+",
        label: "Online Courses",
        color: "text-primary",
    },
    {
        id: 3,
        icon: <Award className="w-8 h-8" />,
        value: "250+",
        label: "Expert Mentors",
        color: "text-secondary",
    },
    {
        id: 4,
        icon: <Star className="w-8 h-8" />,
        value: "4.9/5",
        label: "Average Rating",
        color: "text-yellow-500",
    },
];

const Stats = () => {
    return (
        <section className="py-12 bg-primary/5 dark:bg-gray-900/50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group text-center p-6 rounded-3xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
                        >
                            <div className={`inline-flex items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg mb-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-bold uppercase tracking-widest text-xs">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
