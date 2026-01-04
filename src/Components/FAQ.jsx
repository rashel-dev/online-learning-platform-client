import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

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
        <div className={`border-b border-gray-100 dark:border-gray-800 last:border-0 transition-all duration-300 ${isOpen ? "bg-primary/5 dark:bg-primary/10" : ""}`}>
            <button
                onClick={toggleOpen}
                className="w-full py-6 px-4 md:px-8 flex items-center justify-between text-left focus:outline-none"
            >
                <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? "text-primary" : "text-gray-900 dark:text-white"}`}>
                    {faq.question}
                </span>
                <div className={`shrink-0 ml-4 p-1 rounded-full transition-all duration-300 ${isOpen ? "bg-primary text-white rotate-180" : "bg-gray-100 dark:bg-gray-800 text-gray-500"}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 md:px-8 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
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
        <section className="py-12 bg-white dark:bg-gray-950 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-6"
                    >
                        <HelpCircle className="w-6 h-6" />
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
                    >
                        Frequently Asked <span className="text-primary">Questions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-400 text-lg"
                    >
                        Everything you need to know about PathshalaBD and how our platform works.
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden"
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
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 dark:text-gray-400">
                        Still have questions? {" "}
                        <a href="#contact" className="text-primary font-bold hover:underline">
                            Contact our support team
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
