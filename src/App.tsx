import React, { useState, useEffect } from 'react';
import {
  GhostIcon,
  Code2Icon,
  BriefcaseIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  GamepadIcon,
  FolderIcon,
  SunIcon,
  MoonIcon
} from 'lucide-react';
import { SnakeGame } from './components/SnakeGame';
import { MatrixRain } from './components/MatrixRain';
import { HackerTyper } from './components/HackerTyper';
import { TerminalLauncher } from './components/TerminalLauncher';

const App: React.FC = () => {
  const [glitchText, setGlitchText] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const name = "Swapnanil Adhikary";
  const title = "AI & Full-Stack Developer";

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()';
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      setGlitchText(randomChar);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'bg-black text-green-500' : 'bg-white text-black'} min-h-screen font-mono transition-all duration-500`}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button onClick={toggleDarkMode} className="p-2 border rounded hover:scale-105 transition">
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>

      {/* Matrix Rain Background */}
      {darkMode && <MatrixRain />}

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 relative">
            <span className="absolute inset-0 text-red-500 animate-glitch-1">{name}</span>
            <span className="absolute inset-0 text-blue-500 animate-glitch-2">{name}</span>
            {name}
          </h1>
          <h2 className="text-2xl tracking-widest">
            {title} {glitchText}
          </h2>
        </header>

        {/* Main Content */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* About */}
          <section className={`p-6 border ${darkMode ? 'bg-black/50 border-green-500' : 'bg-gray-100 border-gray-400'} hover:border-green-400 transition-colors`}>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <GhostIcon className="mr-2" />
              ABOUT::SYSTEM
            </h3>
            <p className="leading-relaxed">
              [ACCESSING PERSONNEL FILE...]<br />
              AI enthusiast, 4x Hackathon winner, FreeLancer and full-stack engineer building tools that blend creativity with cutting-edge tech.
              Clearance level: HIGHLY ACTIVE
            </p>
          </section>

          {/* Skills */}
          <section className={`p-6 border ${darkMode ? 'bg-black/50 border-green-500' : 'bg-gray-100 border-gray-400'} hover:border-green-400 transition-colors`}>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Code2Icon className="mr-2" />
              SKILLS::EXECUTE
            </h3>
            <ul className="list-disc list-inside">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>Python (AI & Automation)</li>
              <li>SQL / NoSQL</li>
              <li>OpenCV, Gemini API, Streamlit</li>
            </ul>
          </section>

          {/* Projects */}
{/* Projects */}
<section className={`p-6 border ${darkMode ? 'bg-black/50 border-green-500' : 'bg-gray-100 border-gray-400'} md:col-span-2`}>
  <h3 className="text-xl font-bold mb-4 flex items-center">
    <FolderIcon className="mr-2" />
    PROJECTS::SHOWCASE
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        title: "Yumi Kaze (SIH 2024 Finalist)",
        stack: "FILM model, WMS, Cloudinary",
        desc: "AI-based video generation from weather satellite images.",
        img: "https://i.postimg.cc/MGNnntCM/yumi.jpg",
        github: "https://github.com/SwapnanilAdhikary/YumiKaze"
      },
      {
        title: "Celebrity Look-Alike",
        stack: "VGG Face, Deep Learning",
        desc: "Find your celeb twin & hear their dialogues.",
        img: "https://i.postimg.cc/8cVsHcPT/Screenshot-2025-04-05-113230.png",
        github: "https://github.com/SwapnanilAdhikary/Celebrity_Look_alike"
      },
      {
        title: "Bundy – AI Tools Platform",
        stack: "Next.js, Stripe, Gemini Pro",
        desc: "100+ AI tools for content creators (SaaS).",
        img: "https://i.postimg.cc/fbJ3W1rQ/bundy.png",
        github: "https://github.com/SwapnanilAdhikary/Bundy-the-creator"
      },
      {
        title: "CVision (Hackathon Winner)",
        stack: "Gemini API, Streamlit",
        desc: "AI-powered job interview prep & recruitment assistant.",
        img: "https://i.postimg.cc/XJ5pddW2/cv.png",
        github: "https://github.com/SwapnanilAdhikary/CVision"
      },
    ].map((project, index) => (
      <div
        key={index}
        className="relative border border-green-500/50 p-4 group hover:bg-black hover:text-green-400 transition-all"
      >
        <h4 className="font-bold text-lg">{project.title}</h4>
        <p className="text-sm text-green-400 mb-2">{project.stack}</p>
        <p className="mb-2">{project.desc}</p>

        {/* Hidden content on hover */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/90 text-white opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center z-10">
          <img src={project.img} alt={project.title} className="w-full h-32 object-cover mb-4 border border-green-400" />
          <p className="mb-4 text-sm">{project.desc}</p>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 underline hover:text-green-500"
          >
            View on GitHub
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


          {/* Experience */}
          <section className={`p-6 border ${darkMode ? 'bg-black/50 border-green-500' : 'bg-gray-100 border-gray-400'} md:col-span-2`}>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <BriefcaseIcon className="mr-2" />
              EXPERIENCE::LOG
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold">Freelance AI Developer</h4>
                <p className="text-sm text-green-400">2023 - Present</p>
                <ul className="mt-2 list-disc list-inside">
                  <li>Built real-world AI SaaS tools using Gemini & OpenCV</li>
                  <li>Created job screening, CV analyzers, and voice-to-notation apps</li>
                  <li>34 satisfied clients from 8 nations including Quatar,Israel and Monaco</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">Rapi Pay Intern</h4>
                <p className="text-sm text-green-400">2024 may-july</p>
                <ul className="mt-2 list-disc list-inside">
                  <li>Implemented real-time data communication using WebSockets and collaborated on enhancing the overall UI.</li>
                </ul>
              </div>
              <div>
                <h4 className='font-bold'>SOUL AI freelancer</h4>
                <ul className="mt-2 list-disc list-inside">
                  <li>Working on FineTuning tamil and Bengali LLMS</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Hackathons */}
          <section className={`p-6 border ${darkMode ? 'bg-black/50 border-green-500' : 'bg-gray-100 border-gray-400'} md:col-span-2`}>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <GhostIcon className="mr-2" />
              HACKATHONS::VICTORY_LOG
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">ACM-IEM Diversion 2k25 (Soul AI Track)</h4>
                <p className="text-sm text-green-400">Built CVision – job automation tool</p>
              </div>
              <div>
                <h4 className="font-bold">HackFest 2024 – NIT Durgapur</h4>
                <p className="text-sm text-green-400">Created Bundy – AI tool marketplace</p>
              </div>
              <div>
                <h4 className="font-bold">SIH 2024 Finalist</h4>
                <p className="text-sm text-green-400">Built Yumi Kaze-Frame interpolation for weather maps</p>
              </div>
              <div>
                <h4 className="font-bold">HACK BYTE 2.0</h4>
                <p className="text-sm text-green-400">GodSpeed Winner</p>
              </div>
            </div>
          </section>


          <section className={`p-6 border ${darkMode ? 'bg-black/50 border-green-500' : 'bg-gray-100 border-gray-400'} md:col-span-2`}>
  <h3 className="text-xl font-bold mb-4 flex items-center">
    <GithubIcon className="mr-2" />
    GITHUB::CONTRIBUTION_STREAK
  </h3>
  <div className="flex justify-center">
    <img
      src="https://github-readme-streak-stats.herokuapp.com?user=SwapnanilAdhikary&theme=tokyonight&date_format=M%20j%5B%2C%20Y%5D"
      alt="GitHub Streak"
      className="border border-green-500"
    />
  </div>
</section>


<section className={`p-6 border ${darkMode ? 'bg-black/50 border-green-500' : 'bg-gray-100 border-gray-400'} md:col-span-2`}>
  <h3 className="text-xl font-bold mb-4 flex items-center">
    <Code2Icon className="mr-2" />
    LEETCODE::DAILY_HEATMAP
  </h3>
  <div className="flex justify-center">
    <img
      src={`https://leetcard.jacoblin.cool/SwapnanilAdhikary?theme=dark&font=monospace&ext=contest`}
      alt="LeetCode Stats"
      className="border border-green-500"
    />
  </div>
</section>



          {/* Entertainment: Snake */}
          <section className={`p-6 border ${darkMode ? 'bg-black/50 border-green-500' : 'bg-gray-100 border-gray-400'} md:col-span-2`}>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <GamepadIcon className="mr-2" />
              ENTERTAINMENT::SNAKE_MODULE
            </h3>
            <div className="flex justify-center">
              <SnakeGame />
            </div>
          </section>

          {/* Entertainment: HackerTyper */}
          <section className={`p-6 border ${darkMode ? 'bg-black/50 border-green-500' : 'bg-gray-100 border-gray-400'} md:col-span-2`}>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <GamepadIcon className="mr-2" />
              HACKER::TYPER_MODULE
            </h3>
            <HackerTyper />
          </section>

          {/* Entertainment: Terminal Launcher */}
          <section className={`p-6 border ${darkMode ? 'bg-black/50 border-green-500' : 'bg-gray-100 border-gray-400'} md:col-span-2`}>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <GamepadIcon className="mr-2" />
              TERMINAL::LAUNCHER
            </h3>
            <TerminalLauncher />
          </section>
          {/* Doom */}
<section className={`p-6 border ${darkMode ? 'bg-black/50 border-green-500' : 'bg-gray-100 border-gray-400'} md:col-span-2`}>
  <h3 className="text-xl font-bold mb-4 flex items-center">
    <GamepadIcon className="mr-2" />
    ENTERTAINMENT::DOOM_MODULE
  </h3>
  <div className="flex justify-center">
    <iframe
      title="Doom Game"
      src="https://js-dos.com/games/doom.exe.html"
      width="640"
      height="480"
      className="border-4 border-green-500"
    ></iframe>
  </div>
</section>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="flex justify-center space-x-6">
            <a href="mailto:adhikaryswapnanil@gmail.com" className="hover:text-green-400 transition-colors">
              <MailIcon />
            </a>
            <a href="https://github.com/SwapnanilAdhikary" className="hover:text-green-400 transition-colors">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/swapnanil-adhikary-786375254/" className="hover:text-green-400 transition-colors">
              <LinkedinIcon />
            </a>
          </div>
          <p className="mt-4 text-sm">
            SYSTEM.OUT.TIMESTAMP: {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
