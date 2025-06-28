const FrontendHeader = () => {
	return (
		<header className="w-full flex justify-between items-center py-6 px-6 md:px-12">
			<div className="flex items-center">
				<a href="/" className="flex items-center space-x-2">
					<div className="relative">
						<img src="/careflux-logo.webp" alt="CareFlux Logo" className="w-12 h-12 rounded-full" />
					</div>
					<span className="text-xl font-bold bg-gradient-to-r from-[#3574b5] to-cyan-400 bg-clip-text text-transparent">
						CareFlux
					</span>
				</a>
			</div>
			<div className="flex space-x-8 text-sm text-gray-700 mb-6 md:mb-0">
				<a href="/" className="hover:text-black transition-colors">
					Home
				</a>
				<a href="#feature-section" className="hover:text-black transition-colors">
					Features
				</a>
				<a href="#how-it-works-section" className="hover:text-black transition-colors">
					How It Works
				</a>
				<a href="#testimonial-section" className="hover:text-black transition-colors">
					Testimonials
				</a>
			</div>
		</header>
	);
};

export default FrontendHeader;
