import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
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
        </>
    );
}
