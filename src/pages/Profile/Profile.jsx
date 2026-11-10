import React from "react";
import "./Profile.css";
import profileImage from "../../assets/profile.jpg";

function Profile() {

  return (
    <div className="profile-page">

      <div className="profile-card">

        {/* Profile Image */}
        <div className="profile-image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />
        </div>

        {/* Basic Information */}
        <h1>Venkateswarlu</h1>

        <h4 className="profile-role">
          Python Full Stack Developer
        </h4>

        <p className="profile-bio">
          I am a passionate developer interested in
          building modern and responsive web
          applications. I am currently learning
          Python Full Stack Development, React,
          JavaScript, and AI & Machine Learning.
        </p>

        {/* Personal Information */}
        <div className="profile-details">

          <div className="detail-item">
            <strong>📧 Email</strong>
            <span>padakandlavenkatesh5@gmail.com</span>
          </div>

          <div className="detail-item">
            <strong>📱 Phone</strong>
            <span>+91 8790725769</span>
          </div>

          <div className="detail-item">
            <strong>📍 Location</strong>
            <span>Hyderabad, India</span>
          </div>

          <div className="detail-item">
            <strong>🎓 Education</strong>
            <span>B.Tech</span>
          </div>

        </div>

        {/* Skills */}
        <h3 className="section-title">
          Skills
        </h3>

        <div className="skills">

          <span>Python</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Bootstrap</span>
          <span>Django</span>
          <span>SQL</span>

        </div>

        {/* Statistics */}
        <div className="profile-stats">

          <div>
            <h3>10+</h3>
            <p>Projects</p>
          </div>

          <div>
            <h3>5+</h3>
            <p>Skills</p>
          </div>

          <div>
            <h3>1+</h3>
            <p>Years Learning</p>
          </div>

        </div>

        {/* Buttons */}
        <div className="profile-buttons">

          <button className="edit-btn">
            Edit Profile
          </button>

          <button className="contact-btn">
            Contact Me
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;