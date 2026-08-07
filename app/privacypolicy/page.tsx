import React from "react";
import PageBanner from "@/app/components/ui/PageBanner";
import { getPageBanner } from "@/lib/getRealEstateData";

const page = () => {
  const banner = getPageBanner("privacy");

  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      <PageBanner {...banner} />
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        <h1 className="font-heading mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          Privacy & Policy
        </h1>
        <p className="mt-4 text-slate-700 text-justify">
          <span className="font-bold">Welcome to our real estate website!</span>{" "}
          We value your privacy and are committed to protecting your personal
          information. This Privacy Policy outlines how we collect, use, and
          safeguard your data when you interact with our website and services.
        </p>
        <p className="mt-4 text-slate-700 text-justify">
          <span className="font-bold">1. Information Collection:</span> We may
          collect personal information such as your name, email address, phone
          number, and property preferences when you voluntarily provide it
          through contact forms or inquiries.
        </p>
        <p className="mt-4 text-slate-700 text-justify">
          <span className="font-bold">2. Use of Information:</span> The
          information we collect is used to respond to your inquiries, provide
          property listings, send relevant updates, and improve our services. We
          do not sell or share your personal information with third parties for
          marketing purposes.
        </p>
        <p className="mt-4 text-slate-700 text-justify">
          <span className="font-bold">3. Data Security:</span> We implement
          industry-standard security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or
          destruction. However, please note that no method of transmission over
          the internet or electronic storage is completely secure.
        </p>
        <p className="mt-4 text-slate-700 text-justify">
          <span className="font-bold">4. Cookies and Tracking:</span> Our
          website may use cookies and similar tracking technologies to enhance
          user experience, analyze trends, and gather demographic information.
          You can manage your cookie preferences through your browser settings.
        </p>
        <p className="mt-4 text-slate-700 text-justify">
          <span className="font-bold">5. Third-Party Links:</span> Our website
          may contain links to third-party websites. We are not responsible for
          the privacy practices or content of these external sites. We encourage
          you to review their privacy policies before providing any personal
          information.
        </p>
        <p className="mt-4 text-slate-700 text-justify">
          <span className="font-bold">6. Children&apos;s Privacy:</span> Our
          services are not directed towards individuals under the age of 18. We
          do not knowingly collect personal information from children. If we
          become aware that we have inadvertently collected such information, we
          will take steps to delete it.
        </p>
        <p className="mt-4 text-slate-700 text-justify">
          <span className="font-bold">7. Changes to Privacy Policy:</span> We
          may update this Privacy Policy from time to time. Any changes will be
          posted on this page with an updated effective date. We encourage you
          to review this policy periodically for any updates.
        </p>
      </div>
    </main>
  );
};

export default page;
