import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router";
import { 
    BookOpen, 
    Image as ImageIcon, 
    DollarSign, 
    Clock, 
    Tag, 
    FileText, 
    Star, 
    ArrowLeft,
    Save,
    Trash2
} from "lucide-react";
import Spinner from "../Components/Spinner";

const UpdateCourse = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        price: "",
        duration: "",
        category: "",
        description: "",
        isFeatured: false,
    });

    useEffect(() => {
        if (id) {
            fetchCourse();
        }
    }, [id]);

    const fetchCourse = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`https://online-learning-platform-server-alpha.vercel.app/courses/${id}`);
            const course = res.data;
            setFormData({
                title: course.title || course.course_name || "",
                image: course.thumbnail || course.image || "",
                price: course.price || "",
                duration: course.duration || "",
                category: course.category || "",
                description: course.description || "",
                isFeatured: course.isFeatured || false,
            });
            document.title = `Update: ${course.title || "Course"} - PathShalaBD`;
        } catch (err) {
            console.error("Error fetching course:", err);
            toast.error("Failed to load course data.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdating(true);

        try {
            const updatedCourse = {
                title: formData.title,
                price: parseFloat(formData.price),
                category: formData.category,
                description: formData.description,
                duration: formData.duration,
                thumbnail: formData.image,
                image: formData.image,
                isFeatured: formData.isFeatured,
            };

            const res = await axios.patch(`https://online-learning-platform-server-alpha.vercel.app/courses/${id}`, updatedCourse);

            if (res.data.modifiedCount > 0 || res.data.matchedCount > 0) {
                toast.success("🎉 Course Updated Successfully!");
                setTimeout(() => {
                    navigate("/dashboard/my-added-course");
                }, 1500);
            } else {
                toast.info("No changes were made to the course.");
            }
        } catch (error) {
            toast.error("❌ Failed to update course. Please try again.");
            console.error(error);
        } finally {
            setUpdating(false);
        }
    };

    if (loading) return <Spinner />;

    const inputClasses = "w-full pl-12 pr-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600";
    const labelClasses = "block text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2 ml-1";

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-10 flex items-center justify-between">
                <div>
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-bold mb-4 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Courses
                    </button>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Update Course</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Refine your course content and keep it up to date.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Course Details Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-gray-800 shadow-sm"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Course Information</h3>
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
                    disabled={updating}
                    type="submit"
                    className="w-full py-5 bg-primary text-white rounded-4xl font-black text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                >
                    {updating ? (
                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            <Save className="w-6 h-6" />
                            Save Changes
                        </>
                    )}
                </motion.button>
            </form>
        </div>
    );
};

export default UpdateCourse;

