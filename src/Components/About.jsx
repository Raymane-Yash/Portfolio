import {motion} from "framer-motion"

export default function About() {
  return (
    <section className="py-5 bg-white" id="about">
       <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Section title */}
        <h2 className="h4 fw-bold mb-3">About Me</h2>

        {/* Short bio */}
        <p className="lead w-75 ">
          Hi, I'm <span className="text-primary fw-semibold">Yash Raymane</span> — a passionate and disciplined 
          <strong> Frontend Developer </strong> focused on building clean, modern, and responsive user interfaces.
          I love working with <strong>React, Bootstrap, and JavaScript</strong> to create smooth, visually engaging 
          experiences that feel great to use.
        </p>
        <p className="text-muted w-75 ">
          I’m currently learning advanced frontend concepts and exploring full-stack development.
          My goal is to join a team where I can build impactful digital products and grow as a developer.
        </p>

        {/* Key points / highlights */}
         <ul className="mx-auto">
          <li>Specialized in responsive and modern web design</li>
          <li>Strong skills in HTML, CSS, Bootstrap, JavaScript, and React</li>
          <li>Building projects that demonstrate real-world frontend solutions</li>
        </ul>
      </motion.div>
    </section>
  );
}
