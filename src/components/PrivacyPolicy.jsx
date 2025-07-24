import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      className="bg-[#f9f5f0]"
      style={{
        fontFamily: "' playpen', cursive",
      }}
    >
      <section className="max-w-5xl mx-auto px-4 py-12 text-[#f9f5f0] bg-[#3e1831]">
        <h1
          className="text-4xl font-bold mb-6 text-center"
          style={{
            fontFamily: "'leckerli', cursive",
            // letterSpacing: "0.08em",
          }}
        >
          Privacy Policy
        </h1>
        <p className="mb-4">
          At Ganpati Tent Palace, we are committed to protecting your privacy.
          This Privacy Policy outlines how we collect, use, and safeguard your
          information when you use our website and services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect personal details like your name, email, phone number,
          and other details you provide when filling out forms or contacting us.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>To respond to your inquiries and provide customer support</li>
          <li>To improve our website and services</li>
          <li>
            To send important updates or promotional content (with your consent)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          3. Sharing Your Information
        </h2>
        <p className="mb-4">
          We do not sell, trade, or rent your personal information to third
          parties. Your data is only shared when necessary to provide our
          services or comply with legal requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to
          protect your personal data from unauthorized access, disclosure,
          alteration, or destruction.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Cookies</h2>
        <p className="mb-4">
          Our website may use cookies to enhance your browsing experience. You
          can choose to disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal
          information. You can also opt-out of receiving communications from us.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          7. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with a revised “Last Updated” date.
        </p>

        <p className="mt-6 italic">Last Updated: July 8, 2025</p>

        <p className="mt-4">
          If you have any questions about this policy, please contact us at
          {" +91-9414136807  "} or email us at {"lokesh@email.com "}
          <strong></strong>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
