import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroVideo from "../components/HeroVideo";
import ProjectListItem from '../components/ProjectListItem';
import { projects } from "../data/projects";

export default function Home() {
  const recent = [...projects]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <HeroVideo />

      <section className="py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="eyebrow mb-2">The work we do</div>
              <h2 className="mb-3">Tracking aquatic animals to inform conservation</h2>
              <p className="lead text-secondary">
                We combine field & acoustic telemetry, movement modelling, and 
                long-term monitoring to understand how animals move through 
                Atlantic Canada - and how that knowledge can guide management 
                and conservation.
              </p>
              <Button as={Link} to="/projects" variant="primary" className="mt-2">
                See our projects
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <div className="eyebrow mb-1">Recent</div>
              <h2 className="mb-0">Projects</h2>
            </div>
            <Link to="/projects" className="fw-semibold text-decoration-none">View all →</Link>
          </div>
          {recent.map((p) => (
            <ProjectListItem key={p.name} project={p} />
          ))}
        </Container>
    </section>
      <section className="py-5 text-center">
        <Container>
          <div className="eyebrow mb-2">The people</div>
          <h2 className="mb-3">A multidisciplinary team</h2>
          <p className="lead text-secondary mb-4">
            Undergraduate & graduate students, researchers, and collaborators 
            working across marine and movement ecology.
          </p>
          <Button as={Link} to="/our-group" variant="outline-primary">Meet our group</Button>
        </Container>
      </section>
    </>
  );
}