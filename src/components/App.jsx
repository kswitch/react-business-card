import './../styles/App.css'
import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'

export default function App() {
  return (
    <div className="card-container">
      <div className="card">
        <Info />
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  )
}