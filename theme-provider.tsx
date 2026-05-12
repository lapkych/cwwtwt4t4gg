export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">Get In Touch</h1>
        <p className="text-gray-400 text-lg">
          Have questions or want to connect? Reach out to us through Telegram.
        </p>
        <a
          href="https://t.me/fsj89j039wntkfdgbot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Contact Us
        </a>
      </div>
      <footer className="absolute bottom-6 text-gray-600 text-sm">
        &copy; 2026 Contact Page
      </footer>
    </div>
  )
}
