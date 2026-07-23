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
          The Movement and Ecophysiology Research Group (MER) is a multidisciplinary animal health and performance research group focused on marine and freshwater 
          ecology. 
        </p>
        <p className='mt-3 mb-0 fw-bold'>
          Based in the Department of Biology at Dalhousie University in Halifax, Nova Scotia at Dalhousie University. Dalhousie University is in Mi'kma'ki, the traditional and unceded territory of the Mi'kmaq people.
        </p>
      </div>

      <div className='hero__scroll-cue small'>
        <div>↓</div>
      </div>
    </section>
  )
}