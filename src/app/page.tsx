import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MovingCard from "@/components/MovingCard";
import Webinar from "@/components/Webinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeaturedCourses />
            <WhyChooseUs />
            <MovingCard />
            <Webinar/>
            <Instructors/>
            <Footer/>
        </>
    );
}
