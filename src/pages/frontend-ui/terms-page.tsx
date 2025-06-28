import { motion } from "framer-motion";

const TermsOfService = () => {
	return (
		<main className="flex-grow pt-16 py-12">
			<div className="container mx-auto px-4">
				<motion.div
					className="max-w-3xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-4xl font-bold mb-8">Terms and Conditions - CareFlux</h1>

					<div className="prose prose-blue max-w-none dark:prose-invert">
						<p className="lead text-lg text-gray-600 dark:text-gray-300 mb-8">Last updated: 6th April, 2025</p>

						<p className="mb-6">
							Welcome to CareFlux. By downloading or using our app, you agree to the following Terms and Conditions. Please
							read them carefully.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
						<p>
							By accessing or using the CareFlux mobile application, you agree to be bound by these Terms and Conditions and
							our Privacy Policy. If you do not agree, please do not use the app.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">2. Medical Disclaimer</h2>
						<p>
							CareFlux is a health and wellness tracking tool. It is not intended to diagnose, treat, cure, or prevent any
							disease or medical condition. The app should not be used as a substitute for professional medical advice,
							diagnosis, or treatment.
						</p>
						<p className="mt-3">
							Always consult your physician or healthcare provider before making health-related decisions based on information
							presented in the app.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
						<ul className="list-disc ml-6 mt-3 mb-6">
							<li>You are responsible for the accuracy of the data you enter or allow to sync.</li>
							<li>You must not use the app for illegal purposes or attempt to reverse-engineer or tamper with its code.</li>
							<li>You agree not to misuse or disrupt the services or violate any applicable laws.</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
						<p>
							All content, design, logos, and code within the CareFlux app are the property of the CareFlux team and are
							protected by copyright and intellectual property laws. You may not reproduce, modify, or distribute any part of
							the app without written permission.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
						<p>
							We make every effort to ensure the reliability and availability of CareFlux, but we do not guarantee
							uninterrupted or error-free service. Use of the app is at your own risk.
						</p>
						<p className="mt-3">
							CareFlux and its developers are not liable for any damages, losses, or health consequences resulting from the use
							or misuse of the app.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">6. Updates and Modifications</h2>
						<p>
							We reserve the right to modify or update these Terms and Conditions at any time. Users will be notified of
							significant changes through the app or via our website.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">7. Termination</h2>
						<p>
							We reserve the right to terminate or suspend your access to the app without notice if you violate these Terms and
							Conditions.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
						<p>
							These Terms shall be governed and interpreted in accordance with the laws of your country or region, without
							regard to conflict of law principles.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact</h2>
						<p>If you have questions or concerns regarding these Terms and Conditions, contact us at:</p>
						<p className="mt-2">
							<strong>Email:</strong> info@medicsewa.com
						</p>

						<div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
							<p className="text-blue-800 dark:text-blue-200 font-medium italic text-center">
								Your health journey is your own — CareFlux is here to support you, not replace your doctor.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</main>
	);
};

export default TermsOfService;
