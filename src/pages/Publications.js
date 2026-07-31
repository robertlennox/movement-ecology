import { Container } from 'react-bootstrap';
import { publications } from '../data/publications';

function PublicationCard({ publication }) {
  return (
    <div className="publication-row mb-3">
        <img className="publication-row__img" src={publication.listImage} alt={publication.title} />
        <div className="publication-row__body">
          <div className="publication-row__title">{publication.title}</div>
          <div className="publication-row__meta" dangerouslySetInnerHTML={{ __html: publication.citation }}/>
          <div className="publication-row__meta">
            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="publication-link">
              View publication →
            </a>
          </div>
        </div>
    </div>
  );
}

export default function Publications() {
  let list = [...publications].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="page-offset">
      <Container className="py-5">
        <div className="eyebrow mb-2">In Media</div>
        <h1 className="mb-4">Publications</h1>
        {list.length === 0 ? (
          <p className="text-secondary">No publications to show yet.</p>
        ) : (
          list.map((p) => <PublicationCard key={p.title} publication={p} />)
        )}
      </Container>
    </div>
  );
}