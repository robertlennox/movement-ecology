import { Link } from 'react-router-dom';
import { slugify } from '../utils/helpers';

/**
 * Renders a list of people as clickable filter links.
 * Clicking a name -> /projects/by/<name-slug> (only that person's projects).
 * Used on both the project list rows and the project detail page.
 */
export default function PeopleLinks({ people = [], className = '' }) {
  return (
    <span className={`meta-people ${className}`}>
      {people.map((name, i) => (
        <span key={name}>
          <Link
            to={`/projects/by/${slugify(name)}`}
            className="person-link"
            onClick={(e) => e.stopPropagation()} // don't trigger a parent row link
          >
            {name}
          </Link>
          {i < people.length - 1 ? ', ' : ''}
        </span>
      ))}
    </span>
  );
}
