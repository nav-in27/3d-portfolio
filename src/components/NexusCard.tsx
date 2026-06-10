import { MdDownload, MdArrowOutward } from "react-icons/md";

import "./styles/NexusCard.css";

const NexusCard = () => {
  return (
    <div className="nexus-section section-container" id="nexus">
      <div className="nexus-container">
        <h3 className="title">Identity</h3>
        <div className="nexus-card">
          <div className="nexus-card-inner">
            {/* Animated border glow */}
            <div className="nexus-glow" />

            {/* Card content */}
            <div className="nexus-content">
              {/* Top row: status indicator + badge */}
              <div className="nexus-top-row">
                <div className="nexus-status">
                  <span className="nexus-dot" />
                  <span className="nexus-status-text">ACTIVE</span>
                </div>
                <span className="nexus-badge">AI/ML</span>
              </div>

              {/* Name + title */}
              <div className="nexus-identity">
                <h2 className="nexus-name">
                  NAVEEN <span>R</span>
                </h2>
                <p className="nexus-title">
                  Algorithm Engineer & ML Systems Builder
                </p>
              </div>

              {/* Stats row */}
              <div className="nexus-stats">
                <div className="nexus-stat">
                  <span className="nexus-stat-value">3+</span>
                  <span className="nexus-stat-label">Projects</span>
                </div>
                <div className="nexus-stat-divider" />
                <div className="nexus-stat">
                  <span className="nexus-stat-value">5+</span>
                  <span className="nexus-stat-label">Certifications</span>
                </div>
                <div className="nexus-stat-divider" />
                <div className="nexus-stat">
                  <span className="nexus-stat-value">B.E.</span>
                  <span className="nexus-stat-label">AI & ML</span>
                </div>
              </div>

              {/* Skills tags */}
              <div className="nexus-skills">
                <span className="nexus-skill-tag">Python</span>
                <span className="nexus-skill-tag">Machine Learning</span>
                <span className="nexus-skill-tag">AutoML</span>
                <span className="nexus-skill-tag">Data Science</span>
                <span className="nexus-skill-tag">React</span>
                <span className="nexus-skill-tag">Three.js</span>
              </div>

              {/* Bottom row: location + actions */}
              <div className="nexus-bottom-row">
                <span className="nexus-location">📍 Trichy, Tamil Nadu</span>
                <div className="nexus-actions">
                  <a
                    href="/resume/Naveen_R_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nexus-btn nexus-btn-primary"
                    data-cursor="disable"
                  >
                    <MdDownload /> Resume
                  </a>
                  <a
                    href="https://linkedin.com/in/naveen-r-19a160326"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nexus-btn nexus-btn-ghost"
                    data-cursor="disable"
                  >
                    LinkedIn <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>

            {/* Corner accents */}
            <div className="nexus-corner nexus-corner-tl" />
            <div className="nexus-corner nexus-corner-tr" />
            <div className="nexus-corner nexus-corner-bl" />
            <div className="nexus-corner nexus-corner-br" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NexusCard;
