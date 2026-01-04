import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Users, Clock, Trash2, Edit, TrendingUp, Eye, Search, Filter, Plus, MoreVertical, Star } from "lucide-react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router";
import Spinner from "../Components/Spinner";

const MyAddedCourse = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        document.title = "My Added Courses - PathShalaBD";
        if (user?.email) {
            fetchCourses();
        } else {
            setLoading(false);
        }
    }, [user]);

    const fetchCourses = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`https://online-learning-platform-server-alpha.vercel.app/courses/user/${user.email}`);
            setCourses(res.data);
            setError(null);
        } catch (err) {
            console.error(err);
            setError("Failed to load courses");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Delete Course?",
            text: "This action cannot be undone. All course data will be lost.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EF4444",
            cancelButtonColor: "#6B7280",
            confirmButtonText: "Yes, delete it",
            background: document.documentElement.classList.contains('dark') ? '#111827' : '#fff',
            color: document.documentElement.classList.contains('dark') ? '#fff' : '#111827',
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`https://online-learning-platform-server-alpha.vercel.app/courses/${id}`);
                setCourses(courses.filter((course) => course._id !== id));
                Swal.fire({
                    title: "Deleted!",
                    text: "Course has been removed.",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                    background: document.documentElement.classList.contains('dark') ? '#111827' : '#fff',
                    color: document.documentElement.classList.contains('dark') ? '#fff' : '#111827',
                });
            } catch (err) {
                Swal.fire("Error", "Failed to delete course", "error");
            }
        }
    };

    const filteredCourses = courses.filter(c => 
        (c.title || c.course_name).toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <Spinner />;

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">My Added Courses</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Manage and monitor the performance of your courses.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-white dark:bg-gray-900 px-6 py-3 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Courses</p>
                            <p className="text-xl font-black text-gray-900 dark:text-white leading-none">{courses.length}</p>
                        </div>
                    </div>
                    <Link to="/dashboard/add-course" className="hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                        <Plus className="w-5 h-5" />
                        Create New
                    </Link>
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
            {filteredCourses.length === 0 ? (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-20 bg-white dark:bg-gray-900 rounded-[3rem] border border-dashed border-gray-200 dark:border-gray-800"
                >
                    <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                        <BookOpen className="w-10 h-10 text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No courses found</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-8">You haven't added any courses yet or no results match your search.</p>
                    <Link to="/dashboard/add-course" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                        Add Your First Course
                        <Plus className="w-5 h-5" />
                    </Link>
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredCourses.map((course) => (
                            <motion.div
                                layout
                                key={course._id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden flex flex-col"
                            >
                                {/* Course Image */}
                                <div className="relative aspect-16/10 overflow-hidden">
                                    <img
                                        src={course.thumbnail || course.image}
                                        alt={course.title || course.course_name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm text-primary text-[10px] font-black uppercase tracking-widest shadow-lg">
                                            {course.category || "General"}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div className="flex gap-2 w-full">
                                            <button 
                                                onClick={() => navigate(`/dashboard/edit-course/${course._id}`)}
                                                className="flex-1 py-3 bg-white text-gray-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors"
                                            >
                                                <Edit className="w-4 h-4" />
                                                Edit
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(course._id)}
                                                className="p-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Course Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors line-clamp-2 min-h-14">
                                        {course.title || course.course_name}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-2xl">
                                            <div className="flex items-center gap-2 text-gray-400 mb-1">
                                                <Users className="w-3.5 h-3.5" />
                                                <span className="text-[10px] font-black uppercase tracking-wider">Students</span>
                                            </div>
                                            <p className="text-sm font-black text-gray-900 dark:text-white">{course.studentsEnrolled || course.students_enrolled || 0}</p>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-2xl">
                                            <div className="flex items-center gap-2 text-gray-400 mb-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                <span className="text-[10px] font-black uppercase tracking-wider">Duration</span>
                                            </div>
                                            <p className="text-sm font-black text-gray-900 dark:text-white truncate">{course.duration || "Self-paced"}</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-primary font-black text-lg">
                                            <FaBangladeshiTakaSign className="w-5 h-5" />
                                            <span>{course.price || "0"}</span>
                                        </div>
                                        <button 
                                            onClick={() => navigate(`/courses/${course._id}`)}
                                            className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:text-primary transition-all"
                                            title="View Public Page"
                                        >
                                            <Eye className="w-5 h-5" />
                                        </button>
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

export default MyAddedCourse;

