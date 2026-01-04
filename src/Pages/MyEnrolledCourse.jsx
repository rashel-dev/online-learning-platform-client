import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Users, Clock, Star, PlayCircle, Eye, TrendingUp, Trash2, Search, Filter, MoreVertical } from "lucide-react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Spinner from "../Components/Spinner";

const MyEnrolledCourse = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        document.title = "My Enrolled Courses - PathShalaBD";
        if (!user) {
            setLoading(false);
            return;
        }
        fetchEnrollments();
    }, [user]);

    const fetchEnrollments = async () => {
        try {
            setLoading(true);
            const queryParam = user.uid ? `userId=${user.uid}` : `userEmail=${user.email}`;
            const res = await axios.get(`https://online-learning-platform-server-alpha.vercel.app/enrolled-courses?${queryParam}`);
            setEnrollments(Array.isArray(res.data) ? res.data : []);
            setError(null);
        } catch (err) {
            console.error("Failed to load enrolled courses", err);
            setError("Failed to load your enrolled courses");
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveCourse = async (enrollmentId, courseTitle) => {
        const result = await Swal.fire({
            title: "Remove Course?",
            text: `Are you sure you want to remove "${courseTitle}"?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EF4444",
            cancelButtonColor: "#6B7280",
            confirmButtonText: "Yes, remove it",
            background: document.documentElement.classList.contains('dark') ? '#111827' : '#fff',
            color: document.documentElement.classList.contains('dark') ? '#fff' : '#111827',
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`https://online-learning-platform-server-alpha.vercel.app/enrolled-courses/${enrollmentId}`);
                setEnrollments(enrollments.filter((e) => e._id !== enrollmentId));
                toast.success("Course removed successfully");
            } catch (err) {
                toast.error("Failed to remove course");
            }
        }
    };

    const filteredEnrollments = enrollments.filter(e => 
        e.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <Spinner />;

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">My Enrolled Courses</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Continue your learning journey and master new skills.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-white dark:bg-gray-900 px-6 py-3 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Enrolled</p>
                            <p className="text-xl font-black text-gray-900 dark:text-white leading-none">{enrollments.length}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search your courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white"
                    />
                </div>
                <button className="px-6 py-3.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 font-bold flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <Filter className="w-5 h-5" />
                    Filter
                </button>
            </div>

            {/* Courses Grid */}
            {filteredEnrollments.length === 0 ? (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-20 bg-white dark:bg-gray-900 rounded-[3rem] border border-dashed border-gray-200 dark:border-gray-800"
                >
                    <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                        <BookOpen className="w-10 h-10 text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No courses found</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-8">You haven't enrolled in any courses yet or no results match your search.</p>
                    <Link to="/courses" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                        Explore Courses
                        <Eye className="w-5 h-5" />
                    </Link>
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredEnrollments.map((enrollment) => (
                            <motion.div
                                layout
                                key={enrollment._id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden flex flex-col"
                            >
                                {/* Course Image */}
                                <div className="relative aspect-16/10 overflow-hidden">
                                    <img
                                        src={enrollment.thumbnail || enrollment.image}
                                        alt={enrollment.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1.5 rounded-xl bg-green-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                                            Active
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <button 
                                            onClick={() => navigate(`/courses/${enrollment.courseId}`)}
                                            className="w-full py-3 bg-white text-gray-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors"
                                        >
                                            <PlayCircle className="w-5 h-5" />
                                            Continue Learning
                                        </button>
                                    </div>
                                </div>

                                {/* Course Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors line-clamp-2 min-h-14">
                                        {enrollment.title}
                                    </h3>

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                                            <Users className="w-4 h-4 text-primary" />
                                            <span className="text-xs font-bold">{enrollment.instructor?.name || "Expert"}</span>
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                                        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                                            <Clock className="w-4 h-4 text-primary" />
                                            <span className="text-xs font-bold">{enrollment.duration || "12h"}</span>
                                        </div>
                                    </div>

                                    {/* Progress Placeholder */}
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Progress</span>
                                            <span className="text-xs font-black text-primary">0%</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: "0%" }}
                                                className="h-full bg-primary rounded-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-primary font-black">
                                            <FaBangladeshiTakaSign className="w-4 h-4" />
                                            <span>{enrollment.price || "0"}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={() => navigate(`/courses/${enrollment.courseId}`)}
                                                className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:text-primary transition-all"
                                                title="View Details"
                                            >
                                                <Eye className="w-5 h-5" />
                                            </button>
                                            <button 
                                                onClick={() => handleRemoveCourse(enrollment._id, enrollment.title)}
                                                className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all"
                                                title="Remove Course"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};

export default MyEnrolledCourse;

