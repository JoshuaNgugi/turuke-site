import { Egg, BarChart3, ShieldCheck, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-600">Turuke</h1>
          <a
            href="https://play.google.com/store/apps/details?id=com.example.turuke"
            target="_blank"
            rel="noopener noreferrer" // Added for security best practices
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Download App
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-3xl mx-auto px-4">
          {/* Enhanced Hero Headline and Description */}
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Take Control of Your Poultry Farm, Effortlessly.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Say goodbye to manual tracking and guesswork. <strong>Turuke</strong> empowers small-scale farmers to easily monitor flocks, optimize egg production, and gain valuable insights into farm performance — all directly from your Android phone.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.example.turuke"
            target="_blank"
            rel="noopener noreferrer" // Added for security best practices
            className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-purple-700 transition"
          >
            Get the App
          </a>
        </div>

        {/* This image could be replaced with an app screenshot/mockup */}
        <img
          src="/hero-chicken-farm.svg" // Consider replacing this with an actual app screenshot mockup
          alt="Turuke App Illustration on a phone with chicken farm in background"
          className="w-full max-w-3xl mx-auto mt-10"
        />
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Why Turuke?</h3>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Egg className="w-8 h-8 text-purple-600 mb-3" />,
                title: "Track Egg Output",
                desc: "Record daily egg production per flock and see trends over time. Understand your yield with precision.",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-purple-600 mb-3" />,
                title: "Actionable Visual Reports", // Enhanced title
                desc: "Understand your farm's health at a glance with clear charts. Identify trends and make data-driven decisions to boost your efficiency and reduce loss.", // Enhanced description
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-purple-600 mb-3" />,
                title: "Essential Offline Access", // Enhanced title
                desc: "Key features are available even without an internet connection, ensuring you can manage your data reliably in the field.", // Enhanced description
              },
              {
                icon: <Smartphone className="w-8 h-8 text-purple-600 mb-3" />,
                title: "Mobile First Design", // Slightly rephrased for clarity
                desc: "Built specifically for small-scale poultry farmers on Android, providing an intuitive and easy-to-use experience on your phone.", // Enhanced description
              },
            ].map(({ icon, title, desc }, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-purple-50 hover:bg-purple-100 transition">
                {icon}
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12">Farmers Love Turuke</h3>
          {/* Added a subtle shadow and slightly more rounded corners for the testimonial card */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="text-gray-700 italic">
              &quot;Since using Turuke, I&apos;ve doubled my tracking accuracy and improved my daily routines. It&apos;s like having a dedicated farm assistant in my pocket!&quot;
            </p>
            <div className="mt-4 font-semibold text-purple-700">— Jane, Kiambu Farmer, Kenya</div> {/* Added Kenya */}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-purple-600 text-white text-center">
        <h3 className="text-2xl font-bold">Ready to streamline your farm operations?</h3> {/* Slightly rephrased */}
        <p className="mt-2 text-lg">Download Turuke today and experience simplified poultry management.</p> {/* Slightly rephrased */}
        <a
          href="https://play.google.com/store/apps/details?id=com.example.turuke"
          target="_blank"
          rel="noopener noreferrer" // Added for security best practices
          className="mt-6 inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Download Turuke App
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-sm py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between">
          <p>© {new Date().getFullYear()} Turuke. All rights reserved.</p>
          <div className="mt-2 sm:mt-0">
            <a href="mailto:support@turuke.co.ke" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}