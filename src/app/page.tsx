import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MovingCard from "@/components/MovingCard";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeaturedCourses />
            <WhyChooseUs />
            <MovingCard />
        </>
    );
}
