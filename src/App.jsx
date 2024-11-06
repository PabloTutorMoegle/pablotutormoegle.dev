import './App.css'
import { Card } from './utiles/Card.jsx'
import { Box } from './utiles/Box.jsx'
import { CardData, ProjectsData } from './assets/Data.js'
import { EmailForm } from './utiles/EmailBrowser.jsx'

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
        {/*Aqui van mis paginas de redes sociales*/}
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
        <h2>Proyectos actuales en desarrollo</h2>
        <div className="divCards" style={{ display: "flex", flexDirection: "column" }}>
          {/* Aqui van mis proyectos */}
          {
          ProjectsData.map((project, index) => {
            return (
              <a href={project.link} key={index} style={{ display: "flex", flexDirection: "row" }}>
                <Box title={project.title} image={project.image} />
                <div>
                  <h3>
                    {project.content}
                  </h3>
                  <div className="divlistE">
                    <p>
                      {
                        project.listExamples.map((example, index) => {
                          return (
                            <a href={example.linkE} key={index} 
                                style={{ display: "flex", flexDirection: "row", color: "#fff", justifyContent: "center" }}>
                              {example.titleE}
                            </a>
                          )
                        })
                      }
                    </p>
                  </div>
                </div>
              </a>
            )
          })
        }
        </div>
        <p style={{ color: "#ff5100" }}>
          Los elementos de la lista son clickables para poder ir a ver el proyecto (en caso que este tenga 
          algo que enseñar, sino permanecera en la pagina).
        </p>
      </div>
      <br />
      <h3>Cuentame Algo</h3>
      <p>
        Ecribe aquello que quieras contarme,  en la cajita del mensage, 
        ten en cuenta que si quieres que te responda tendras que poner 
        tu contacto en el mensage.
      </p>
      <EmailForm />
    </>
  )
}

export default App
