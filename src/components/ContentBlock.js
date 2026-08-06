import { Row, Col } from 'react-bootstrap';

/**
 * One image + text block on a project page.
 * 'flip' alternates the layout: even index -> image left, odd index -> image right.
 * On mobile everything stacks image-over-text regardless.
 */
export default function ContentBlock({ image, text, flip = false }) {
  const imageCol = image && (
    <Col md={6} className="mb-3 mb-md-0">
      <img src={image} alt="" className="img-fluid rounded shadow-sm" />
    </Col>
  );
  const textCol = text && (
    <Col md={image ? 6 : 12} className="d-flex align-items-center">
      <p className="content-block__text mb-0">{text}</p>
    </Col>
  );

  return (
    <Row className={`content-block g-4 my-2 my-md-4 ${flip ? 'flex-md-row-reverse' : ''}`}>
      {imageCol}
      {textCol}
    </Row>
  );
}
