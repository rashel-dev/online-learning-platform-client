import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Award, Headphones, CheckCircle2, Zap, Target, Shield } from "lucide-react";

const features = [
    {
        id: 1,
        icon: BookOpen,
        title: "Expert Instructors",
        desc: "Learn from industry professionals and experienced educators dedicated to your success.",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        id: 2,
        icon: Users,
        title: "Interactive Learning",
        desc: "Engage in live discussions, peer reviews, and collaborative hands-on projects.",
        color: "text-primary",
        bgColor: "bg-primary/10",
    },
    {
        id: 3,
        icon: Award,
        title: "Certified Courses",
        desc: "Gain industry-recognized certificates to validate your skills and boost your career.",
        color: "text-secondary",
        bgColor: "bg-secondary/10",
    },
    {
        id: 4,
        icon: Headphones,
        title: "24/7 Support",
        desc: "Our dedicated support team is always available to help you with any questions.",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-950 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-primary/10 text-primary mb-6"
                    >
                        Our Advantages
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-tight"
                    >
                        Why Choose <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">PathshalaBD</span>?
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed"
                    >
                        We provide a comprehensive learning ecosystem designed to help you master new skills and achieve your professional goals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="h-full p-10 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5 group-hover:-translate-y-2 flex flex-col">
                                <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} ${feature.color} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium mb-8">
                                    {feature.desc}
                                </p>
                                <div className="mt-auto flex items-center text-primary font-black uppercase tracking-widest text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                    <span className="mr-2">Learn More</span>
                                    <Zap className="w-4 h-4 fill-current" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

