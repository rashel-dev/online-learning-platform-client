import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    LayoutDashboard, 
    BookOpen, 
    PlusCircle, 
    LogOut, 
    Menu, 
    X, 
    ChevronRight,
    Home,
    Settings,
    Bell,
    Search,
    User
} from 'lucide-react';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import Logo from '../Components/ui/Logo';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logOutUser } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success("Logged out successfully");
                navigate("/login");
            })
            .catch(console.error);
    };

    const menuItems = [
        { icon: <LayoutDashboard className="w-5 h-5" />, label: "My Enrolled", path: "/dashboard", end: true },
        { icon: <BookOpen className="w-5 h-5" />, label: "My Added Courses", path: "/dashboard/my-added-course" },
        { icon: <PlusCircle className="w-5 h-5" />, label: "Add New Course", path: "/dashboard/add-course" },
    ];

    const sidebarVariants = {
        open: { width: 280, transition: { duration: 0.3, ease: "easeInOut" } },
        closed: { width: 88, transition: { duration: 0.3, ease: "easeInOut" } }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex transition-colors duration-300">
            {/* Desktop Sidebar */}
            <motion.aside
                initial={false}
                animate={isSidebarOpen ? "open" : "closed"}
                variants={sidebarVariants}
                className="hidden lg:flex flex-col bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 sticky top-0 h-screen z-40 shadow-xl shadow-gray-200/50 dark:shadow-none"
            >
                {/* Sidebar Header */}
                <div className="h-20 flex items-center px-6 mb-6">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="shrink-0" onClick={() => navigate("/")}>
                            <Logo />
                        </div>
                        <AnimatePresence>
                            {isSidebarOpen && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="font-black text-xl tracking-tight text-gray-900 dark:text-white whitespace-nowrap"
                                >
                                    Pathshala<span className="text-primary">BD</span>
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 space-y-2">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.end}
                            className={({ isActive }) => `
                                flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative
                                ${isActive 
                                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white"}
                            `}
                        >
                            <div className="shrink-0">{item.icon}</div>
                            <AnimatePresence>
                                {isSidebarOpen && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        className="font-bold whitespace-nowrap"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                            {!isSidebarOpen && (
                                <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                                    {item.label}
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                    <button
                        onClick={handleLogOut}
                        className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-300 group relative"
                    >
                        <LogOut className="w-5 h-5 shrink-0" />
                        <AnimatePresence>
                            {isSidebarOpen && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="font-bold whitespace-nowrap"
                                >
                                    Logout
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>

                {/* Toggle Button */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="absolute -right-4 top-10 w-8 h-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
                >
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isSidebarOpen ? "rotate-180" : ""}`} />
                </button>
            </motion.aside>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.aside
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 left-0 w-72 bg-white dark:bg-gray-900 z-60 lg:hidden flex flex-col p-6"
                    >
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-3">
                                <Logo />
                                <span className="font-black text-xl text-gray-900 dark:text-white">PathshalaBD</span>
                            </div>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="flex-1 space-y-2">
                            {menuItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end={item.end}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) => `
                                        flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300
                                        ${isActive 
                                            ? "bg-primary text-white shadow-lg shadow-primary/20" 
                                            : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"}
                                    `}
                                >
                                    {item.icon}
                                    <span className="font-bold">{item.label}</span>
                                </NavLink>
                            ))}
                        </nav>

                        <button
                            onClick={handleLogOut}
                            className="flex items-center gap-4 px-4 py-4 rounded-2xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-300 mt-auto"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="font-bold">Logout</span>
                        </button>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top Navbar */}
                <header className="h-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 sticky top-0 z-30 px-4 md:px-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden p-2 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <div className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-400">
                            <Home className="w-4 h-4" />
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 dark:text-white capitalize">
                                {location.pathname.split('/').pop() || 'Dashboard'}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-6">
                        {/* Search Bar */}
                        <div className="hidden sm:flex relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className="pl-10 pr-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary/20 transition-all text-sm w-48 lg:w-64"
                            />
                        </div>

                        {/* Notifications */}
                        <button className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 relative hover:text-primary transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
                        </button>

                        {/* User Profile */}
                        <div className="flex items-center gap-3 pl-3 md:pl-6 border-l border-gray-100 dark:border-gray-800">
                            <div className="hidden md:block text-right">
                                <p className="text-sm font-bold text-gray-900 dark:text-white truncate max-w-[120px]">
                                    {user?.displayName || "User"}
                                </p>
                                <p className="text-[10px] font-bold text-primary uppercase tracking-wider">Student</p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold shadow-inner">
                                {user?.photoURL ? (
                                    <img src={user.photoURL} alt="" className="w-full h-full rounded-xl object-cover" />
                                ) : (
                                    <User className="w-5 h-5" />
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;