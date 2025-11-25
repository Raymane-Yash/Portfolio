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
      title: "People Manager - CRUD App",
      description: "A full-stack CRUD application built using Node.js, Express, MongoDB, and EJS. Users can add, view, update, and delete user profiles. Designed to practice backend development, routing, server-side rendering, and database operations.",
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "HTML", "CSS"],
      liveUrl: "",
      repoUrl: "https://github.com/Raymane-Yash/CRUDinexpress"
    },

    {
      title: "MongoDB Connection Demo",
      description: "A simple Node.js and Express application demonstrating how to connect a backend server to MongoDB using Mongoose. Built to understand environment variables, database connections, and backend setup.",
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      liveUrl: "",
      repoUrl: "https://github.com/Raymane-Yash/connectedMongoDB"
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
    },

    {
      title: "Smart Todo App (Advanced JavaScript Project)",
      description: "A feature-rich todo management app built with HTML, CSS, and vanilla JavaScript. Includes task creation, editing, deletion, category tagging, completion tracking, filters, animations, and full LocalStorage support.",
      tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage API"],
      liveUrl: "https://raymane-yash.github.io/Smart-Todo-App/",
      repoUrl: "https://github.com/Raymane-Yash/Smart-Todo-App"
    }
  ]
  return (
    <>
      <section id="projects" className="py-5 bg-light" style={{ paddingBottom: "80px" }}>
        <div className="container">
          <h2 className="h4 fw-bold mb-4 text-center">Selected Projects</h2>
          <div className="row g-4">
            {projects.map((proj, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
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