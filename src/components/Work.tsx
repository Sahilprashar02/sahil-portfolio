import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdOpenInNew } from "react-icons/md";
import DashboardImg from "../assets/Dashboard.png";

const projects = [
  {
    title: "TeamBaithak",
    category: "Real-Time Collaboration & AI Assistant",
    tools: "Next.js, React, TypeScript, Node.js, Express, MongoDB, WebRTC, Socket.IO",
    bullets: [
      "Built a workspace-centric full-stack collaboration platform integrating real-time chat, voice/video meetings, and task management in a unified system.",
      "Built real-time communication using WebRTC and Socket.IO, enabling live messaging, meeting presence, and synchronized updates.",
      "Designed backend architecture with role-based access control, workspace isolation, and efficient state management.",
      "Designed a modular and extensible architecture to support real-time collaboration features across multiple workspaces.",
      "Integrated an AI assistant to automate workflows such as task creation, meeting scheduling, and conversation summarization.",
    ],
    link: "https://teambaithak.com",
    image: DashboardImg,
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          {projects.length > 1 && (
            <>
              <button
                className="carousel-arrow carousel-arrow-left"
                onClick={goToPrev}
                aria-label="Previous project"
                data-cursor="disable"
              >
                <MdArrowBack />
              </button>
              <button
                className="carousel-arrow carousel-arrow-right"
                onClick={goToNext}
                aria-label="Next project"
                data-cursor="disable"
              >
                <MdArrowForward />
              </button>
            </>
          )}

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.bullets && project.bullets.length > 0 && (
                          <ul className="carousel-bullets">
                            {project.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="carousel-link"
                            data-cursor="disable"
                          >
                            Visit Live <MdOpenInNew />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          {projects.length > 1 && (
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                    }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                  data-cursor="disable"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
