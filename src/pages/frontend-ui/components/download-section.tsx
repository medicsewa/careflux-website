import AppStoreButton from "./app-store-button";
import PlayStoreButton from "./play-store-button";

const AppImage = () => (
  <div className="relative">
    <div className="w-64 h-96  rounded-3xl  transform rotate-6 hover:rotate-3 transition-transform duration-300">
      <div className="absolute inset-4  rounded-2xl flex items-center justify-center">
        <img src="1.png" alt="" />

      </div>
    </div>
  </div>
);

const DownloadSection = () => {
  return (
    <section id="download-section" className="py-16 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto rounded-3xl border border-indigo-200 bg-white shadow-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/70 to-purple-50/30 pointer-events-none"></div>

        <div className="relative z-10 px-6 md:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-[#3574b5] mb-2">
                  Ready To Elevate Your Wardrobe?
                </p>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Download</h2>
                  <span className="bg-[#3574b5] text-white rounded-full w-8 h-8 flex items-center justify-center text-xs animate-bounce">
                    ↓
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Mobile App
                </h3>
              </div>

              <p className="text-lg text-gray-600">
                Download <span className="font-semibold text-[#3574b5]">CareFlux</span> and Track your hydration, vital signs, and medications in one seamless platform for better health management.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* App Store Button */}
                <AppStoreButton />
                <PlayStoreButton />

              </div>
            </div>

            {/* App Image */}
            <div className="relative flex justify-center md:justify-end">
              <AppImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;