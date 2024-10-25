export default function Header() {
    return (
      <header className="w-full bg-white shadow-md py-4 px-8 sm:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo or Project Name */}
          <div className="text-2xl font-bold text-gray-800">
            MyProject
          </div>
  
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="home" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About OPUNK
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Experience
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Project
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
  
          {/* Call to Action Button */}
          <a
            href="#"
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-500 transition-colors"
          >
            Get Started
          </a>
  
          {/* Mobile Menu Button (Optional for later development) */}
          {/* <button className="md:hidden text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button> */}
        </div>
      </header>
    );
  }
  