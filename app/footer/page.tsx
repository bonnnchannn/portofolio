export default function Footer() {
    return (
      <footer className="w-full bg-gray-800 text-gray-100 py-6 px-8 sm:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          {/* Left Side - Logo or Project Name */}
          <div className="text-2xl font-bold">MyProject</div>
  
          {/* Center - Navigation Links */}
          <nav className="flex space-x-4 my-4 sm:my-0">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Blog
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </nav>
  
          {/* Right Side - Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.04c-5.5 0-10 4.48-10 10 0 4.4 3.58 8.06 8.1 8.94.6.12.82-.26.82-.58v-2.05c-3.32.72-4-1.58-4-1.58-.54-1.4-1.34-1.77-1.34-1.77-1.1-.78.08-.76.08-.76 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.84 1.3 3.54.98.1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.34-5.47-5.98 0-1.32.46-2.4 1.22-3.24-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.24a11.48 11.48 0 013-.4c1.02 0 2.06.14 3 .4 2.3-1.58 3.3-1.24 3.3-1.24.66 1.64.24 2.86.12 3.16.76.86 1.22 1.94 1.22 3.24 0 4.66-2.82 5.68-5.5 5.98.44.38.82 1.1.82 2.22v3.3c0 .32.22.7.82.58C18.42 20.1 22 16.44 22 12.04c0-5.52-4.5-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.23 5.924a8.75 8.75 0 01-2.496.684 4.333 4.333 0 001.91-2.386 8.754 8.754 0 01-2.751 1.05A4.372 4.372 0 0015.496 4c-2.398 0-4.354 1.938-4.354 4.334 0 .34.036.67.104.99A12.42 12.42 0 013.34 4.733a4.322 4.322 0 00-.59 2.178c0 1.5.757 2.832 1.91 3.61a4.43 4.43 0 01-1.974-.542v.05c0 2.088 1.47 3.834 3.43 4.23a4.391 4.391 0 01-1.966.074c.55 1.732 2.154 2.99 4.056 3.03a8.753 8.753 0 01-5.386 1.86c-.35 0-.692-.02-1.03-.06a12.373 12.373 0 006.69 1.96c8.025 0 12.42-6.64 12.42-12.392 0-.19-.004-.378-.012-.564a8.83 8.83 0 002.18-2.27z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.633 2H4.367A2.367 2.367 0 002 4.367v15.266A2.367 2.367 0 004.367 22h15.266A2.367 2.367 0 0022 19.633V4.367A2.367 2.367 0 0019.633 2zm-4.15 4.63h3.49v3.79h-3.49V6.63zm-2.17 7.88H6.49V6.63h6.83v7.88zM6.49 18h6.83v-1.62H6.49V18z" />
              </svg>
            </a>
          </div>
        </div>
  
        {/* Copyright Text */}
        <div className="mt-4 text-center text-sm text-gray-400">
          &copy; 2024 MyProject. All rights reserved.
        </div>
      </footer>
    );
  }
  