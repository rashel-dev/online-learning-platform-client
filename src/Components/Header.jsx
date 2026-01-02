import { Menu, X, User, LogIn } from "lucide-react";
import React, { use, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { CiLogout } from "react-icons/ci";
import Logo from "./ui/Logo";
import { FaBook, FaHome, FaUser } from "react-icons/fa";

const Header = () => {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { user, logOutUser } = use(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success("LogOut Successfully");
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className="flex items-center gap-1">
                   <FaHome></FaHome> Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/courses" className="flex items-center gap-1">
                   <FaBook></FaBook> Courses
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className="flex items-center gap-1">
                   <FaUser></FaUser> Dashboard
                </NavLink>
            </li>
        </>
    );

    return (
        <header className="sticky top-0 z-50 bg-neutral dark:bg-gray-900/95 backdrop-blur-md shadow-md border-b border-gray-100 dark:border-gray-800 ">

            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <div onClick={() => navigate("/")} className="flex items-center space-x-2 group cursor-pointer">
                        <Logo></Logo>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center space-x-4 text-gray-800 dark:text-gray-200">{navLinks}</ul>

                    {/* Desktop CTA Buttons */}
                    {user ? (
                        <div className="hidden lg:flex items-center space-x-3">
                            <button
                                onClick={handleLogOut}
                                className="flex btn btn-outline btn-error items-center space-x-2 px-5 py-2.5 font-bold transition-all duration-300 rounded-lg cursor-pointer"
                            >
                                <CiLogout className="w-4 h-4" />
                                <span>Logout</span>
                            </button>
                        </div>
                    ) : (
                        <div className="hidden lg:flex items-center space-x-3">
                            <Link to="/login">
                                <button className="flex btn btn-outline btn-primary items-center px-5 py-2.5 font-bold transition-all duration-300 rounded-lg cursor-pointer">
                                    <LogIn className="w-4 h-4" />
                                    <span>Login</span>
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="flex btn btn-primary items-center px-6 py-2.5 text-white rounded-lg font-bold shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer">
                                    <User className="w-4 h-4" />
                                    <span>Register</span>
                                </button>
                            </Link>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6 text-gray-700 dark:text-gray-200" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                    <ul className="space-y-2 pt-4">{navLinks}</ul>
                    {user ? (
                        <div className="pt-4 space-y-4 border-t border-gray-100 dark:border-gray-800 mt-4">
                            <button
                                onClick={handleLogOut}
                                className="w-full btn btn-outline btn-error flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-bold cursor-pointer mb-2"
                            >
                                <CiLogout className="w-4 h-4" />
                                <span>Logout</span>
                            </button>
                        </div>
                    ) : (
                        <div className="pt-4 space-y-4 border-t border-gray-100 dark:border-gray-800 mt-4">
                            <Link to="/login">
                                <button className="w-full btn btn-outline btn-primary flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-bold cursor-pointer mb-2">
                                    <LogIn className="w-4 h-4" />
                                    <span>Login</span>
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="w-full btn btn-primary flex items-center justify-center space-x-2 px-4 py-3 text-white rounded-lg shadow-lg font-bold cursor-pointer">
                                    <User className="w-4 h-4" />
                                    <span>Register</span>
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
