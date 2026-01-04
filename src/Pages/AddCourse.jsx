import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { 
    BookOpen, 
    Image as ImageIcon, 
    DollarSign, 
    Clock, 
    Tag, 
    FileText, 
    Star, 
    User, 
    Mail, 
    Link as LinkIcon,
    Plus,
    CheckCircle2,
    AlertCircle
} from "lucide-react";

const AddCourse = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        price: "",
        duration: "",
        category: "",
        description: "",
        isFeatured: false,
        instructorName: "",
        instructorEmail: "",
        instructorPhoto: "",
    });

    useEffect(() => {
        document.title = "Add New Course - PathShalaBD";
        if (user) {
            setFormData((prev) => ({
                ...prev,
                instructorName: user.displayName || "",
                instructorEmail: user.email || "",
                instructorPhoto: user.photoURL || "https://i.ibb.co/8z7zjNY/default-avatar.png",
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (parseFloat(formData.price) > 99999999) {
            toast.error("Course price cannot exceed 99,999,999 ৳");
            setLoading(false);
            return;
        }

        try {
            const instructorInfo = {
                name: formData.instructorName || user?.displayName || "Unknown Instructor",
                bio: null,
                avatar: formData.instructorPhoto || user?.photoURL || "https://i.ibb.co/8z7zjNY/default-avatar.png",
                email: formData.instructorEmail || user?.email || "not_provided",
                rating: null,
            };

            const newCourse = {
                title: formData.title,
                description: formData.description,
                instructor: instructorInfo,
                category: formData.category,
                subcategory: null,
                level: null,
                price: parseFloat(formData.price),
                originalPrice: null,
                currency: "USD",
                duration: formData.duration,
                language: null,
                subtitles: [],
                thumbnail: formData.image,
                rating: null,
                totalRatings: null,
                studentsEnrolled: 0,
                lastUpdated: new Date().toISOString().split("T")[0],
                objectives: [],
                requirements: [],
                curriculum: null,
                features: [],
                tags: [],
                isBestseller: false,
                isNew: true,
                isFeatured: formData.isFeatured,
                createdAt: new Date().toISOString(),
                discount: null,
            };

            const res = await axios.post("https://online-learning-platform-server-alpha.vercel.app/courses", newCourse);

            if (res.data.insertedId) {
                toast.success("🎉 Course Added Successfully!");
                setFormData({
                    title: "",
                    image: "",
                    price: "",
                    duration: "",
                    category: "",
                    description: "",
                    isFeatured: false,
                    instructorName: user?.displayName || "",
                    instructorEmail: user?.email || "",
                    instructorPhoto: user?.photoURL || "https://i.ibb.co/8z7zjNY/default-avatar.png",
                });
            }
        } catch (error) {
            toast.error("❌ Failed to add course. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const inputClasses = "w-full pl-12 pr-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600";
    const labelClasses = "block text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2 ml-1";

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-10">
                <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Create New Course</h1>
                <p className="text-gray-500 dark:text-gray-400 font-medium">Share your knowledge with the world and inspire others.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Instructor Info Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-gray-800 shadow-sm"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <User className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Instructor Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className={labelClasses}>Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input type="text" value={formData.instructorName} readOnly className={inputClasses + " opacity-60 cursor-not-allowed"} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className={labelClasses}>Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input type="email" value={formData.instructorEmail} readOnly className={inputClasses + " opacity-60 cursor-not-allowed"} />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Course Details Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-gray-800 shadow-sm"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Course Details</h3>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className={labelClasses}>Course Title</label>
                            <div className="relative group">
                                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="e.g. Advanced React Mastery"
                                    className={inputClasses}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className={labelClasses}>Category</label>
                                <div className="relative group">
                                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className={inputClasses + " appearance-none"}
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="App Development">App Development</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="Design">Design</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                        <option value="Machine Learning">Machine Learning</option>
                                        <option value="Video Editing">Video Editing</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className={labelClasses}>Thumbnail URL</label>
                                <div className="relative group">
                                    <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="url"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        placeholder="https://images.unsplash.com/..."
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className={labelClasses}>Price (৳)</label>
                                <div className="relative group">
                                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        placeholder="0.00"
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className={labelClasses}>Duration</label>
                                <div className="relative group">
                                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="text"
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleChange}
                                        placeholder="e.g. 12 Weeks"
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className={labelClasses}>Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="5"
                                placeholder="What will students learn in this course?"
                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
                                required
                            />
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                            <input
                                type="checkbox"
                                id="isFeatured"
                                name="isFeatured"
                                checked={formData.isFeatured}
                                onChange={handleChange}
                                className="w-5 h-5 rounded-lg border-primary text-primary focus:ring-primary cursor-pointer"
                            />
                            <label htmlFor="isFeatured" className="text-sm font-bold text-gray-700 dark:text-gray-300 cursor-pointer">
                                Mark as Featured Course
                            </label>
                            <Star className={`w-4 h-4 ml-auto ${formData.isFeatured ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
                        </div>
                    </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    type="submit"
                    className="w-full py-5 bg-primary text-white rounded-4xl font-black text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                >
                    {loading ? (
                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            <Plus className="w-6 h-6" />
                            Publish Course
                        </>
                    )}
                </motion.button>
            </form>
        </div>
    );
};

export default AddCourse;

