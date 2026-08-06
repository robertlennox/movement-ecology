import { Container } from 'react-bootstrap';

export default function Contact() {
  return (
    <div className="page-offset">
      <Container className="py-5" style={{ maxWidth: 820 }}>
        <div className="eyebrow mb-2">Get in touch</div>
        <h1 className="mb-4">Contact Us</h1>
        <p className="lead text-secondary">
          Placeholder until a form is developed.
        </p>
        <ul className="list-unstyled">
          <li>Department of Biology, Dalhousie University</li>
          <li>Halifax, Nova Scotia, Canada</li>
          <li><a href="mailto:lennox@dal.ca">lennox@dal.ca</a></li>
        </ul>
      </Container>
    </div>
  );
}
