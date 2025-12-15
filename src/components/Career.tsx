import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br />education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Programming Foundations</h4>
                <h5>Self-taught & Online Courses</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built a strong foundation in programming through self-study and
              online certifications. Earned credentials in JavaScript, HTML/CSS,
              Operating Systems, and Prompt Engineering from OpenAI. Developed
              early interest in algorithmic problem-solving and system design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech AI & Machine Learning</h4>
                <h5>K. Ramakrishnan College of Technology</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Currently pursuing a B.Tech in AI & Machine Learning with an 8.3/10
              CGPA. Deep focus on Database Systems, Discrete Mathematics, and
              Algorithmic Analysis. Building production-grade projects including
              a constraint-based timetable generator used by the department.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer (Seeking Internship)</h4>
                <h5>Open to Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively building end-to-end ML pipelines, Bayesian analysis
              systems, and optimization engines. Certified in Oracle Cloud
              Infrastructure and Generative AI. Looking for an AI/ML internship
              where I can contribute to production systems and scale real-world
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
