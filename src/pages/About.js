import { Container } from 'react-bootstrap';

export default function About() {
  return (
    <div className="page-offset">
      <Container className="py-5" style={{ maxWidth: 820 }}>
        <div className="eyebrow mb-2">About us</div>
        <h1 className="mb-4">About the Lab</h1>
        <p className="lead text-secondary">
          Placeholder for the main copy here.
        </p>
        <p>
          Here is an example paragraph to add more text, etc.
        </p>
      </Container>
    </div>
  );
}
