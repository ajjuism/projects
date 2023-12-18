import React from 'react';
import SpaceBackground from './SpaceBackground';

function App() {
  const projects = [
    {
      title: "Mandala Maker",
      tags: ["Typescript", "Figma","Plugin"],
      description: "Mandala Maker allows you to craft intricate mandala patterns from your own designs. It offers adjustable settings for segment count, element spacing, design rotation, and overall mandala size.",
      projectLink: "https://www.figma.com/community/plugin/1304874310414952650/mandala-maker"
    },
    {
      title: "Circular Clone",
      tags: ["Typescript", "Figma","Plugin"],
      description: "Circular Clone allows you to arrange clones of objects on your Figma canvas along a circular shape. You can control the number of segments, width, and rotation angle of the circular shape as well as the angle of rotation of the cloned objects.",
      projectLink: "https://www.figma.com/community/plugin/1293975517470860904/circular-clone"
    },
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
      title: "Circular Clone - Landing Page",
      tags: ["Tailwind", "Landing Page", "WIP"],
      description: "A Simple landing page for my circular clone plugin that uses tailwind css for styling.",
      projectLink: "https://circularclone.netlify.app/"
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
