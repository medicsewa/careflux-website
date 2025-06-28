import { lazy } from "react";

const HeroSection = lazy(() => import("./components/hero-section"));
const FeatureSection = lazy(() => import("../components/feature-section"));
const DownloadSection = lazy(() => import("../components/download-section"));
const HowItWorksSection = lazy(() => import("../components/how-it-work-section"));
const TestimonialsSection = lazy(() => import("../components/testimonial-section"));
const HomePage = () => {
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <DownloadSection />
        </>
    )
}

export default HomePage;