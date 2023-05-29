import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/chat.png";
import projImg2 from "../assets/img/twit.png";
import projImg3 from "../assets/img/imdb.png";
import cart from "../assets/img/cart.png";
import food from "../assets/img/food.png";
import menu from "../assets/img/menu.png";
import bbms from "../assets/img/bbms.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Chat Clone",
      description: "A Chat Clone App Using ReactJs and Firebase ",
      imgUrl: projImg1,
      link : "https://chatclone27.netlify.app/",
    },
    {
      title: "Tweet Quotes",
      description: "On clicking on Twitter logo you can tweet Quotes",
      imgUrl: projImg2,
      link : "https://tweetquotes1227.netlify.app/",
    },
    {
      title: "IMDB Rating",
      description: "Gives IMDB Rating of Searched Movie",
      imgUrl: projImg3,
      link : "https://rjimdb.netlify.app/",
    }
  ];

  const mern = [
    {
      title: "Food App",
      description: "Home Page",
      imgUrl: food,
      link : "",
    },
    {
      title: "Food App",
      description: "menu",
      imgUrl: menu,
      link : "",
    },
    {
      title: "Food App",
      description: "cart",
      imgUrl: cart,
      link : "",
    }
  ];

  const php = [
    {
      title: "Blood Bank Management",
      description: "Using PHP",
      imgUrl: bbms,
      link : "",
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 style={{fontFamily:'serif'}}>Projects</h2><br />
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                      <h2 style={{fontFamily:"cursive", color:'violet'}}>ReactJs</h2><br /><br /><br />
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                    <h2 style={{fontFamily:"cursive", color:'violet'}}>MERN Development</h2><br /><br /><br />
                        {
                          mern.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <h2 style={{fontFamily:"cursive", color:'violet'}}>PHP Development</h2><br /><br /><br />
                    <div className="d-flex justify-content-center">
                        {
                          php.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
