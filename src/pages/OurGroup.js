import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { currentMembers, alumni } from '../data/people';
import { slugify } from '../utils/helpers';
import placeholder from '../assets/images/margaree1.jpg';

function PersonCard({ person }) {
  return (
    <Col sm={6} lg={4} className="mb-4">
      <div className="person-card">
        <img
          className="person-card__img"
          src={person.photo || placeholder}
          alt={person.name}
        />
        <div className="person-card__body">
          <Link to={`/projects/by/${slugify(person.name)}`} className="person-card__name d-block">
            {person.name}
          </Link>
          <div className="person-card__role mb-2">{person.role}</div>
          <p className="small text-secondary mb-0">{person.bio}</p>
        </div>
      </div>
    </Col>
  );
}

export default function OurGroup() {
  return (
    <div className="page-offset">
      <Container className="py-5">
        <div className="eyebrow mb-2">The people</div>
        <h1 className="mb-4">Our Group</h1>

        <h2 className="h4 text-brand-teal mb-3">Current</h2>
        <Row>
          {currentMembers.map((p) => <PersonCard key={p.name} person={p} />)}
        </Row>

        {alumni.length > 0 && (
          <>
            <h2 className="h4 text-brand-teal mt-4 mb-3">Alumni</h2>
            <Row>
              {alumni.map((p) => <PersonCard key={p.name} person={p} />)}
            </Row>
          </>
        )}
      </Container>
    </div>
  );
}