// app/about.js
import Image from 'next/image';
import "./about.css"


export default function About() {
  return (
    <div className="about-page">
      <div className="content-container">
        <h1>About Us</h1>
        
        {/* Image */}
        <div className="image-container">
          <Image
            src="/hero-2.jpg"
            alt="About Us"
            width={800}
            height={400}
            className="rounded-lg shadow-xl mx-auto"
          />
        </div>

        {/* Content */}
        <p>
          Welcome to our website! We are dedicated to delivering exceptional service and quality. Our goal is to provide a user-friendly and seamless experience for our visitors.
        </p>

        <div className="team-section">
          <div>
            <h2>Our Team</h2>
            <p>Meet the passionate people who bring our vision to life.</p>
          </div>
          <div>
            <h2>Our Mission</h2>
            <p>To create meaningful experiences that inspire and connect people.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
