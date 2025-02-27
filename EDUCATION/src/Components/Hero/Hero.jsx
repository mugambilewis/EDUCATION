import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
      <h1>We Ensure better Education for a better <b>future</b></h1>
      <p>Welcome to the ultimate platform for mastering coding through interactive lessons, hands-on projects, and a supportive community. Whether you are a beginner taking your first steps in programming or an experienced developer looking to sharpen your skills, our structured courses, challenges, and real-world applications will guide you every step of the way. </p>
    <button className='btn'>Learn More <img src={dark_arrow}/></button>
    </div>
    </div>
  )
}

export default Hero
