import './App.css'
import { Card } from './Card.jsx'
import { CardData } from './assets/Data.js'

function App() {

  return (
    <>
      <div>
        <a href="https://github.com/PabloTutorMoegle">
          <img src="https://unavatar.io/pablotutormoegle" className="userIMG" alt="PabloIMG" />
        </a>
        <h2>Pablo Tutor Moegle </h2>
        <p>Full Stack Developer</p>
      </div>
      <h2 style={{ padding: "2rem" }}>Social Media</h2>
      <div className="divCards">
        {
          CardData.map((card, index) => {
            return (
              <a href={card.link} key={index}>
                <Card title={card.title} image={card.image} />
              </a>
            )}
          )
        }
      </div>
      <div>
        <h2>Work Experience</h2>
        
      </div>
    </>
  )
}

export default App
