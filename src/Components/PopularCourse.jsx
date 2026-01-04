import React, { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Users, Star, ArrowRight, BookOpen } from "lucide-react";
import Spinner from "./Spinner";

const PopularCourse = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageErrors, setImageErrors] = useState({});

    useEffect(() => {
        fetchPopularCourses();
    }, []);

    const fetchPopularCourses = async () => {
        try {
            setLoading(true);
            const res = await axios.get("https://online-learning-platform-server-alpha.vercel.app/courses/popular-courses");
            setCourses(res.data || []);
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Unknown error");
        } finally {
            setLoading(false);
        }
    };

    const handleImageError = (id) => {
        setImageErrors((prev) => ({ ...prev, [id]: true }));
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    if(loading){
        return <Spinner></Spinner>
    }

    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }} 
                        className="max-w-2xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary mb-4">
                            Trending Now
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                            Our Most <span className="text-primary">Popular</span> Courses
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            Join thousands of students learning from the best instructors in the industry.
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/courses" className="group flex items-center gap-2 text-primary font-bold hover:text-primary-focus transition-colors">
                            Explore All Courses
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
                    variants={containerVariants} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }}
                >
                    {courses.map((course, index) => (
                        <motion.div
                            key={course._id || index}
                            variants={cardVariants}
                            className="group bg-accent dark:bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
                        >
                            {/* Card Image */}
                            <div className="relative aspect-16/10 overflow-hidden">
                                {!imageErrors[course._id] && course.thumbnail ? (
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        onError={() => handleImageError(course._id)}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/20 to-secondary/20">
                                        <BookOpen className="w-12 h-12 text-primary/40" />
                                    </div>
                                )}
                                
                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-xs font-bold text-primary shadow-sm">
                                        {course.category || "Popular"}
                                    </span>
                                </div>

                                {/* Price Overlay */}
                                <div className="absolute bottom-4 right-4">
                                    <div className="px-4 py-2 rounded-xl bg-primary text-white font-bold shadow-lg">
                                        ৳{course.price}
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col grow">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="text-sm font-bold">{course.rating || "4.8"}</span>
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                        <Users className="w-4 h-4" />
                                        <span className="text-sm font-medium">{course.studentsEnrolled || 0}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2 min-h-14">
                                    {course.title}
                                </h3>
                                
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 grow">
                                    {course.description}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-700/50 mt-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                            {course.instructor?.name?.charAt(0) || "I"}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Instructor</span>
                                            <span className="text-sm font-bold text-gray-700 dark:text-gray-300 truncate max-w-[120px]">
                                                {course.instructor?.name || "Expert Instructor"}
                                            </span>
                                        </div>
                                    </div>
                                    <Link to={`/courses/${course._id}`} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition text-sm font-semibold">
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PopularCourse;
