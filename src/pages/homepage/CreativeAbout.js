import React from 'react';
import '../homepage/creativeabout.css';

const CreativeAbout = () => {
  const testimonials = [
    {
      quote:
        "This platform helped me turn vague ideas into polished visuals. The tools here are intuitive and inspiring!",
      name: "Elena M.",
      role: "Graphic Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "As a content creator, I love the daily writing prompts and AI tools. It keeps me focused and excited.",
      name: "Marcus T.",
      role: "Content Creator",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      quote:
        "CreativeHub is my go-to for brainstorming, organizing projects, and learning new techniques.",
      name: "Priya S.",
      role: "UX Researcher",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
    },
  ];

  return (
    <div className="container-fluid about-maincontainer text-white py-5">
      <div className="container">
        {/* Hero Section */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-5 fw-bold">Empowering Creators Everywhere</h1>
            <p className="fs-5">
              From concept to creation, discover tools and inspiration to bring your ideas to life.
            </p>
            <button className="btn btn-primary btn-lg mt-3">Explore Tools</button>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1637399552290-cc9d0bab645e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Creative Hub"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Tabs Section */}
        <div className="row mt-5">
          <div className="col-12">
            <ul className="nav nav-tabs justify-content-center" id="creativeTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="services-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#services"
                  type="button"
                  role="tab"
                  aria-controls="services"
                  aria-selected="true"
                >
                  Tools
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="testimonials-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#testimonials"
                  type="button"
                  role="tab"
                  aria-controls="testimonials"
                  aria-selected="false"
                >
                  Testimonials
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Contact
                </button>
              </li>
            </ul>

            <div className="tab-content mt-4" id="creativeTabsContent">
              {/* Services */}
              <div className="tab-pane fade show active" id="services" role="tabpanel">
                <h5 className="fw-bold mb-3">Creative Tools We Offer</h5>
                <div className="container py-4">
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="bg-white text-dark p-4 rounded-4 shadow h-100">
                        <h4>AI Writing Assistant</h4>
                        <p>Craft stories, blog posts, or scripts with real-time AI suggestions.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-white text-dark p-4 rounded-4 shadow h-100">
                        <h4>Design Templates</h4>
                        <p>Access modern, responsive templates for portfolios, branding, and social media.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-white text-dark p-4 rounded-4 shadow h-100">
                        <h4>Idea Generator</h4>
                        <p>Get fresh project ideas and prompts for art, code, or content creation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="tab-pane fade" id="testimonials" role="tabpanel">
                <div className="container py-5">
                  <h3 className="text-center fw-bold mb-5">What Creators Say</h3>
                  <div className="row g-4">
                    {testimonials.map((t, idx) => (
                      <div className="col-md-4" key={idx}>
                        <div className="position-relative text-center bg-white text-dark rounded-4 shadow p-4 pt-5">
                          <div className="position-absolute top-0 start-50 translate-middle">
                            <img
                              src={t.image}
                              alt={t.name}
                              className="rounded-circle border border-3 border-white"
                              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                            />
                          </div>
                          <p className="fst-italic mt-4">“{t.quote}”</p>
                          <h6 className="fw-bold mb-0">{t.name}</h6>
                          <small className="text-muted">{t.role}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="tab-pane fade" id="contact" role="tabpanel">
                <h5 className="fw-bold">Get in Touch</h5>
                <p>Have an idea, feedback, or just want to collaborate? We’d love to hear from you.</p>
                <button className="btn btn-outline-light">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeAbout;
