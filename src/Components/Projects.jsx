export default function Projects() {
  const projects = [
    {
      title: "One MCN – Influencer Marketing Agency",
      description: "A modern marketing agency website built for ONE MCN, showcasing influencer partnerships, services, and brand collaborations. Designed with React and Bootstrap for a sleek and responsive experience.",
      tech: ["React", "CSS3", "Responsive Design", "github-pages"],
      liveUrl: "https://raymane-yash.github.io/Market-Agency-React/",
      repoUrl: "https://github.com/Raymane-Yash/Market-Agency-React"
    },

    {
      title: "Bootstrap Project Showcase",
      description: "Built a responsive Bootstrap website demonstrating cards, forms, tables, buttons, and carousels. Developed to practice and showcase my frontend skills.",
      tech: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
      liveUrl: "https://raymane-yash.github.io/bootstrap-project/",
      repoUrl: "https://github.com/Raymane-Yash/bootstrap-project"
    },

    {
      title: "Gradient Generator App",
      description: "A responsive React + Bootstrap app that generates random linear and radial gradients with copy functionality to enhance frontend design practice.",
      tech: ["HTML", "Bootstrap 5", "JavaScript"],
      liveUrl: "https://gradient-generator-app.vercel.app/",
      repoUrl: "https://github.com/Raymane-Yash/Gradient-Generator-App"
    }
  ]
  return (
    <>
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="h4 fw-bold mb-4 text-center">Selected Projects</h2>
          <div className="row g4">
            {projects.map((proj, idx) => (
              <div className="col-md-6 col-lg-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{proj.title}</h5>
                    <p className="card-text flex-grow-1">{proj.description}</p>
                    <p className="mb-2"><small className="text-secondary">Tech: {proj.tech.join(", ")}</small></p>
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary me-2 mb-2">Live Demo</a>
                    <a href={proj.repoUrl} target="_blank" rel="noreferrer" className="btn btn-outline-secondary mb-2">Source Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}