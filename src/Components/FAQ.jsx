import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import { Link } from "react-router";

const faqs = [
    {
        id: 1,
        question: "How do I enroll in a course?",
        answer: "Enrolling is easy! Simply browse our course catalog, click on a course you're interested in, and hit the 'Enroll Now' button. If it's a paid course, you'll be guided through our secure checkout process.",
    },
    {
        id: 2,
        question: "Are the certificates industry-recognized?",
        answer: "Yes! Our certificates are recognized by leading companies in the industry. They serve as a testament to your skills and can be easily shared on LinkedIn or added to your resume.",
    },
    {
        id: 3,
        question: "Can I access the courses on mobile?",
        answer: "Absolutely! PathshalaBD is fully responsive. You can learn on your laptop, tablet, or smartphone anytime, anywhere. We also offer offline viewing options for many of our courses.",
    },
    {
        id: 4,
        question: "Do I get lifetime access to the courses?",
        answer: "Yes, once you enroll in a course, you have lifetime access to the course materials, including any future updates made by the instructor.",
    },
    {
        id: 5,
        question: "What if I'm not satisfied with a course?",
        answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your learning experience, you can request a full refund within 30 days of purchase, no questions asked.",
    },
];

const FAQItem = ({ faq, isOpen, toggleOpen }) => {
    return (
        <div className={`mb-4 rounded-3xl transition-all duration-500 ${isOpen ? "bg-primary/5 dark:bg-primary/10 border-primary/20 shadow-lg shadow-primary/5" : "bg-gray-50 dark:bg-gray-900 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800"} border`}>
            <button
                onClick={toggleOpen}
                className="w-full py-6 px-8 flex items-center justify-between text-left focus:outline-none"
            >
                <span className={`text-lg font-black transition-colors duration-500 ${isOpen ? "text-primary" : "text-gray-900 dark:text-white"}`}>
                    {faq.question}
                </span>
                <div className={`shrink-0 ml-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-primary text-white rotate-180" : "bg-white dark:bg-gray-800 text-gray-500 shadow-sm"}`}>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="px-8 pb-8 text-gray-500 dark:text-gray-400 leading-relaxed text-lg font-medium">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openId, setOpenId] = useState(1);

    return (
        <section className="py-32 bg-white dark:bg-gray-950 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-8"
                    >
                        <HelpCircle className="w-8 h-8" />
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-tight"
                    >
                        Frequently Asked <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Questions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Everything you need to know about PathshalaBD and how our platform works.
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                >
                    {faqs.map((faq) => (
                        <FAQItem 
                            key={faq.id} 
                            faq={faq} 
                            isOpen={openId === faq.id} 
                            toggleOpen={() => setOpenId(openId === faq.id ? null : faq.id)} 
                        />
                    ))}
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 p-10 rounded-[3rem] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center relative overflow-hidden group"
                >
                    <div className="absolute -right-8 -bottom-8 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-500">
                        <MessageCircle className="w-40 h-40" />
                    </div>
                    
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 relative z-10">Still have questions?</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto relative z-10">
                        Can't find the answer you're looking for? Please chat with our friendly team.
                    </p>
                    <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/20 relative z-10"
                    >
                        Contact Support
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;

