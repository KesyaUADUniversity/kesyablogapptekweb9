export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Selamat Datang di Blog Saya
        </h1>

        <p className="mt-4 text-gray-600">
          Ini adalah blog sederhana menggunakan Next.js App Router
          dan Tailwind CSS.
        </p>

        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Mulai Membaca
        </button>
      </div>
    </main>
  );
}
