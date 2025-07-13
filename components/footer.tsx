export default function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-neutral-400">
              &copy; 2025 <span className="text-white font-semibold">SIBANANDA SAHU</span>. All rights reserved.
            </p>
            <p className="text-neutral-500 text-sm mt-1">Built with passion and modern web technologies.</p>
          </div>

          {/* <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/sibananda485"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
            >
              💼
            </a>
            <a
              href="https://www.github.com/sibananda485"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
            >
              🐙
            </a>
            <a
              href="mailto:sahsiba485@gmail.com"
              className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
            >
              📧
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
