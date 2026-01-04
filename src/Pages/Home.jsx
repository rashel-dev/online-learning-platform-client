import React, { useEffect } from "react";
import PopularCourse from "../Components/PopularCourse";
import Banner from "../Components/Banner";
import WhyChooseUs from "../Components/WhyChooseUs";
import TopInstructors from "../Components/TopInstructors";
import ThemeToggle from "../Components/ThemeToggle";
import Stats from "../Components/Stats";
import Testimonials from "../Components/Testimonials";
import Newsletter from "../Components/Newsletter";
import FAQ from "../Components/FAQ";

const Home = () => {
    useEffect(() => {
        document.title = "PathShalaBD - Home";
    }, []);

    return (
        <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="fixed bottom-6 right-6 z-50">
                <ThemeToggle />
            </div>
            <Banner />
            <Stats />
            <PopularCourse />
            <WhyChooseUs />
            <Testimonials />
            <TopInstructors />
            <FAQ />
            <Newsletter />
        </div>
    );
};

export default Home;
