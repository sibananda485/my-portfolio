export default function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-neutral-400">
              &copy; {new Date().getFullYear()} <span className="text-white font-semibold">SIBANANDA SAHU</span>. All rights reserved.
            </p>
            <p className="text-neutral-500 text-sm mt-1">Built with passion and modern web technologies.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
