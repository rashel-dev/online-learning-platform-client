import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Web Developer",
        content: "The courses on PathshalaBD are top-notch. The instructors are industry experts who really know how to teach complex concepts simply.",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Data Scientist",
        content: "I've taken several data science courses here, and they've been instrumental in helping me land my current role. Highly recommended!",
        avatar: "https://i.pravatar.cc/150?u=michael",
        rating: 5,
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "UI/UX Designer",
        content: "The community support and interactive projects make learning so much more engaging. I love how practical the assignments are.",
        avatar: "https://i.pravatar.cc/150?u=elena",
        rating: 4,
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-950 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-secondary/10 text-secondary mb-6"
                        >
                            Success Stories
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight"
                        >
                            What Our <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary">Students</span> Say
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 dark:text-gray-400 max-w-sm font-medium"
                    >
                        Join thousands of satisfied learners who have transformed their careers with PathshalaBD.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="h-full bg-gray-50 dark:bg-gray-900 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-800 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-secondary/5 group-hover:-translate-y-2 flex flex-col">
                                <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                    <Quote className="w-16 h-16 text-secondary" />
                                </div>
                                
                                <div className="flex gap-1 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i} 
                                            className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-700"}`} 
                                        />
                                    ))}
                                </div>

                                <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 font-medium leading-relaxed italic relative z-10">
                                    "{testimonial.content}"
                                </p>

                                <div className="mt-auto flex items-center gap-5">
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white dark:border-gray-800 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                            <img 
                                                src={testimonial.avatar} 
                                                alt={testimonial.name} 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full border-4 border-gray-50 dark:border-gray-900 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-gray-900 dark:text-white group-hover:text-secondary transition-colors">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-500 font-bold uppercase tracking-widest">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Buttons Placeholder */}
                <div className="mt-16 flex justify-center gap-4">
                    <button className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

