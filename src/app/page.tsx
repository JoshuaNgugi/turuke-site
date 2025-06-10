// pages/index.tsx

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Turuke – Smart Poultry Management</title>
        <meta name="description" content="Manage your poultry effortlessly with Turuke." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 py-20">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl">
            Turuke <span className="text-green-600">Empowers</span> Poultry Farmers
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl text-gray-600">
            Track eggs, flock health, and production with ease – all from your phone.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.example.turuke"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
          >
            Download on Play Store
          </a>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-green-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Egg Production</h3>
              <p className="text-gray-600">Log daily egg counts and see trends over time.</p>
            </div>
            <div>
              <div className="text-green-600 text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold mb-2">Flock Health</h3>
              <p className="text-gray-600">Monitor sick birds and medication routines.</p>
            </div>
            <div>
              <div className="text-green-600 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Offline First</h3>
              <p className="text-gray-600">No internet? No problem. Your data stays with you.</p>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="text-center px-6 py-16 bg-gray-100">
          <h2 className="text-3xl font-bold">Ready to simplify your poultry farming?</h2>
          <a
            href="https://play.google.com/store/apps/details?id=com.example.turuke"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
          >
            Get Turuke on Android
          </a>
        </section>
      </div>
    </>
  );
}
