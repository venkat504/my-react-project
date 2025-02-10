import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 bg-light p-5">
      {/* Header */}
      <h1 className="display-4 fw-bold text-dark text-center">About Us</h1>
      <p className="lead text-secondary text-center mt-3 w-75">
        We are committed to delivering the best services and experiences. Our team is dedicated to innovation and excellence.
      </p>
      
      {/* Team Section */}
      <div className="row mt-5 w-100 text-center">
        <div className="col-md-4 mb-4">
          <div className="p-4 bg-white shadow rounded">
            <h2 className="h4 fw-semibold text-dark">Our Mission</h2>
            <p className="text-muted mt-2">To provide high-quality services that exceed expectations.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 bg-white shadow rounded">
            <h2 className="h4 fw-semibold text-dark">Our Vision</h2>
            <p className="text-muted mt-2">To be a leader in our industry through innovation and excellence.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 bg-white shadow rounded">
            <h2 className="h4 fw-semibold text-dark">Our Values</h2>
            <p className="text-muted mt-2">Integrity, Customer Satisfaction, and Continuous Improvement.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
