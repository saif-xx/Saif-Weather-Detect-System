import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Social and email icons
  
function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-3 mt-auto">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2025 Saif Weather Reoprts. All rights reserved.</p>
            <p>
              <FaEnvelope className="me-1" /> Contact:{' '}
              <a href="mailto:saifnaikwade03@gmail.com" className="text-neutral">
                saifnaikwade03@gmail.com
              </a>
            </p>
            <div>
              <a href="https://twitter.https://github.com/saif-xx" className="text-neutral mx-2">
                <FaGithub className="me-1" /> GitHub
              </a>
              <a href="https://https://www.linkedin.com/in/saif-naikwade-11b2a624a/.com" className="text-neutral mx-2">
                <FaLinkedin className="me-1" /> LinkeDin
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;