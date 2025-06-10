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
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Download App
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Poultry Management Made Simple
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Track your flocks, egg production, and farm performance — all from your phone.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.example.turuke"
            className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-purple-700 transition"
          >
            Get the App
          </a>
        </div>

        <img
          src="/hero-chicken-farm.svg"
          alt="Turuke Illustration"
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
                desc: "Record daily egg production per flock and see trends over time.",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-purple-600 mb-3" />,
                title: "Visual Reports",
                desc: "Insights that help you improve feed efficiency and reduce loss.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-purple-600 mb-3" />,
                title: "Offline Mode",
                desc: "Use the app with or without internet — your data is safe.",
              },
              {
                icon: <Smartphone className="w-8 h-8 text-purple-600 mb-3" />,
                title: "Mobile First",
                desc: "Built specifically for small-scale poultry farmers on Android.",
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
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">
              &quot;Since using Turuke, I&apos;ve doubled my tracking accuracy. It&apos;s like having a farm
              assistant in my pocket!&quot;
            </p>
            <div className="mt-4 font-semibold text-purple-700">— Jane, Kiambu Farmer</div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-purple-600 text-white text-center">
        <h3 className="text-2xl font-bold">Ready to get started?</h3>
        <p className="mt-2 text-lg">Download Turuke and simplify your poultry management today.</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.example.turuke"
          className="mt-6 inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Download App
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
