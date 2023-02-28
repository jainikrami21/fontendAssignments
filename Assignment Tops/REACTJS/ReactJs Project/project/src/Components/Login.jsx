import React from "react";

function Contact() {
  return (
    <div>
      {/* Contact Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
              <div
                className="section-title text-center position-relative pb-3 mb-5 mx-auto"
                style={{ maxWidth: 600 }}>
                <h5 className="fw-bold text-primary text-uppercase">Login</h5>
              </div>
              <form>
                <div className="row g-3">
                  <div className="col-md-12">
                    <input
                      type="email"
                      name="email"
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Email"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="password"
                      name="password"
                      className="form-control border-0 bg-light px-4"
                      placeholder="Password"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="password"
                      name="password"
                      className="form-control border-0 bg-light px-4"
                      placeholder="Confirm Password"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder={0}
                style={{ minHeight: 350, border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  );
}

export default Contact;
