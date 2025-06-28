const TestimonialSection = () => {
  return (
    <section id="testimonial-section" className="py-20 px-6 md:px-12 bg-[#f5f3ff]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Left Heading + Navigation */}
        <div className="md:w-1/3 space-y-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 leading-snug">
            Customer reviews<br />and feedback from<br />real users.
          </h2>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-gray-300 hover:bg-white flex items-center justify-center transition">
              <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="text-gray-600">
                <path d="M15 18L9 12L15 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 hover:bg-white flex items-center justify-center transition">
              <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="text-gray-600">
                <path d="M9 18L15 12L9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* TestimonialSection */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Star = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-yellow-400"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

// Dummy testimonials data
const testimonials = [
  {
    name: "Aayog Giri",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "CareFlux connects effortlessly with Health Connect and HealthKit. I love how all my health data—from steps to sleep—is finally in one place. Clean interface, no ads, and privacy-first. Exactly what I needed!",
  },
  {
    name: "Aadesh Shahi",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    feedback:
      "Finally, an app that takes privacy seriously and looks good doing it! CareFlux syncs with Health Connect smoothly and presents all my metrics in a super intuitive layout. Love that I control where my data lives—no hidden syncing or surprises!",
  },
];

export default TestimonialSection;
