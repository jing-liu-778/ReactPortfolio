import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import profileImg from "../../images/profile.jpg";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="blue">Me</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={profileImg} alt="profile image" className="img-fluid" style="width:160px;border-radius:50%"/>
            </Col>

        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

      </Container>
    </Container>
  );
}

export default About;

