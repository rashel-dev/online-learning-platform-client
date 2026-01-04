import React, { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Users, Star } from "lucide-react";
import Spinner from "./Spinner";

export default function BannerWithCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Fetch popular courses
    useEffect(() => {
        fetchPopularCourses();
    }, []);

    const fetchPopularCourses = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://online-learning-platform-server-alpha.vercel.app/courses/popular-courses");
            setCourses(response.data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.error("Error fetching courses:", err);
        }
    };

    // Auto-play slider
    useEffect(() => {
        if (courses.length === 0) return;

        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % courses.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [courses.length]);

    // Animation variants
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95,
        }),
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    if (loading) {
        return <Spinner></Spinner>;
    }

    if (courses.length === 0) return null;

    const currentCourse = courses[currentIndex];

    return (
        <div className="relative w-full h-[85vh] md:h-[80vh] overflow-hidden bg-linear-to-br from-neutral via-white to-accent dark:from-gray-950 dark:via-gray-900 dark:to-primary/10 transition-colors duration-500 px-8">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl dark:opacity-30"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl dark:opacity-20"
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, -40, 0],
                        y: [0, 60, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]"></div>
            </div>

            {/* Slider Container */}
            <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 200, damping: 25 },
                            opacity: { duration: 0.4 },
                        }}
                        className="absolute inset-0 flex items-center"
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-12">
                            {/* Left Content */}
                            <div className="space-y-8 text-left z-10">
                                <motion.div custom={0} variants={contentVariants} initial="hidden" animate="visible" className="flex items-center gap-3">
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 dark:bg-primary/20 dark:text-primary-light">
                                        <Star className="w-3.5 h-3.5 mr-1.5 fill-current" />
                                        Featured Course
                                    </span>
                                    <span className="h-px w-12 bg-gray-300 dark:bg-gray-700"></span>
                                </motion.div>

                                <div className="space-y-4">
                                    <motion.h1
                                        custom={1}
                                        variants={contentVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight"
                                    >
                                        {currentCourse.title}
                                    </motion.h1>

                                    <motion.p
                                        custom={2}
                                        variants={contentVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed line-clamp-2 md:line-clamp-3"
                                    >
                                        {currentCourse.description}
                                    </motion.p>
                                </div>

                                {/* Course Meta */}
                                <motion.div
                                    custom={3}
                                    variants={contentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="flex flex-wrap gap-y-4 gap-x-8 text-gray-700 dark:text-gray-300"
                                >
                                    {currentCourse.instructor && (
                                        <div className="flex items-center gap-2.5 group">
                                            <div className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 group-hover:text-primary transition-colors">
                                                <BookOpen className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Instructor</p>
                                                <p className="font-semibold">{typeof currentCourse.instructor === "object" ? currentCourse.instructor.name : currentCourse.instructor}</p>
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2.5 group">
                                        <div className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 group-hover:text-primary transition-colors">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Enrolled</p>
                                            <p className="font-semibold">{currentCourse.studentsEnrolled || 0} Students</p>
                                        </div>
                                    </div>
                                    {currentCourse.rating && (
                                        <div className="flex items-center gap-2.5 group">
                                            <div className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 group-hover:text-yellow-500 transition-colors">
                                                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Rating</p>
                                                <p className="font-semibold">{currentCourse.rating} / 5.0</p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>

                                
                            </div>

                            {/* Right Image/Card */}
                            <motion.div
                                custom={5}
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                className="hidden lg:block relative"
                            >
                                <div className="relative z-10 group">
                                    <div className="relative aspect-video lg:aspect-square xl:aspect-4/3 rounded-xl overflow-hidden transform group-hover:rotate-1 transition-transform duration-500">
                                       
                                            <img src={currentCourse.thumbnail} alt={currentCourse.title} className="w-full h-full object-cover" />
                                        
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}