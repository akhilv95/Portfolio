import ehospitalityImage from "../assets/images/ehospitality.png";
export default function Portfolio() {
    const projects = [
        {
            title: "E-Hospitality",
            description:
                "E-Hospitality is a comprehensive hospital management system designed to streamline healthcare operations for administrators, doctors, and patients. The platform enables secure user authentication, appointment scheduling, doctor availability management, medical record maintenance, prescription tracking, billing management, and role-based dashboards. ",
            image:ehospitalityImage,
                tech: ["Python (Django REST Framework)", "JavaScript (ES6+)", "React.js", "HTML5", "CSS3", "Bootstrap", "Vite", "JWT Authentication", "REST"],
            link: "https://ehospitality-1.onrender.com/"
        },
        {
            title: "IDOCare Crowdfunding Platform",
            description:
                "Hospital-focused crowdfunding platform helping patients receive treatment support through secure online donations and transparent fund management.",
            tech: ["React", "Python", "Django", "Tailwind CSS", "REST API"],
            link: ""        
        },
        {
            title: "React Notes App",
            
            description:
                "Responsive note-taking application with category filtering, local storage persistence, editing, searching, and mobile-friendly UI.",
            tech: ["React", "JavaScript", "CSS3", "LocalStorage"],
            link: ""
        },
    ];

    const skills = {
        Frontend: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
        Backend: ["Python", "Django", "REST Framework", "Node.js"],
        Database: ["MySQL", "PostgreSQL"],
        Tools: ["Git", "GitHub", "VS Code", "AWS Basics", "Linux"],
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-800 sticky top-0 bg-slate-950/90 backdrop-blur z-50">
                <h1 className="text-2xl font-bold tracking-wide">Akhil Valanky</h1>

                <div className="flex gap-6 text-sm">
                    <a href="#about" className="hover:text-cyan-400 transition">About</a>
                    <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
                    <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
                    <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
                </div>
            </nav>

            {/* Hero */}
            <section className="px-10 py-24 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="text-cyan-400 text-lg mb-3">Full Stack Developer</p>

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                        Building Modern <br />
                        Web Applications
                    </h1>

                    <p className="text-slate-300 text-lg leading-8 max-w-xl">
                        Passionate Full Stack Developer with experience in React.js,
                        Django, REST APIs, and modern frontend technologies.
                        Specialized in creating scalable, responsive, and user-friendly
                        applications.
                    </p>

                    <div className="flex gap-4 mt-8 flex-wrap">
                        <a
                            href="https://github.com/akhilv95"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold shadow-lg"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/akhil-valanky-1286ab153/"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 rounded-2xl border border-slate-700 hover:border-cyan-400 transition"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-1 shadow-2xl">
                        <img
                            src="/akhil_image.jpeg"
                            alt="Akhil"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </div>
                <a
  href="resume.pdf"
  download
  className="px-6 py-3 rounded-2xl bg-white text-black font-semibold"
>
  Download Resume
</a>
            </section>

            {/* About */}
            <section id="about" className="px-10 py-20 bg-slate-900">
                <h2 className="text-4xl font-bold mb-10">About Me</h2>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-xl">
                        <p className="text-slate-300 leading-8 text-lg">
                            I am a Full Stack Developer with experience in frontend and
                            backend development. I specialize in building scalable web
                            applications using React.js, Django REST Framework, Python, and
                            MySQL.
                        </p>

                        <p className="text-slate-300 leading-8 text-lg mt-6">
                            I enjoy solving real-world problems through clean UI design,
                            secure backend APIs, authentication systems, and responsive user
                            experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800">
                            <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
                            <p className="text-slate-300 mt-2">Years Experience</p>
                        </div>

                        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800">
                            <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
                            <p className="text-slate-300 mt-2">Projects Completed</p>
                        </div>

                        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800">
                            <h3 className="text-3xl font-bold text-cyan-400">Full Stack</h3>
                            <p className="text-slate-300 mt-2">React + Django</p>
                        </div>

                        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800">
                            <h3 className="text-3xl font-bold text-cyan-400">REST API</h3>
                            <p className="text-slate-300 mt-2">Authentication & CRUD</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="px-10 py-20">
                <h2 className="text-4xl font-bold mb-12">Skills</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div
                            key={category}
                            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                                {category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-full bg-slate-800 text-slate-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="px-10 py-20 bg-slate-900">
                <h2 className="text-4xl font-bold mb-12">Projects</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.title}
                            className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-xl"
                        >
                            <img
  src={project.image}
  alt={project.title}
  className="w-full h-52 object-cover"
/>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-4">
                                    {project.title}
                                </h3>

                                <p className="text-slate-300 leading-7 mb-5">
                                    {project.description}
                                </p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"> view Project </button>
                                </a>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-slate-800 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="px-10 py-20">
                <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl">
                    <h2 className="text-4xl font-bold mb-6 text-center">
                        Contact Me
                    </h2>

                    <p className="text-center text-slate-300 mb-10 text-lg">
                        Open to Full Stack Developer, Frontend Developer, and Python
                        Developer opportunities.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800">
                            <h3 className="text-cyan-400 text-xl font-semibold mb-2">
                                Email
                            </h3>
                            <p className="text-slate-300">akhilvalankyofficial@gmail.com</p>
                        </div>

                        <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800">
                            <h3 className="text-cyan-400 text-xl font-semibold mb-2">
                                Location
                            </h3>
                            <p className="text-slate-300">Bengaluru, India</p>
                        </div>

                        <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800">
                            <h3 className="text-cyan-400 text-xl font-semibold mb-2">
                                GitHub
                            </h3>
                            <p className="text-slate-300">github.com/akhilv95</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
                © 2026 Akhil Valanky • Full Stack Developer Portfolio
            </footer>
        </div>
    )
}
