import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from '../assets/img/linkedin.png';
import navIcon2 from '../assets/img/tweet.png';
import navIcon3 from '../assets/img/insta.png';

export const Footer = () => {

  return (
    <footer className="footer">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="text-center text-sm-start mb-4 mb-sm-0">
            <h2>Raj Patil</h2>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end" style={{marginTop:"-20px"}}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/raj-patil-2870551b0/"><img src={navIcon1} alt="" /></a>
              <a href="https://twitter.com/patilraj1227"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/raj_patil_1227/"><img src={navIcon3} alt="" /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center" style={{marginTop:"-20px", marginBottom:"-30px"}}>
            <p className="text-muted">© 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
