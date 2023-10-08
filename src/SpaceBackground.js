import React, { useEffect, useRef, useState } from 'react';
import './SpaceBackground.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Moved this line up

class Particle {
  constructor(x, y, size, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0) this.x = window.innerWidth;
    if (this.x > window.innerWidth) this.x = 0;
    if (this.y < 0) this.y = window.innerHeight;
    if (this.y > window.innerHeight) this.y = 0;
  }
}

const ProjectCard = ({ title, tags, description, projectLink }) => {
    return (
        <div className="projectCard">
          <FontAwesomeIcon icon={faGithub} size="2x" className="projectImage" /> {/* Reduced the size from 3x to 2x */}
          <div className="projectContent">
            <h2>{title}</h2>
            <div className="tags">
              {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
            <p>{description}</p>
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <button className="projectButton">View Project</button>
            </a>
          </div>
        </div>
      );
    };
    

const SpaceBackground = ({ projects }) => {
  const canvasRef = useRef(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeTag, setActiveTag] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    function createParticles() {
      const particleCount = 1000;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2;
        const color = `rgba(255, 255, 255, ${Math.random()})`;
        const speedX = Math.random() * 0.5 - 0.25;
        const speedY = Math.random() * 0.5 - 0.25;
        particles.push(new Particle(x, y, size, color, speedX, speedY));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });
      requestAnimationFrame(animate);
    }

    createParticles();
    animate();
  }, []);

  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    if (tag) {
      setFilteredProjects(projects.filter(project => project.tags.includes(tag)));
    } else {
      setFilteredProjects(projects);
    }
  };

  return (
    <div className="spaceWrapper">
      <button onClick={() => setIsSidebarActive(!isSidebarActive)} className="tagsButton">TAGS</button>      
        <button onClick={() => window.location.href="https://ajjuism.com"} className="mobileHomeButton">
            <FontAwesomeIcon icon={faArrowLeft} /> @ajjuism
        </button>
      <div className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
      <button onClick={() => window.location.href="https://ajjuism.com"} className="homeButton">
      <FontAwesomeIcon icon={faArrowLeft} /> Home
      </button>
      <button onClick={() => setIsSidebarActive(false)} className="closeSidebar" style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
        <h1>Projects</h1>
        <p>Hi, this is some text about myself and some stuff I have been doing.</p>        
        <h3>Tags</h3>
        <button onClick={() => handleTagClick(null)} className={`tagButton ${activeTag === null && 'active'}`}>All</button>
            {[...new Set(projects.flatMap(project => project.tags))].map(tag => (
          <button key={tag} onClick={() => handleTagClick(tag)} className={`tagButton ${activeTag === tag && 'active'}`}>{tag}</button>
        ))}
      </div>
      <div className="content">
        <a href="https://ajjuism.com" className="backButton">
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </a>
        {filteredProjects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <canvas ref={canvasRef} className="spaceCanvas"></canvas>
    </div>
  );
};

export default SpaceBackground;
