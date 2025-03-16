import React from "react";
import Form from "./Form";
import "./LandingPage.css";

function LandingPage() {
  const services = [
    { title: "Presentation Design" },
    { title: "Audio - Visual Production" },
    { title: "Translation Services" },
    { title: "Graphic Design" },
    { title: "Research & Analytics" },
    { title: "Data Processing" },
  ];

  return (
    <div className="container">
      <header className="header">
        <img className="logo" src="https://www.ez.works/ez_works.webp" alt="logo" />
        <p className="subtitle">Suite Of Business Support Services</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..
        </p>
      </header>

      <div className="services-container">
        <Form />
        <div className="services">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
