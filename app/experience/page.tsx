// app/experience/Experience.js

export default function Experience() {
    const experiences = [
      {
        title: "Software Engineer",
        company: "Tech Company",
        duration: "Jan 2022 - Present",
        description:
          "Developed scalable web applications, implemented best coding practices, and collaborated with cross-functional teams to deliver high-quality software solutions.",
      },
      {
        title: "Frontend Developer",
        company: "Web Solutions",
        duration: "Jun 2020 - Dec 2021",
        description:
          "Focused on creating responsive designs and improving user experience. Built reusable components and optimized website performance.",
      },
      {
        title: "Intern Developer",
        company: "Startup Inc.",
        duration: "Jan 2020 - May 2020",
        description:
          "Assisted in web development projects, participated in code reviews, and gained hands-on experience with JavaScript and React.",
      },
    ];
  
    return (
      <section className="min-h-screen bg-gray-10 dark:bg-white-900 text-white-800 dark:text-black-200 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Experience</h2>
  
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                <span className="block text-gray-500 dark:text-gray-400 mb-4">
                  {exp.duration}
                </span>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  