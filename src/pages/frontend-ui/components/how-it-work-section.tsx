import AppImage from './appimage-section';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works-section" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Simple Steps to Your<br />Luxurious Shopping<br />Experience
            </h2>
            <div className="space-y-8 md:space-y-10">
              <div className="bg-[#f5f3ff] rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 rounded-full bg-[#E5DEFF] text-[#7E69AB] w-10 h-10 flex items-center justify-center font-semibold text-sm">
                    01
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Water Tracking</h3>
                    <p className="text-gray-600">Stay hydrated with our intelligent water tracking system that monitors your daily intake, sends timely reminders, and adapts to your activity level.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f3ff] rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 rounded-full bg-[#E5DEFF] text-[#7E69AB] w-10 h-10 flex items-center justify-center font-semibold text-sm">
                    02
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Vitals Monitoring</h3>
                    <p className="text-gray-600">Keep track of your essential health metrics with our comprehensive vitals monitoring. Track heart rate, blood pressure, oxygen levels, and temperature.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f3ff] rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 rounded-full bg-[#E5DEFF] text-[#7E69AB] w-10 h-10 flex items-center justify-center font-semibold text-sm">
                    03
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Medication Management</h3>
                    <p className="text-gray-600">Never miss a dose again with our comprehensive medication management system. Schedule reminders, track inventory, and receive prescription refill alerts.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f3ff] rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 rounded-full bg-[#E5DEFF] text-[#7E69AB] w-10 h-10 flex items-center justify-center font-semibold text-sm">
                    04
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Health Analytics</h3>
                    <p className="text-gray-600">Gain valuable insights with comprehensive health analytics that visualize trends, identify patterns, and help you make informed decisions about your health.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col items-center">
          <div className="text-left mb-20 ">
              <p className="text-sm text-gray-600">
               Track your hydration, vital signs, and <br /> medications in one seamless platform for <br /> better health management.
              </p>
            </div>
            
            <div className="w-full max-w-[280px] mb-6">
              <AppImage />
            </div>
            <div className="text-center">
            <p className="text-gray-600 mb-4">CareFlux provides powerful tools to monitor, track, and improve every aspect of your health and wellness.</p>
              <a href="#" className="inline-block bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Download App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;