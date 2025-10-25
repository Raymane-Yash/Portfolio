

export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-white text-center py-4 ">
                <div className="container">
                    <h5 className="fw-bold mb-3">Let's Connect</h5>
                    <div className="d-flex justify-content-center mb-3 gap-3">
                        <a
                            href="mailto:yashraymane36@gmail.com"
                            className="text-white text-decoration-none"
                            target="_blank"
                            rel="noreferror"
                        >
                            <i class="bi bi-envelope-fill"></i>Email
                        </a>

                        <a
                            href="https://www.linkedin.com/in/raymane-yash/"
                            className="text-white text-decoration-none"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-linkedin me-1"></i>LinkedIn
                        </a>

                        <a
                            href="https://github.com/Raymane-Yash"
                            className="text-white text-decoration-none"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-github me-1"></i>GitHub
                        </a>

                        <p className="mb-0 small text-secondary">
                            © {new Date().getFullYear()} Yash Raymane — Built with 💻 React & Bootstrap
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}