const PrivacyPage = () => {
  return (
    <main className="w-[80%] py-8 mx-auto">
      <p className="text-lg font-bold mt-[120px]">Privacy Policy - CareFlux</p>
      <p className="text-sm">
        Last updated: 6<sup>th</sup> April, 2025
      </p>

      <p className="mt-8">
        CareFlux is committed to protecting your personal health data and
        maintaining transparency about how we handle it. This Privacy Policy
        describes how we collect, use, and protect your data in compliance with
        Apple App Store and Google Play Store policies.
      </p>

      <div className="flex flex-col space-y-4 mt-8">
        <section>
          <h2 className="font-semibold">1. Information We Collect</h2>
          <p>
            <strong>
              By default, CareFlux does not collect any personally identifiable
              information or health data on our servers.
            </strong>
          </p>
          <p>
            All health data, including vitals, medication schedules, logs, and
            notes, are stored securely on your device using local encryption.
          </p>
          <h3>Optional Cloud Backup</h3>
          <ul>
            <li>
              <strong>iOS:</strong> Users can opt to back up their data to Apple
              iCloud.
            </li>
            <li>
              <strong>Android:</strong> Users can opt to back up their data to
              Google Drive.
            </li>
          </ul>
          <p>
            These backups are encrypted and handled entirely by Apple or Google.
            We do not have access to your backup content.
          </p>
        </section>
        <section>
          <h2 className="font-semibold">2. Health Data Access</h2>
          <p>CareFlux integrates with:</p>
          <ul>
            <li>
              <strong>Apple HealthKit</strong> (iOS)
            </li>
            <li>
              <strong>Google Health Connect</strong> (Android)
            </li>
          </ul>
          <p>
            With your permission, we access health metrics such as heart rate,
            blood pressure, steps, weight, hydration, etc. You have full control
            over what data is shared and can revoke access at any time via
            system settings.
          </p>
        </section>
        <section>
          <h2 className="font-semibold">3. Analytics and Usage Data</h2>
          <p>
            We use <strong>Google Firebase Analytics</strong> to collect
            anonymous usage data to understand how users interact with CareFlux.
            This helps us improve the app experience over time.
          </p>
          <p>The data collected may include:</p>
          <ul>
            <li>App opens and screen views</li>
            <li>
              Feature usage (e.g. how often users view vitals or add
              medications)
            </li>
            <li>Crash reports and performance metrics</li>
          </ul>
          <p>
            This data is aggregated and anonymized. We do not collect personal
            identifiers or health-related content through Firebase.
          </p>
        </section>
        <section>
          <h2 className="font-semibold">4. Data Retention & Deletion</h2>
          <p>
            All locally stored health data stays on your device unless you
            explicitly back it up. You may delete your data by:
          </p>
          <ul>
            <li>Removing individual records inside the app</li>
            <li>Clearing the app's data from device settings</li>
            <li>Deleting your iCloud/Google Drive backup (if enabled)</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold">5. Children’s Privacy</h2>
          <p>
            CareFlux is not intended for children under the age of 13. We do not
            knowingly collect any personal information from children.
          </p>
        </section>
        <section>
          <h2 className="font-semibold">6. Changes to This Policy</h2>
          <p>
            We may update this policy as needed. You will be notified of any
            significant changes via in-app notices or updates to this page.
          </p>
        </section>
        <section>
          <h2 className="font-semibold">7. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <p>
            Email: <a href="mailto:info@medicsewa.com">info@medicsewa.com</a>
          </p>

          <hr />
          <p>
            <em>
              CareFlux respects your privacy. Your health journey is yours—we’re
              just here to support it.
            </em>
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPage;
