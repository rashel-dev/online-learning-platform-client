import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Clock, 
    Users, 
    Star, 
    BookOpen, 
    CheckCircle2, 
    PlayCircle, 
    ArrowLeft, 
    Share2, 
    Heart,
    ShieldCheck,
    Globe,
    BarChart,
    Calendar,
    Award
} from "lucide-react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Spinner from "../Components/Spinner";

export default function CourseDetails() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [isEnrolling, setIsEnrolling] = useState(false);

    useEffect(() => {
        if (!id) return;
        fetchCourse();
    }, [id]);

    const fetchCourse = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`https://online-learning-platform-server-alpha.vercel.app/courses/${id}`);
            setCourse(res.data);
            setError(null);
            document.title = `${res.data.title} - PathShalaBD`;
        } catch (err) {
            console.error("Error fetching course:", err);
            setError("Course not found or failed to load.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!user || !id) return;
        const queryParam = user.uid ? `userId=${user.uid}&courseId=${id}` : `userEmail=${user.email}&courseId=${id}`;
        axios
            .get(`https://online-learning-platform-server-alpha.vercel.app/enrolled-courses?${queryParam}`)
            .then((res) => {
                if ((Array.isArray(res.data) && res.data.length > 0) || (res.data && res.data.courseId === id)) {
                    setIsEnrolled(true);
                }
            })
            .catch(() => {});
    }, [user, id]);

    const handleEnroll = async () => {
        if (!user) {
            navigate("/login", { state: { from: `/courses/${id}` } });
            return;
        }

        if (!course || isEnrolled || isEnrolling) return;

        setIsEnrolling(true);
        const newEnrollment = {
            courseId: course._id || id,
            userId: user.uid,
            userEmail: user.email,
            title: course.title,
            instructor: course.instructor,
            thumbnail: course.thumbnail,
            price: course.price,
            duration: course.duration,
        };

        try {
            const res = await axios.post("https://online-learning-platform-server-alpha.vercel.app/enrolled-courses", newEnrollment);
            if (res.data.insertedId || res.status === 201) {
                toast.success("Successfully enrolled in the course!");
                setIsEnrolled(true);
            } else {
                toast.info(res.data.message || "Successfully enrolled!");
                setIsEnrolled(true);
            }
        } catch (err) {
            if (err.response?.data?.message) {
                toast.info(err.response.data.message);
                setIsEnrolled(true);
            } else {
                toast.error("Failed to enroll in the course.");
            }
        } finally {
            setIsEnrolling(false);
        }
    };

    if (loading) return <Spinner />;

    if (error || !course) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-gray-900 rounded-[3rem] shadow-2xl p-12 max-w-lg w-full text-center border border-gray-100 dark:border-gray-800"
                >
                    <div className="w-24 h-24 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-8">
                        <AlertCircle className="w-12 h-12 text-red-500" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Course Not Found</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">{error || "The course you're looking for doesn't exist or has been removed."}</p>
                    <Link to="/courses" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Courses
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-20">
            {/* Hero Section */}
            <div className="relative bg-gray-900 pt-32 pb-48 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={course.thumbnail} alt="" className="w-full h-full object-cover blur-3xl scale-150" />
                </div>
                <div className="absolute inset-0 bg-linear-to-b from-gray-900/60 via-gray-900 to-gray-900"></div>
                
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-black uppercase tracking-widest border border-primary/20">
                                    {course.category || "General"}
                                </span>
                                {course.isBestseller && (
                                    <span className="px-4 py-1.5 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-black uppercase tracking-widest border border-yellow-500/20">
                                        Bestseller
                                    </span>
                                )}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                {course.title}
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                {course.description}
                            </p>
                            
                            <div className="flex flex-wrap items-center gap-8 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden">
                                        <img src={course.instructor?.avatar || "https://i.ibb.co/8z7zjNY/default-avatar.png"} alt={course.instructor?.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Instructor</p>
                                        <p className="text-white font-bold">{course.instructor?.name}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    <span className="text-white font-black text-lg">{course.rating || "4.8"}</span>
                                    <span className="text-gray-400 font-medium">({course.totalRatings || "1.2k"} ratings)</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <Users className="w-5 h-5" />
                                    <span className="font-bold">{course.studentsEnrolled || "2.5k"} Students</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* What you'll learn */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none"
                        >
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8">What you'll learn</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {(course.objectives?.length > 0 ? course.objectives : [
                                    "Master the core concepts from scratch",
                                    "Build real-world projects with best practices",
                                    "Understand advanced architectural patterns",
                                    "Implement industry-standard security measures"
                                ]).map((obj, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                        <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{obj}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Requirements */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none"
                        >
                            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8">Requirements</h2>
                            <ul className="space-y-4">
                                {(course.requirements?.length > 0 ? course.requirements : [
                                    "Basic understanding of the subject matter",
                                    "A computer with internet access",
                                    "Willingness to learn and practice"
                                ]).map((req, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-gray-600 dark:text-gray-400 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Curriculum */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-black text-gray-900 dark:text-white">Course Content</h2>
                                <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                                    {course.curriculum?.sections || "12"} Sections • {course.curriculum?.lectures || "84"} Lectures
                                </div>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((section) => (
                                    <div key={section} className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 flex items-center justify-between group hover:border-primary/30 transition-colors cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center text-primary shadow-sm">
                                                <PlayCircle className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white">Section {section}: Introduction to Advanced Concepts</h4>
                                                <p className="text-xs text-gray-500 font-medium">5 Lectures • 45 min</p>
                                            </div>
                                        </div>
                                        <span className="text-primary font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Preview</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Sticky Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-2xl shadow-primary/10"
                            >
                                <div className="relative aspect-video">
                                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-2xl group-hover:scale-110 transition-transform">
                                            <PlayCircle className="w-8 h-8 fill-primary" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-8 space-y-6">
                                    <div className="flex items-baseline gap-3">
                                        <div className="flex items-center gap-1 text-4xl font-black text-gray-900 dark:text-white">
                                            <FaBangladeshiTakaSign className="w-8 h-8" />
                                            <span>{course.price}</span>
                                        </div>
                                        {course.originalPrice > course.price && (
                                            <span className="text-xl text-gray-400 line-through font-bold">৳{course.originalPrice}</span>
                                        )}
                                    </div>

                                    <div className="space-y-4">
                                        <button 
                                            onClick={handleEnroll}
                                            disabled={isEnrolling || isEnrolled}
                                            className={`w-full py-5 rounded-2xl font-black text-lg shadow-xl transition-all flex items-center justify-center gap-3 ${
                                                isEnrolled 
                                                ? "bg-green-500 text-white cursor-default" 
                                                : "bg-primary text-white hover:scale-[1.02] active:scale-[0.98] shadow-primary/20"
                                            }`}
                                        >
                                            {isEnrolling ? (
                                                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : isEnrolled ? (
                                                <>
                                                    <ShieldCheck className="w-6 h-6" />
                                                    Already Enrolled
                                                </>
                                            ) : (
                                                <>
                                                    <BookOpen className="w-6 h-6" />
                                                    Enroll Now
                                                </>
                                            )}
                                        </button>
                                        <button className="w-full py-4 rounded-2xl border-2 border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white font-black hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                            Add to Wishlist
                                        </button>
                                    </div>

                                    <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                                        <p className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest">This course includes:</p>
                                        <div className="grid grid-cols-1 gap-3">
                                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm font-medium">
                                                <Clock className="w-4 h-4 text-primary" />
                                                <span>{course.duration || "12 Weeks"} duration</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm font-medium">
                                                <Globe className="w-4 h-4 text-primary" />
                                                <span>Full lifetime access</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm font-medium">
                                                <BarChart className="w-4 h-4 text-primary" />
                                                <span>{course.level || "Intermediate"} level</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm font-medium">
                                                <Award className="w-4 h-4 text-primary" />
                                                <span>Certificate of completion</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Share & Support */}
                            <div className="flex gap-4">
                                <button className="flex-1 py-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 font-bold hover:text-primary transition-colors shadow-sm">
                                    <Share2 className="w-5 h-5" />
                                    Share
                                </button>
                                <button className="flex-1 py-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 font-bold hover:text-red-500 transition-colors shadow-sm">
                                    <Heart className="w-5 h-5" />
                                    Like
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

