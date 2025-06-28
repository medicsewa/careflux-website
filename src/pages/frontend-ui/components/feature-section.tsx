import { Heart, Droplets, Activity } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Vital Tracking",
      description: "Monitor your heart rate, blood pressure, and other essential vitals with easy-to-use tracking tools.",
      image: "2.png",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Droplets,
      title: "Hydration Monitor",
      description: "Stay hydrated with smart reminders and track your daily water intake effortlessly.",
      image: "4.png",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Activity,
      title: "Activity Insights",
      description: "Track your daily activities, exercise routines, and monitor your overall wellness journey.",
      image: "3.png",
      gradient: "from-red-500 to-red-500"
    }
  ];

  return (
    <section id="feature-section" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#3574b5]  mb-6 text-bold">
            Your Health, Simplified
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
            CareFlux is your personal health companion — designed to
            help you stay connected to your body through mindful tracking
            of vitals, medications, hydration, activity, and overall wellness.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Card Container */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
                {/* Icon Header */}
                <div className="p-6 pb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Image Container */}
                <div className="px-6 pb-6">
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>

              {/* Floating decoration */}
              <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;
