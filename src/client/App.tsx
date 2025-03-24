import React, { useState, useEffect } from 'react';
import '../styles/main.css';
import profile from './img/profile.png';

function App() {
  return (
    <section className="bg-primary text-white px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 max-w-md">
          <img
            src={profile}
            alt="Hello"
            className="w-40 h-40 rounded-full border-4 border-white"
          />
          <h1 className="text-4xl font-bold">Software Developer</h1>
          <button className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition">
            About Me
          </button>
        </div>
        <div className="w-full md:w-1/2"></div>
      </div>
    </section>
  );
}

export default App;
