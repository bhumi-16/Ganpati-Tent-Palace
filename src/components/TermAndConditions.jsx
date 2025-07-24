import React from "react";

const TermsAndConditions = () => {
  return (
    <div
      className="px-6 md:px-20 py-10 max-w-6xl mx-auto text-[#f9f5f0] bg-[#3e1831]"
      style={{
        fontFamily: "'leckerli', cursive",
        // letterSpacing: "0.08em",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">
        Terms and Conditions
      </h1>

      <p className="mb-4">
        Welcome to our website. These terms and conditions outline the rules and
        regulations for the use of our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By accessing this website, we assume you accept these terms and
        conditions. Do not continue to use our site if you do not agree to all
        of the terms stated on this page.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. License</h2>
      <p className="mb-4">
        Unless otherwise stated, we own the intellectual property rights for all
        material on this website. You may access this from the site for your own
        personal use, subject to restrictions set in these terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. User Responsibilities
      </h2>
      <p className="mb-4">
        You must not republish, sell, rent, or duplicate content from this
        website. Users must not misuse the website or engage in any unlawful
        activities.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Limitation of Liability
      </h2>
      <p className="mb-4">
        We will not be held responsible for any loss or damage arising from the
        use of this website or the services offered herein.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to revise these terms at any time. By using this
        website, you agree to be bound by the current version of these Terms and
        Conditions.
      </p>

      <p className="mt-6 text-sm text-[#e6d2d9]">
        If you have any questions about our Terms and Conditions, feel free to
        contact us.
      </p>
    </div>
  );
};

export default TermsAndConditions;
