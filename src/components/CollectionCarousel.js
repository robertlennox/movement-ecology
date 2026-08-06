import { Carousel } from 'react-bootstrap';
import { isVideo } from '../utils/helpers';

/**
 * Bottom-of-project media carousel. Each item may be an image or a video
 */
export default function CollectionCarousel({ items = [] }) {
  if (!items.length) return null;

  return (
    <Carousel
      className="collection-carousel rounded overflow-hidden"
      interval={null}   // manual advance, so media doesn't auto skip
      indicators={items.length > 1}
      controls={items.length > 1}
    >
      {items.map((src, i) => (
        <Carousel.Item key={i}>
          {isVideo(src) ? (
            <video src={src} controls playsInline preload="metadata" />
          ) : (
            <img src={src} alt={`Collection item ${i + 1}`} />
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
