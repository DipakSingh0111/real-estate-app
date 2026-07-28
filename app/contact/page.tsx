// app/contact/page.tsx
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-extrabold text-gray-900 tracking-tight">
            Get in Touch
          </h1>
          <p className="font-sans text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
            Looking for your dream property or have questions about a listing?
            Our team of experts is here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 p-8 sm:p-12">
          {/* Left Side: Contact Information */}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="font-sans text-gray-600 text-sm leading-relaxed mb-8">
                Fill out the form or reach out to us directly through any of the
                channels below. We respond within 24 hours.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-50 p-3 rounded-lg text-emerald-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900">
                      Our Office
                    </h3>
                    <p className="font-sans text-gray-600 text-sm mt-1">
                      123 Corporate Avenue, Suite 400
                      <br />
                      Business Bay, New York, NY 10001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-50 p-3 rounded-lg text-emerald-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900">
                      Phone Number
                    </h3>
                    <p className="font-sans text-gray-600 text-sm mt-1">
                      +1 (555) 234-5678
                      <br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-50 p-3 rounded-lg text-emerald-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900">
                      Email Address
                    </h3>
                    <p className="font-sans text-gray-600 text-sm mt-1">
                      support@realestateportal.com
                      <br />
                      sales@realestateportal.com
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-50 p-3 rounded-lg text-emerald-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900">
                      Working Hours
                    </h3>
                    <p className="font-sans text-gray-600 text-sm mt-1">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="border-t border-gray-100 pt-6">
              <p className="font-sans text-xs text-gray-400">
                Licensed Real Estate Brokerage. Equal Housing Opportunity.
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col justify-center">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block font-sans text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 font-sans text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 font-sans text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 font-sans text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                />
              </div>

              <div>
                <label className="block font-sans text-sm font-medium text-gray-700 mb-1">
                  Your Message / Inquiry
                </label>
                <textarea
                  rows={4}
                  placeholder="I am interested in buying a property..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 font-sans text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
