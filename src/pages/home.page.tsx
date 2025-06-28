import { Link } from "react-router";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "G-Q5GKCB2GNH",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <div className="flex flex-col items-center w-[60%] min-w-[320px] mx-auto text-sm">
      <img src="/logo.png" className="mt-24 w-[120px] h-[120px] rounded-full" />
      <div className="text-center my-8">
        <strong>Welcome to CareFlux – Own Your Health Journey</strong>
        <p className="mt-4">
          CareFlux is your peaceful partner in wellness, guiding you gently
          through tracking your vitals, medications, and daily health routines.
          With intuitive design and seamless syncing, your health data stays
          organized, insightful, and always in your control. Your body has a
          rhythm—CareFlux helps you follow it.
        </p>
      </div>
      <div className="h-[1px] bg-gray-100 w-full" />
      <div className="text-center my-8">
        <p>
          Whether you’re building healthy habits or recovering from a condition,
          CareFlux offers clarity without complexity. Your information stays
          private, your journey stays yours, and every small step adds up to
          something meaningful. With CareFlux, you’re not just tracking
          health—you’re nurturing it.
        </p>
      </div>
      <div className="h-[1px] bg-gray-100 w-full" />
      <div className="text-center my-8">
        <p>🌱 Start your journey today.</p>
        <p>
          Download CareFlux on iOS or Android and take the first step toward a
          more mindful, empowered you.
        </p>
        <p className="mt-4 flex items-center justify-center flex-col">
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/careflux/id6743959737"
              target="_blank"
            >
              <img
                src="/appstore.webp"
                alt="Download on the App Store"
                className="h-[50px] mt-2"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.medicsewa.relive"
              target="_blank"
            >
              <img
                src="/playstore.png"
                alt="Get it on Google Play"
                className="h-[50px] mt-2"
              />
            </a>
          </div>
        </p>
      </div>
      <div className="h-[1px] bg-gray-100 w-full" />
      <div className="text-center py-8">
        <strong>Contact Us</strong>
        <p className="mt-4">
          If you have anything to ask please feel free to contact us here:
          <br />
          <span className="italic underline text-sky-700 font-medium">
            info@medicsewa.com
          </span>
        </p>
        <nav className="flex items-center justify-center gap-2 mt-8">
          <Link to="/terms-and-conditions" className="hover:underline">
            Terms &amp; Conditions
          </Link>
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
