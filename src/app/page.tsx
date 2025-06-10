export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Welcome to AE Fastlane</h1>
        <p className="text-xl mb-4">
          Your trusted partner for business setup and operations in the UAE.
        </p>
        <a
          href="/blog"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Visit Our Blog
        </a>
      </div>
    </main>
  );
} 