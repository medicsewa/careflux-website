import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import Application from "./application";

import "./index.css";

// Get the root element safely
const rootElement = document.getElementById("root");

// Only render if the element exists
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<div data-testid="main-container" className="main-container">
				{/* <RouterProvider router={router} /> */}
				<HashRouter>
					<Application />
				</HashRouter>
			</div>
		</StrictMode>,
	);
} else {
	console.error("Root element not found");
}
