export default function CreatorPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">Creator</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Welcome to the creator page. Here you can find information about the author,
          project goals, and how to get involved with the app.
        </p>
        <div className="space-y-4">
          <p className="text-gray-300">
            This site was built to give users a clean experience and a simple navigation flow.
            If you need more details, feel free to reach out or explore other pages.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-black font-semibold transition hover:bg-gray-200"
          >
            Back to Home
          </a>
        </div>
      </div>
      <footer className="absolute bottom-6 text-gray-600 text-sm">
        &copy; 2026 Creator Page
      </footer>
    </div>
  )
}
