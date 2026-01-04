import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

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
        <section className="py-12 bg-white dark:bg-gray-950 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-1/4 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-secondary/10 text-secondary mb-4"
                    >
                        Success Stories
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
                    >
                        What Our <span className="text-secondary">Students</span> Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-400 text-lg"
                    >
                        Join thousands of satisfied learners who have transformed their careers with PathshalaBD.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-gray-50 dark:bg-gray-900/50 p-8 rounded-4xl border border-gray-100 dark:border-gray-800 relative hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-300 hover:-translate-y-2"
                        >
                            <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                                    />
                                ))}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 italic leading-relaxed relative z-10">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name} 
                                        className="w-14 h-14 rounded-2xl object-cover border-2 border-white dark:border-gray-800 shadow-md"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-secondary transition-colors">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
