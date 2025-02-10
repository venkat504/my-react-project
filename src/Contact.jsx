import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      {/* Header */}
      <h1 className="display-4 fw-bold text-dark">Contact Us</h1>
      <p className="lead text-muted text-center w-75">
        Get in touch with us for any inquiries or support. We're here to help!
      </p>
      
      {/* Contact Form */}
      <div className="card shadow-lg p-4 mt-4 w-50">
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <button className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
