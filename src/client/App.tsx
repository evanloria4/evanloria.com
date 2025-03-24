import React, { useState, useEffect } from "react";
import "../styles/main.css";
import profile from "./img/profile.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-primary text-white pt-6">
        <div className="mx-auto flex flex-col items-center justify-between gap-8">
          <div className="flex flex-col items-center text-center gap-6 max-w-md">
            <img
              src={profile}
              alt="Hello"
              className="w-40 h-40 rounded-full border-4 border-white"
            />
            <div className="flex-cil gap-2">
              <div className="text-4xl font-bold">Evan Loria</div>
              <div className="text-2xl font-bold">Software Developer</div>
            </div>
            <p>
              React | Node.js | JavaScript | Typescript | Express | Axios | SQL
              | NoSQL | AWS | tailwindcss | webpack | Rest APIs | HTML
            </p>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
      </section>
      <div className="bg-cream flex-1 text-white"></div>
    </div>
  );
}

export default App;
