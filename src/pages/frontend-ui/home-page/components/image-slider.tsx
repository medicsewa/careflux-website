import { useState, useEffect } from "react";

const ImageSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const images = [
		{
			src: "1.png",
			alt: "CareFlux Dashboard",
		},
		{
			src: "2.png",
			alt: "Health Tracking Interface",
		},
		{
			src: "3.png",
			alt: "Medical Dashboard",
		},
		{
			src: "4.png",
			alt: "Health App Interface",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 7500);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative flex items-center justify-center overflow-hidden">
			<div className="relative w-full max-w-2xl mx-auto h-[750px]">
				{" "}
				{/* increased width and height */}
				{images.map((image, index) => (
					<div
						key={index}
						className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
							index === currentIndex
								? "opacity-100 transform translate-x-0 scale-100 z-10"
								: "opacity-0 transform scale-95 z-0"
						}`}
					>
						<img
							src={image.src}
							alt={image.alt}
							className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 ease-out rounded-2xl"
							onError={(e) => {
								console.log(`Failed to load image: ${image.src}`);
								e.currentTarget.style.display = "none";
							}}
						/>
					</div>
				))}
				{/* Indicator dots */}
				<div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
					{images.map((_, index) => (
						<div
							key={index}
							className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
								index === currentIndex ? "bg-[#3574b5] scale-125" : "bg-gray-300 hover:bg-gray-400"
							}`}
							onClick={() => setCurrentIndex(index)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ImageSlider;
