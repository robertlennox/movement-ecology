import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { people } from '../data/people';
import { slugify, projectSlug } from '../utils/helpers';
import ProjectListItem from '../components/ProjectListItem';

export default function Projects() {

  console.log(projects.map(p => [p.name, projectSlug(p)]));
  const { personSlug } = useParams();

  let list = [...projects].sort((a, b) => b.date.localeCompare(a.date));

  let activePerson = null;
  if (personSlug) {
    activePerson = people.find((p) => slugify(p.name) === personSlug);
    list = list.filter((proj) =>
      proj.people?.some((name) => slugify(name) === personSlug)
    );
  }

  const heading = activePerson ? activePerson.name : 'Projects';

  return (
    <div className="page-offset">
      <Container className="py-5">
        <div className="eyebrow mb-2">Our work</div>
        <div className="d-flex flex-wrap align-items-baseline gap-3 mb-4">
          <h1 className="mb-0">{heading}</h1>
          {activePerson && (
            <Link to="/projects" className="text-decoration-none fw-semibold">
              ← All projects
            </Link>
          )}
        </div>

        {activePerson && (
          <p className="text-secondary">
            Showing projects involving <strong>{activePerson.name}</strong>.
          </p>
        )}

        {list.length === 0 ? (
          <p className="text-secondary">No projects to show yet.</p>
        ) : (
          list.map((p) => <ProjectListItem key={p.name} project={p} />)
        )}
      </Container>
    </div>
  );
}
