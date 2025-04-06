import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router";
import HomePage from "./pages/home.page";
import TermAndConditionPage from "./pages/term-and-condition.page";
import PrivacyPage from "./pages/privacy.page";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermAndConditionPage />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
