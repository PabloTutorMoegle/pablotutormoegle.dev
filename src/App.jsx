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
        {/* Here are my social media pages */}
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
          <h2>Current Projects in Development</h2>
          <div className="divCards" style={{ display: "flex", flexDirection: "column" }}>
            {/* Here are my projects */}
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
          The list items are clickable to view the project (if it has something to show, 
          otherwise it will remain on the page).
        </p>
      </div>
      <br />
      <h3>Tell Me Something</h3>
      <p>
        Write whatever you want to tell me in the message box, keep in mind that if you want me to respond, 
        you will need to include your contact information in the message.
      </p>
      <EmailForm />
      <br />
      <h4>
        If you want to see the code of this page, you can find it in my GitHub repository.
      </h4>
    </>
  )
}

export default App
