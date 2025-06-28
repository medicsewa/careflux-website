import { motion } from "framer-motion";

const PrivacyPolicy = () => {
	return (
		<main className="flex-grow pt-16 py-12">
			<div className="container mx-auto px-4">
				<motion.div
					className="max-w-3xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-4xl font-bold mb-8">Privacy Policy - CareFlux</h1>

					<div className="prose prose-blue max-w-none dark:prose-invert">
						<p className="lead text-lg text-gray-600 dark:text-gray-300 mb-8">Last updated: 6th April, 2025</p>

						<p className="mb-6">
							CareFlux is committed to protecting your personal health data and maintaining transparency about how we handle
							it. This Privacy Policy describes how we collect, use, and protect your data in compliance with Apple App Store
							and Google Play Store policies.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
						<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mb-6">
							<p className="text-green-800 dark:text-green-200 font-medium">
								By default, CareFlux does not collect any personally identifiable information or health data on our servers.
							</p>
						</div>
						<p className="mb-4">
							All health data, including vitals, medication schedules, logs, and notes, are stored securely on your device
							using local encryption.
						</p>

						<h3 className="text-xl font-semibold mt-6 mb-3">Optional Cloud Backup</h3>
						<ul className="list-disc ml-6 mt-3 mb-6">
							<li>
								<strong>iOS:</strong> Users can opt to back up their data to Apple iCloud.
							</li>
							<li>
								<strong>Android:</strong> Users can opt to back up their data to Google Drive.
							</li>
						</ul>
						<p>
							These backups are encrypted and handled entirely by Apple or Google. We do not have access to your backup
							content.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">2. Health Data Access</h2>
						<p className="mb-4">CareFlux integrates with:</p>
						<ul className="list-disc ml-6 mt-3 mb-6">
							<li>
								<strong>Apple HealthKit</strong> (iOS)
							</li>
							<li>
								<strong>Google Health Connect</strong> (Android)
							</li>
						</ul>
						<p>
							With your permission, we access health metrics such as heart rate, blood pressure, steps, weight, hydration, etc.
							You have full control over what data is shared and can revoke access at any time via system settings.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">3. Analytics and Usage Data</h2>
						<p className="mb-4">
							We use <strong>Google Firebase Analytics</strong> to collect anonymous usage data to understand how users
							interact with CareFlux. This helps us improve the app experience over time.
						</p>
						<p className="mb-4">The data collected may include:</p>
						<ul className="list-disc ml-6 mt-3 mb-6">
							<li>App opens and screen views</li>
							<li>Feature usage (e.g. how often users view vitals or add medications)</li>
							<li>Crash reports and performance metrics</li>
						</ul>
						<p>
							This data is aggregated and anonymized. We do not collect personal identifiers or health-related content through
							Firebase.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Retention & Deletion</h2>
						<p className="mb-4">
							All locally stored health data stays on your device unless you explicitly back it up. You may delete your data
							by:
						</p>
						<ul className="list-disc ml-6 mt-3 mb-6">
							<li>Removing individual records inside the app</li>
							<li>Clearing the app's data from device settings</li>
							<li>Deleting your iCloud/Google Drive backup (if enabled)</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-8 mb-4">5. Children's Privacy</h2>
						<p>
							CareFlux is not intended for children under the age of 13. We do not knowingly collect any personal information
							from children.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Policy</h2>
						<p>
							We may update this policy as needed. You will be notified of any significant changes via in-app notices or
							updates to this page.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
						<p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
						<p className="mt-2">
							<strong>Email:</strong> info@medicsewa.com
						</p>

						<div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
							<p className="text-blue-800 dark:text-blue-200 font-medium italic text-center">
								CareFlux respects your privacy. Your health journey is yours—we're just here to support it.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</main>
	);
};

export default PrivacyPolicy;
