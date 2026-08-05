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
  // Newest first
  const sorted = [...publications].sort((a, b) => b.date.localeCompare(a.date));
  const total = sorted.length;

  // Group by year, preserving the newest-first order
  const groups = [];
  sorted.forEach((pub, i) => {
    const year = pub.date.slice(0, 4);
    const number = total - i; // count up from the oldest at the bottom
    let group = groups.find((g) => g.year === year);
    if (!group) {
      group = { year, items: [] };
      groups.push(group);
    }
    group.items.push({ ...pub, number });
  });

  return (
    <div className="page-offset">
      <Container className="py-5">
        <div className="eyebrow mb-2">In Media</div>
        <h1 className="mb-4">Publications</h1>
        {groups.length === 0 ? (
          <p className="text-secondary">No publications to show yet.</p>
        ) : (
          groups.map((group) => (
            <section key={group.year} className="mb-5">
              <h2 className="pub-year">{group.year}</h2>
              {group.items.map((p) => (
                <PublicationCard key={p.number} publication={p} number={p.number} />
              ))}
            </section>
          ))
        )}
      </Container>
    </div>
  );
}