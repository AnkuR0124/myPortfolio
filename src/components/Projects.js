import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.jpeg";
import projImg4 from "../assets/img/ttt.jpeg";
import projImg5 from "../assets/img/bg.jpeg";
import projImg6 from "../assets/img/af.jpeg";
import projImg7 from "../assets/img/yulu.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Quiz-App",
      description: "Made by using HTML, CSS, and JavaScript",
      imgUrl: projImg1,
      link: "https://ankur0124.github.io/quizApp/",
    },
    {
      title: "Payment Gateway Integration",
      description: "Made with Spring Boot",
      imgUrl: projImg2,
      link: "https://github.com/AnkuR0124/PaymentService",
    },
    {
      title: "School Timetable Management System",
      description: "Made by using Spring Boot",
      imgUrl: projImg3,
      link: "https://github.com/UditNayak/School-TimeTable-Management-System",
    },
  ];

  const reactProjects = [
    {
      title: "Aeroift Business Case",
      description: "Analyzing Aerofit data for targeted treadmill marketing.",
      imgUrl: projImg6,
      link: "https://colab.research.google.com/drive/1Q4DBvvYO2DTtcpkeZU2Cj8a3HhmVErAv",
    },
    {
      title: "Yulu Hypothesis Testing",
      description:
        "Analyzing Yulu bike usage data to test user engagement hypothesis.",
      imgUrl: projImg7,
      link: "https://colab.research.google.com/drive/1tkmwXEFw-66rXfbe-UFYvYLuRA8T32aq?usp=sharing",
    },
  ];

  const dataAnalysisProjects = [
    {
      title: "TicTacToe",
      description: "Made by using Java",
      imgUrl: projImg4,
      link: "https://github.com/AnkuR0124/TicTacToeGame",
    },
    {
      title: " The Focus",
      description: "Made by using HTML, CSS, and JavaScript",
      imgUrl: projImg5,
      link: "https://ankur0124.github.io/bestGame/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I've developed a series of projects using MERN stack, Spring
                    Boot, JavaScript, and data science techniques to solve
                    real-world problems and deepen my understanding of these
                    technologies. Each project represents a unique learning
                    opportunity, showcasing my initiative and ability to apply
                    theoretical knowledge to practical applications. Explore the
                    project summaries below, complete with code repositories and
                    live demo links, to see how I've leveraged these skills.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Data Analysis</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Game</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {reactProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {dataAnalysisProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
