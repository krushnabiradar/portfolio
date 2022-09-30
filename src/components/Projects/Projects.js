import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Student from "../../Assets/Projects/Student.png";
import chatify from "../../Assets/Projects/chatify.png";
import Admin from "../../Assets/Projects/Admin.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Admin}
              isBlog={false}
              title="Admin dashbord using react."
              description="Admit dashbord using react"
              ghLink="https://github.com/krushnabiradar/admin-dashboard-reactTask-main"
              demoLink="https://admin-dashboard-reacttask-main.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Student}
              isBlog={false}
              title="Student teacher management."
              description="This web is build by using react in which we can add users, see user profiles and we can set the type of user as student/teacher"
              ghLink="https://github.com/krushnabiradar/social-media-client"
              demoLink="https://student-teacher-management-by-kris.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Social Media Web"
              description="Social media web is similar to other social platforms like Facebook and Instagram. Here we can follow/unFollow friends, and upload the images on web. Also we can chat with our friends."
              ghLink="https://github.com/krushnabiradar/social-media-client"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
