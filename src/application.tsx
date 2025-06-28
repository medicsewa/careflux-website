import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router";

// Layouts
const FrontendLayout = lazy(() => import("@/components/layouts/frontend-layout"));

// Website pages
const HomePage = lazy(() => import("@/pages/frontend-ui/home-page/home-page"));
const PrivacyPolicy = lazy(() => import("@/pages/frontend-ui/privacy-policy-page"));
const TermsOfService = lazy(() => import("@/pages/frontend-ui/terms-page"));

// Loading component
const LoadingSpinner = () => (
	<div className="flex items-center justify-center w-full h-screen">
		<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
	</div>
);

const Application = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Suspense fallback={<LoadingSpinner />}>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<FrontendLayout />}>
						<Route index element={<HomePage />} />
						<Route path="privacy-policy" element={<PrivacyPolicy />} />
						<Route path="terms-and-conditions" element={<TermsOfService />} />
						<Route path="*" element={<HomePage />} />
					</Route>
				</Routes>
			</Suspense>
		</AnimatePresence>
	);
};
export default Application;
