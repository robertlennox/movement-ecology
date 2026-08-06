import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { projectSlug, formatDate, getContentBlocks } from '../utils/helpers';
import PeopleLinks from '../components/PeopleLinks';
import ContentBlock from '../components/ContentBlock';
import CollectionCarousel from '../components/CollectionCarousel';

export default function ProjectDetail() {
  const { projectSlug: slug } = useParams();
  const project = projects.find((p) => projectSlug(p) === slug);

  if (!project) {
    return (
      <div className="page-offset">
        <Container className="py-5 text-center">
          <h1>Project not found</h1>
          <Link to="/projects">← Back to all projects</Link>
        </Container>
      </div>
    );
  }

  const blocks = getContentBlocks(project);

  return (
    <>
      <div className="project-banner">
        <img src={project.bannerImage} alt={project.name} />
        <div className="project-banner__scrim" />
        <div className="project-banner__caption">
          <Container>
            <h1 className="fw-bold mb-1">{project.name}</h1>
            <div className="mb-1">{formatDate(project.date)}</div>
            <PeopleLinks className="text-white-50" people={project.people}  />
          </Container>
        </div>
      </div>

      <Container className="py-5">
        {blocks.map((b, i) => (
          <ContentBlock key={i} image={b.image} text={b.text} flip={i % 2 === 1} />
        ))}

        {project.collection?.length > 0 && (
          <div className="mt-5">
            <div className="eyebrow mb-2">Gallery</div>
            <h2 className="h4 mb-3">Collection</h2>
            <CollectionCarousel items={project.collection} />
          </div>
        )}

        <div className="mt-5">
          <Link to="/projects" className="text-decoration-none fw-semibold">← All projects</Link>
        </div>
      </Container>
    </>
  );
}
