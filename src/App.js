import React from 'react';
import SpaceBackground from './SpaceBackground';

function App() {
  const projects = [
    {
      title: "Sample Lab",
      tags: ["React", "Audio","Live"],
      description: "Sample Lab offers a playful experiment with a 4*4 drum pad, allowing users to upload and visualize custom audio samples directly on their web browser.",
      projectLink: "https://samplelab.vercel.app/"
    },
    {
      title: "Tone Lab",
      tags: ["React", "Tonejs", "Audio", "Live"],
      description: "Prog, a Chrome extension in development, enables users to precisely track task progress by seconds, minutes, hours, or days.",
      projectLink: "https://tonelab.vercel.app/"
    },
    {
      title: "Jagath - Portfolio",
      tags: ["Bootstrap", "Portfolio", "Live"],
      description: "A weekend project done for a friend (Jagath Narayan)to setup his portfolio website with a minimal theme showcasing his work and life as a photographer.",
      projectLink: "https://jagathnarayanan.com/project"
    },
    {
      title: "Sample Library ",
      tags: ["React", "Audio","WIP"],
      description: "A sample library for sample lab with oneshot samples that are stored and fetched from airtable. This is currently a WIP but the initial version is up and running.",
      projectLink: "https://sample-library-xi.vercel.app"
    },
    {
      title: "Prog",
      tags: ["Chrome Extension","WIP"],
      description: "Prog, a Chrome extension in development, enables users to precisely track task progress by seconds, minutes, hours, or days.",
      projectLink: "https://github.com/ajjuism/prog"
    },
    // ... other projects
  ];

  return (
    <div className="App">
      <SpaceBackground projects={projects} />
    </div>
  );
}

export default App;
