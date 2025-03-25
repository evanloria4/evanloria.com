import React, { useState, useEffect } from "react";
import "../styles/main.css";
import profile from "./img/profile.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-primary text-white pt-6 px-2">
        <div className="mx-auto flex flex-col items-center justify-between gap-8">
          <div className="flex flex-col items-center text-center gap-6 max-w-md">
            <img
              src={profile}
              alt="Hello"
              className="w-40 h-40 rounded-full border-4 border-white"
            />
            <div className="flex-col gap-2">
              <div className="text-4xl font-bold">Evan Loria</div>
              <div className="text-2xl font-bold">Software Developer</div>
            </div>
            <p className="pb-10">
              React | Node.js | JavaScript | Typescript | Express | Axios | SQL
              | NoSQL | AWS | HTML | webpack | Eslint | Git
              | tailwindcss | Rest APIs | Google Gemini
            </p>
          </div>
        </div>
      </section>
      <div className="bg-cream flex-1 text-white">
        <div className="flex flex-col gap-2 pt-4">
          <div className="flex flex-row gap-2 items-center">
            <div className="text-primary text-xl pl-4">Flare |</div>
            <a
              href="https://github.com/the-full-stack-attack/flare"
              className="text-accent hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com
            </a>
            <div className="text-black">(not active)</div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="text-primary text-xl pl-4">Vitality |</div>
            <a
              href="https://github.com/Awesome-Person-Interface/fitness-tracker"
              className="text-accent hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com
            </a>
            <div className="text-black">(not active)</div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="text-primary text-xl pl-4">Game Knight |</div>
            <a
              href="https://github.com/Awesome-Person-Interface/game-knight"
              className="text-accent hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com
            </a>
            <div className="text-black">(not active)</div>
          </div>
        </div>
        <div className="flex flex-col mt-16 px-6 pt-8 sm:flex-row justify-center items-center gap-4 text-text">
          <a
            className="hover:underline"
            target="_blank"
            href="mailto:evanloria.dev@gmail.com"
          >
            Email: evanloria.dev@gmail.com
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            className="hover:underline"
            target="_blank"
            href=" https://www.linkedin.com/in/evan-loria"
          >
            Linkedin: Evan Loria
          </a>
          <span className="hidden sm:inline">|</span>
          <a className="hover:underline text-accent" href="../../resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
