const TermAndConditionPage = () => {
  return (
    <main className="w-[80%] py-8 mx-auto">
      <p className="text-lg font-bold mt-[120px]">
        Terms and Conditions - CareFlux
      </p>
      <p className="text-sm">
        Last updated: 6<sup>th</sup> April, 2025
      </p>

      <p className="mt-8">
        Welcome to CareFlux. By downloading or using our app, you agree to the
        following Terms and Conditions. Please read them carefully.
      </p>
      <div className="flex flex-col space-y-4 mt-8">
        <section>
          <h2 className="font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the CareFlux mobile application, you agree to
            be bound by these Terms and Conditions and our Privacy Policy. If
            you do not agree, please do not use the app.
          </p>
        </section>
        <section>
          <h2 className="font-semibold">2. Medical Disclaimer</h2>
          <p>
            CareFlux is a health and wellness tracking tool. It is not intended
            to diagnose, treat, cure, or prevent any disease or medical
            condition. The app should not be used as a substitute for
            professional medical advice, diagnosis, or treatment.
          </p>
          <p>
            Always consult your physician or healthcare provider before making
            health-related decisions based on information presented in the app.
          </p>
        </section>
        <section>
          <h2 className="font-semibold">3. User Responsibilities</h2>
          <ul>
            <li>
              You are responsible for the accuracy of the data you enter or
              allow to sync.
            </li>
            <li>
              You must not use the app for illegal purposes or attempt to
              reverse-engineer or tamper with its code.
            </li>
            <li>
              You agree not to misuse or disrupt the services or violate any
              applicable laws.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold">4. Intellectual Property</h2>
          <p>
            All content, design, logos, and code within the CareFlux app are the
            property of the CareFlux team and are protected by copyright and
            intellectual property laws. You may not reproduce, modify, or
            distribute any part of the app without written permission.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">5. Limitation of Liability</h2>
          <p>
            We make every effort to ensure the reliability and availability of
            CareFlux, but we do not guarantee uninterrupted or error-free
            service. Use of the app is at your own risk.
          </p>
          <p>
            CareFlux and its developers are not liable for any damages, losses,
            or health consequences resulting from the use or misuse of the app.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">6. Updates and Modifications</h2>
          <p>
            We reserve the right to modify or update these Terms and Conditions
            at any time. Users will be notified of significant changes through
            the app or via our website.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">7. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the app
            without notice if you violate these Terms and Conditions.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">8. Governing Law</h2>
          <p>
            These Terms shall be governed and interpreted in accordance with the
            laws of your country or region, without regard to conflict of law
            principles.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">9. Contact</h2>
          <p>
            If you have questions or concerns regarding these Terms and
            Conditions, contact us at:
          </p>
          <p>
            Email: <a href="mailto:info@medicsewa.com">info@medicsewa.com</a>
          </p>

          <hr />
          <p>
            <em>
              Your health journey is your own — CareFlux is here to support you,
              not replace your doctor.
            </em>
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermAndConditionPage;
