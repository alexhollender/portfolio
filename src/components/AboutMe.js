import aboutMe from '../media/aboutme.png';
import '../scss/AboutMe.scss';

const AboutMe = () => {

  return (
    <div id="about-me-page">
      <div id="about-me-content">
        <img src={aboutMe} width="100%" />
      </div>
    </div>
  )
}

export default AboutMe;
