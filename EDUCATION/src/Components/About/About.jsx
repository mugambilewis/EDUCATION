import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import setPlayState from 'react'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>
            {setPlayState(true)}}/>
        </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Naturing Tomorrows leaders Today</h2>
        <p>Welcome to our Website the ultimate platform for learning to code! Whether you are a beginner taking your first steps or an experienced developer looking to sharpen your skills, we provide interactive lessons, hands-on coding challenges, and real-world projects to help you grow.

Our mission is to make coding education accessible, engaging, and effective for everyone. With a structured learning path, gamified challenges, and a supportive community, we ensure you gain practical coding experience while having fun.

Join us today and start building your future</p>
      </div>
    </div>
  )
}

export default About
