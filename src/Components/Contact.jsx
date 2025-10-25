import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmails = (e) => {
    e.preventDefault(); // Prevent page reload

    emailjs
      .sendForm(
        "service_lr3fy6w", // your service ID
        "template_6eqoxtv", // your template ID
        form.current,       // the form reference
        "ONCty1y-nPhq2ua4T" // your public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully! Thank you for reaching out.");
          form.current.reset();
        },
        (error) => {
          alert("❌ Oops! Something went wrong. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Get In Touch</h2>
        <p className="text-center text-muted mb-5">
          I’m actively looking for Frontend or Full Stack Developer opportunities.
          If my skills align with your team’s needs, let’s connect!  
          You can reach out through this form or directly via email.
        </p>

        {/* contact form */}
        <form
          ref={form}
          onSubmit={sendEmails} // attach submit handler
          className="mx-auto shadow p-4 bg-white rounded-4"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="form-label fw-semibold">Name</label>
            <input type="text" name="name" className="form-control" id="name" placeholder="Enter your full name" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email address" required />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-semibold">Message</label>
            <textarea name="message" className="form-control" id="message" rows="4" placeholder="Write your message..." required></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold">Send Message</button>
        </form>

        {/* Quick Contact Info */}
        <div className="text-center mt-5">
          <p className="mb-1">
            <strong>Email:</strong> <a href="mailto:yashraymane5@gmail.com" className="text-decoration-none text-dark">yashraymane36@gmail.com</a>
          </p>
          <p className="mb-1">
            <strong>Phone:</strong> <a href="tel:+917276515288" className="text-decoration-none text-dark">+91 7276515288</a>
          </p>
          <p className="mb-0 text-muted">Pune, Maharashtra, India</p>
        </div>
      </div>
    </section>
  );
}
