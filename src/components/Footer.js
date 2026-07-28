import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer pt-5 pb-4 mt-5">
      <Container>
        <Row className="gy-4">
          <Col md={5}>
            <h6 className="mb-2">MER Group at Dalhousie University</h6>
            <p className="small mb-0">
              Marine animal movement ecology and ecophysiology research across Atlantic Canada.
              Dalhousie University, Halifax, Nova Scotia.
            </p>
          </Col>
          <Col md={3}>
            <h6 className="mb-2">Explore</h6>
            <ul className="list-unstyled small mb-0">
              <li><Link to="/our-group">Personnel</Link></li>
              <li><Link to="/projects">Research</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className="mb-2">Contact</h6>
            <ul className="list-unstyled small mb-0">
              <li>Department of Biology</li>
              <li>Dalhousie University</li>
              <li>Halifax, NS, Canada</li>
              <li><a href="mailto:robert.lennox@dal.ca">robert.lennox@dal.ca</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
        <div className="small d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>© {year} Robert Lennox. All rights reserved.</span>
          <span>Movement Ecology Research Group</span>
        </div>
      </Container>
    </footer>
  );
}
