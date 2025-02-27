import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programes from './Components/Programes/Programes'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Title2 from './Components/Title2/Title2'
import Title3 from './Components/Title3/Title3'
import Title4 from './Components/Title4/Title4'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
/*import Videoplayer from './Components/Videoplayer/Video'*/


const App = () => {
  
  /*const [playState, setPlayState] = useState(false)*/
  
  
  
  
  return (
    <div>
      <Navbar />
      <Hero/>
<div className="container">
  <Title />
  
<Programes />
<About/>
<Title2/>
<Campus/>
<Title3/>
<Testimonials/>
<Title4/>
<Contact/>
<Footer />
</div>

    </div>
  )
}
export default App