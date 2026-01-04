import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, BookOpen, Users, Star, Clock, ArrowRight, LayoutGrid, List, X, Award } from "lucide-react";
import Spinner from "../Components/Spinner";

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [viewMode, setViewMode] = useState("grid"); // grid or list

    useEffect(() => {
        document.title = "PathShalaBD - All Courses";
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://online-learning-platform-server-alpha.vercel.app/courses");
            setCourses(response.data);
            setError(null);
        } catch (err) {
            setError("Failed to load courses. Please try again later.");
            console.error("Error fetching courses:", err);
        } finally {
            setLoading(false);
        }
    };

    const filteredCourses = courses.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === "all" || course.category === filter;
        return matchesSearch && matchesFilter;
    });

    const categories = ["all", ...new Set(courses.map((c) => c.category))];

    if (loading) return <Spinner />;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            {/* Hero Header */}
            <section className="relative py-16 bg-primary/5 dark:bg-gray-900/50 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary mb-4">
                            Course Catalog
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Master New Skills with <br />
                            <span className="text-primary">Expert-Led Courses</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Explore our comprehensive library of courses designed to help you achieve your professional goals and personal growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Search and Filter Bar */}
                <div className="flex flex-col lg:flex-row gap-6 mb-12">
                    {/* Search */}
                    <div className="flex-1 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search for courses, skills, or instructors..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm dark:text-white"
                        />
                        {searchTerm && (
                            <button 
                                onClick={() => setSearchTerm("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center gap-2 bg-white dark:bg-gray-900 p-1.5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                        <button 
                            onClick={() => setViewMode("grid")}
                            className={`p-2.5 rounded-xl transition-all ${viewMode === "grid" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"}`}
                        >
                            <LayoutGrid className="w-5 h-5" />
                        </button>
                        <button 
                            onClick={() => setViewMode("list")}
                            className={`p-2.5 rounded-xl transition-all ${viewMode === "list" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"}`}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="lg:w-64 shrink-0">
                        <div className="sticky top-24 space-y-8">
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <Filter className="w-4 h-4 text-primary" />
                                    Categories
                                </h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setFilter(category)}
                                            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${
                                                filter === category 
                                                ? "bg-primary/10 text-primary" 
                                                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900"
                                            }`}
                                        >
                                            <span className="capitalize">{category === "all" ? "All Courses" : category}</span>
                                            {filter === category && <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Promo Card */}
                            <div className="p-6 rounded-4xl bg-linear-to-br from-primary to-secondary text-white shadow-xl shadow-primary/20 relative overflow-hidden group">
                                <div className="absolute -right-8 -bottom-8 opacity-20 group-hover:scale-110 transition-transform duration-500">
                                    <Award className="w-32 h-32" />
                                </div>
                                <h4 className="text-lg font-bold mb-2 relative z-10">Get Certified</h4>
                                <p className="text-white/80 text-sm mb-4 relative z-10">Boost your career with industry-recognized certificates.</p>
                                <button className="w-full py-2.5 bg-white text-primary font-bold rounded-xl text-sm hover:bg-white/90 transition-colors relative z-10">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Course Grid/List */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-8">
                            <p className="text-gray-500 dark:text-gray-400 font-medium">
                                Showing <span className="text-gray-900 dark:text-white font-bold">{filteredCourses.length}</span> results
                            </p>
                        </div>

                        {filteredCourses.length === 0 ? (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20 bg-white dark:bg-gray-900 rounded-[3rem] border border-dashed border-gray-200 dark:border-gray-800"
                            >
                                <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <BookOpen className="w-10 h-10 text-gray-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No courses found</h3>
                                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters to find what you're looking for.</p>
                                <button 
                                    onClick={() => {setSearchTerm(""); setFilter("all");}}
                                    className="mt-6 text-primary font-bold hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </motion.div>
                        ) : (
                            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" : "space-y-6"}>
                                <AnimatePresence mode="popLayout">
                                    {filteredCourses.map((course) => (
                                        <motion.div
                                            layout
                                            key={course._id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className={`group bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden flex ${viewMode === "list" ? "flex-col md:flex-row" : "flex-col"}`}
                                        >
                                            {/* Thumbnail */}
                                            <div className={`relative overflow-hidden ${viewMode === "list" ? "md:w-72 shrink-0" : "aspect-16/10"}`}>
                                                <img 
                                                    src={course.thumbnail} 
                                                    alt={course.title} 
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                                    <span className="px-3 py-1 rounded-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-[10px] font-bold text-primary uppercase tracking-wider shadow-sm">
                                                        {course.category}
                                                    </span>
                                                    {course.isBestseller && (
                                                        <span className="px-3 py-1 rounded-lg bg-yellow-400 text-yellow-900 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                                            Bestseller
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="absolute bottom-4 right-4">
                                                    <div className="px-4 py-2 rounded-xl bg-primary text-white font-bold shadow-lg text-sm">
                                                        ৳{course.price}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 md:p-8 flex flex-col flex-1">
                                                <div className="flex items-center gap-4 mb-4 text-xs font-bold text-gray-500 dark:text-gray-400">
                                                    <div className="flex items-center gap-1.5 text-yellow-500">
                                                        <Star className="w-4 h-4 fill-current" />
                                                        <span>{course.rating || "4.8"}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <Users className="w-4 h-4" />
                                                        <span>{course.studentsEnrolled || 0}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{course.duration || "12h"}</span>
                                                    </div>
                                                </div>

                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                                    {course.title}
                                                </h3>
                                                
                                                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-6 leading-relaxed">
                                                    {course.description}
                                                </p>

                                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
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
                                                    <Link 
                                                        to={`/courses/${course._id}`} 
                                                        className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                                                    >
                                                        Details
                                                        <ArrowRight className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AllCourses;

