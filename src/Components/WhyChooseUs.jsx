import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Award, Headphones, CheckCircle2 } from "lucide-react";

const features = [
    {
        id: 1,
        icon: <BookOpen className="w-8 h-8" />,
        title: "Expert Instructors",
        desc: "Learn from industry professionals and experienced educators dedicated to your success.",
        color: "bg-blue-500/10 text-blue-600",
    },
    {
        id: 2,
        icon: <Users className="w-8 h-8" />,
        title: "Interactive Learning",
        desc: "Engage in live discussions, peer reviews, and collaborative hands-on projects.",
        color: "bg-primary/10 text-primary",
    },
    {
        id: 3,
        icon: <Award className="w-8 h-8" />,
        title: "Certified Courses",
        desc: "Gain industry-recognized certificates to validate your skills and boost your career.",
        color: "bg-secondary/10 text-secondary",
    },
    {
        id: 4,
        icon: <Headphones className="w-8 h-8" />,
        title: "24/7 Support",
        desc: "Our dedicated support team is always available to help you with any questions.",
        color: "bg-purple-500/10 text-purple-600",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-12 bg-white dark:bg-gray-950 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary mb-4"
                    >
                        Our Advantages
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }} 
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
                    >
                        Why Choose <span className="text-primary">PathshalaBD</span>?
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400"
                    >
                        We provide a comprehensive learning ecosystem designed to help you master new skills and achieve your professional goals.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-neutral dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.desc}
                            </p>
                            <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <CheckCircle2 className="w-5 h-5 mr-2" />
                                <span className="text-sm font-bold uppercase tracking-wider">Learn More</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
