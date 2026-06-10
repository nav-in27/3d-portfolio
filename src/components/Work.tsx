import WorkImage from "./WorkImage";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./styles/Work.css";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    num: "01",
    title: "College Timetable Generator",
    category: "Optimization Engine",
    tools: "Python, PostgreSQL, Greedy + Genetic Algorithm",
    link: "https://github.com/nav-in27/timetable-gen",
    image: "/images/cover_timetable.jpg",
  },
  {
    num: "02",
    title: "Customer Churn Analysis",
    category: "ML Pipeline",
    tools: "Scikit-learn, Pandas, XGBoost, Cross-Validation",
    link: "https://github.com/nav-in27/churn-prediction",
    image: "/images/cover_churn.jpg",
  },
  {
    num: "03",
    title: "Bayesian Lung Cancer Risk",
    category: "Statistical Analysis",
    tools: "R, Bayesian Regression, Shiny Dashboard",
    link: "https://github.com/nav-in27/lung-cancer-analysis",
    image: "/images/cover_lung.jpg",
  },
];

const Work = () => {
  useGSAP(() => {
    // Check if screen is wide enough for horizontal scroll
    const isDesktop = window.innerWidth > 1024;

    if (!isDesktop) {
      // On mobile/tablet, don't apply horizontal scroll animation
      return;
    }

    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
