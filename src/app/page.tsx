import Image from "next/image";

// pages/index.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main className="p-8">
        <h1 className="text-4xl font-bold">Welcome to Turuke 🐔</h1>
        <p className="mt-4 text-lg">
          Manage your poultry farm effortlessly. Coming soon to web!
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.example.turuke"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Download on Play Store
        </a>
      </main>
    </div>
  );
}
