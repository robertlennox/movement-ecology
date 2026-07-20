import poster from '../assets/videos/hero.jpg';
import heroVideo from '../assets/videos/hero.mp4';

export default function HeroVideo() {
  return (
    <section className="hero position-relative d-flex align-items-center justify-content-center text-center text-white">
      <video 
        className='hero__video'
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        src={heroVideo}
      />
      <div className='hero__scrim' />

      <div className='hero__content px-3'>
        <p className='mb-0'>
          The Lennox Lab is a multidisciplinary lab with marine and movement 
          ecology conservation focuses across Atlantic Canada. 
        </p>
        <p className='mt-3 mb-0 fw-bold'>
          Based in Halifax, Nova Scotia at Dalhousie University
        </p>
      </div>

      <div className='hero__scroll-cue small'>
        <div>↓</div>
      </div>
    </section>
  )
}