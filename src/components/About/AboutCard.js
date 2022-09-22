import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Krushna Biradar </span>
            from <span className="purple"> Maharastra, India.</span>
            <br />I have completed my graduation from Sinhgad Institute of
            Technology, Lonavala. And recently, I have completed my
            <span className="purple"> Full Stack Developer</span> course (MERN
            Stack) by  <span className="purple"> GUVI.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Krushna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
