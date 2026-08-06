import React from "react";
import PageBreadcrumb from "@/app/components/ui/PageBreadcrumb";

const page = () => {
  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      {/* Hero Section  */}
      <section className="relative text-white border-b border-stone-800 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/about_0.avif')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="font-heading text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            Terms & Conditions
          </h1>

          <PageBreadcrumb items={[{ label: "Terms & Conditions" }]} />
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        <h1 className="font-heading mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          Terms and Conditions
        </h1>
        {/* Terms and conditions ke liye bna rhe hai  */}
        <p className="mt-4 text-slate-700 text-justify">
          Welcome to our real estate website! By accessing or using our website,
          you agree to comply with and be bound by the following terms and
          conditions. Please read them carefully before using our services.
        </p>
        <p className="mt-4 text-slate-700 text-justify">
          1. Use of Website: You may use our website for lawful purposes only.
          You agree not to engage in any activity that may disrupt or interfere
          with the functioning of the website or violate any applicable laws.
        </p>
        <p className="mt-4 text-slate-700 text-justify">
          2. Property Listings: We strive to provide accurate and up-to-date
          property listings. However, we do not guarantee the accuracy,
          completeness, or reliability of any information on our website. It is
          your responsibility to verify the details of any property before
          making any decisions.
        </p>
        <p className="mt-4 text-slate-700 text-justify">
          3. Intellectual Property: All content on our website, including text,
          images, logos, and graphics, is protected by intellectual property
          laws. You may not reproduce, distribute, or modify any content without
          our prior written consent.
        </p>
        <p className="mt-4 text-slate-700 text-justify">
          4. Limitation of Liability: We are not liable for any damages or
          losses arising from the use of our website or reliance on any
          information provided. You agree to use our website at your own risk.
        </p>
        <h1 className="font-heading mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          About the Website
        </h1>
        <p className="mt-4 text-slate-700 text-justify">
          {" "}
          Our real estate website is a platform that connects buyers, sellers,
          and renters of properties. We provide a user-friendly interface to
          browse property listings, view detailed information, and contact
          property owners or agents. Our goal is to facilitate smooth and
          efficient real estate transactions.
        </p>
      </div>
    </main>
  );
};

export default page;
