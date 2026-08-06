import { useNavigate } from "react-router-dom";
import { projectSlug, formatDate } from '../utils/helpers';
import PeopleLinks from './PeopleLinks';

export default function ProjectListItem({ project }) {
  const navigate = useNavigate();
  const slug = projectSlug(project);

  return (
    <div
      className="project-row mb-3"
      role="link"
      tabIndex={0}
      onClick={() => navigate(`/projects/${slug}`)}
      onKeyDown={(e) => (e.key === 'Enter' ? navigate(`/projects/${slug}`) : null)}
    >
      <img className="project-row__img" src={project.listImage} alt={project.name} />
      <div className="project-row__body">
        <h3 className="project-row__title">{project.name}</h3>
        <div className="project-row__meta">{formatDate(project.date)}</div>
        <div className="project-row__meta">
          <PeopleLinks people={project.people} />
        </div>
      </div>
    </div>
  );
}