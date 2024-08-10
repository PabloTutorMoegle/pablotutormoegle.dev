import './App.css'
import { Card } from './Card.jsx'
import MiniProjectImage from './assets/ImagenMiniProjects.jpg'

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

      {/* 
          hay que hacer esto de forma limpia y ordenada, tenerlo todo aqui esta quedando muy desordenado,
          ideas para hacerlo con un array de objetos y un map, o con un componente que reciba un array de objetos, ya veremos
      */}

      <div className="divCards">
        <a href="https://github.com/PabloTutorMoegle">
          <Card title = "Github" image = "https://unavatar.io/github" />
        </a>
        <a href="https://www.linkedin.com/in/pablo-tutor-moegle/">
          <Card title = "LinkedIn" image = "https://unavatar.io/linkedin" />
        </a>
        <a href="https://x.com/PabloTutorM">
          <Card title = "X" image = "https://img.freepik.com/vector-gratis/nuevo-diseno-icono-x-logotipo-twitter-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720828800&semt=ais_user" />
        </a>
        <a href="https://www.instagram.com/pablo_dev_tutor/">
          <Card title = "Instagram" image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" />
        </a>
      </div>
      <div>
        <h2>Projects</h2>
        <a href="https://github.com/PabloTutorMoegle/MiniProjects">MiniProjects</a>
        <p>
          This is my fun and practice repository, here you can see some mini projects that I do in my free time 
          so I keep my self update.
        </p>
        <img src={MiniProjectImage} alt="imgMiniProjects"/>
      </div>
    </>
  )
}

export default App
