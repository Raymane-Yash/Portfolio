import yash from "../assets/Yash.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
export default function Hero() {


  return (
    <>
      <section className="bg-light py-5">
        <div className="container d-flex flex-column gap-5 align-items-center justify-content-between">


          {/* Right side image */}

          {/* Image Section */}
          <motion.div
            className="mt-4 mt-md-0 d-flex justify-content-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              src={yash}
              alt="Yash Raymane"
              className="rounded-circle shadow"
              style={{ width: "220px", height: "220px", objectFit: "cover" }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.div>


          {/* left side content */}
          <motion.div className="text-center text-md-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}>

            <h1 className="display-5 fw-bold">Hi, I'm <span className="text-primary">Yash Raymane</span></h1>
            <p className="lead text-muted">
              Frontend Developer | Aspiring MERN Stack Developer
            </p>
            <p className="mt-3">
              I love building clean, responsive, and interactive web experiences.
            </p>

            <div className="mt-4 text-center ">
              <Link to="/projects" className="btn btn-primary rounded-pill me-2">View Projects</Link>
              <Link to="/contact" className="btn btn-outline-primary rounded-pill">Hire Me</Link>
            </div>
          </motion.div>



        </div>
      </section>
    </>
  )
}