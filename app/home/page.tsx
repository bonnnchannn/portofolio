import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 sm:p-12">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4">
          Welcome to My Project
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This is the beginning of something amazing. Explore, learn, and build
          your dreams with my new project!
        </p>
      </header>

      {/* Main Content Section */}
      <main className="flex flex-col items-center space-y-12">
        <Image
          className="rounded-lg shadow-md"
          src="/hero.jpg" // Replace with your image
          alt="Landing Page Image"
          width={600}
          height={400}
          priority
        />

        {/* Call-to-Action Buttons */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="px-6 py-3 text-white bg-blue-600 rounded-full shadow hover:bg-blue-500 transition-colors"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-3 text-blue-600 border border-blue-600 rounded-full shadow hover:bg-blue-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="mt-auto py-6 text-center">
        <p className="text-gray-500">
          &copy; 2024 My Project. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
