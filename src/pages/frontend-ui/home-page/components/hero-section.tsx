import AppStoreButton from '../../components/app-store-button';
import PlayStoreButton from '../../components/play-store-button';
import ImageSlider from './ImageSlider';

const HeroSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* Header Content */}
        <div className="text-center mb-8">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-[#3574b5] bg-blue-50 px-4 py-2 rounded-full border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-105 animate-pulse">
              New Feature: Medication Reminders
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="inline-block transition-colors duration-300">Track Your Health,</span> <br />
            <span className="inline-block transition-colors duration-300 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">One Drop at a Time</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            CareFlux helps you monitor your water intake, vital signs, medications, and sleep patterns in one seamless platform.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-0">
            {/* App Store Button */}
            <AppStoreButton />

            {/* Google Play Button */}
            <PlayStoreButton />

          </div>
        </div>

        {/* Image Slider Section */}
        <div className="max-w-sm mx-auto -mt-4 pb-8">
          <ImageSlider />
        </div>
      </div>

      {/* Animation Style */}
      {/* <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      }} /> */}
    </section>
  );
};

export default HeroSection;
