export default function ContactPage() {
  return (
    <main className="bg-gray-50">
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>

          <p className="mt-5 text-lg text-gray-300">
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Get In Touch</h2>

            <p className="mt-4 text-gray-600">
              Looking to buy, sell or rent a property? Contact our experienced
              real estate consultants.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h4 className="font-semibold">📍 Address</h4>
                <p className="text-gray-500">Sector 62, Noida, Uttar Pradesh</p>
              </div>

              <div>
                <h4 className="font-semibold">📞 Phone</h4>
                <p className="text-gray-500">+91 98765 43210</p>
              </div>

              <div>
                <h4 className="font-semibold">📧 Email</h4>
                <p className="text-gray-500">info@eliteestates.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-bold">Send Message</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border p-3"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border p-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border p-3"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-lg border p-3"
              />

              <button className="w-full rounded-lg bg-slate-900 py-3 font-semibold text-white transition hover:bg-slate-800">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="h-[450px] w-full">
        <iframe
          className="h-full w-full"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18..."
        />
      </section>
    </main>
  );
}
