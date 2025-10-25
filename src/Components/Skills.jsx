export default function Skills(){
  return(
    <>
    <section className="py-5 bg-light" id="skills">
      <div className="container">
        <h3 className="h5 fw-bold mb-4">Skills</h3>
        <div className="row g-3">

          {/* first skill */}
          <div className="col-6 col-md-3">
            <div className="card p-3 text-center">
              <strong>HTML</strong>
            <div className="progress mt-2">
                <div className="progress-bar" style={{ width: "100%" }}>100%</div>
              </div>
            </div>
          </div>
          {/* second skill */}
          <div className="col-6 col-md-3">
            <div className="card p-3 text-center">
              <strong>CSS And Bootstrap</strong>
              <div className="progress mt-2">
                <div className="progress-bar" style={{ width: "100%" }}>100%</div>
              </div>
            </div>
          </div>

          {/* third skill */}
          <div className="col-6 col-md-3">
            <div className="card p-3 text-center">
              <strong>JavaScript</strong>
              <div className="progress mt-2">
                <div className="progress-bar" style={{ width: "100%" }}>100%</div>
              </div>
            </div>
          </div>

          {/* fourth skill */}
          <div className="col-6 col-md-3">
            <div className="card p-3 text-center">
              <strong>React</strong>
              <div className="progress mt-2">
                <div className="progress-bar" style={{ width: "100%" }}>100%</div>
              </div>
            </div>
          </div>

          {/* fifth skill */}
          <div className="col-6 col-md-3">
            <div className="card p-3 text-center">
              <strong>JQuery</strong>
              <div className="progress mt-2">
                <div className="progress-bar" style={{ width: "100%" }}>100%</div>
              </div>
            </div>
          </div>

          {/* sixth skill */}
          <div className="col-6 col-md-3">
            <div className="card p-3 text-center">
              <strong>Node JS</strong>
              <div className="progress mt-2">
                <div className="progress-bar" style={{ width: "100%" }}>100%</div>
              </div>
            </div>
          </div>

          {/* seventh skill */}
          <div className="col-6 col-md-3">
            <div className="card p-3 text-center">
              <strong>MongoDB</strong>
              <div className="progress mt-2">
                <div className="progress-bar" style={{ width: "100%" }}>100%</div>
              </div>
            </div>
          </div>

          {/* eightth skill */}
          <div className="col-6 col-md-3">
            <div className="card p-3 text-center">
              <strong>Express JS</strong>
              <div className="progress mt-2">
                <div className="progress-bar" style={{ width: "100%" }}>100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}