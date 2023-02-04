import portrait from './portrait.jpg'
import resume from './resume.pdf'
import report from './report.pdf'
import report2 from './Medeval2D.pdf'
import pic1 from './Picture1.png'
import pic2 from './Picture2.png'
import icon from './icon.png'

import './App.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AiFillFilePdf, AiFillGithub, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'

function App() {
  return (
    <div
      className="App"
      style={{
        background:
          'linear-gradient(164deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 90%, rgba(9,9,151,1) 100%)',
        minHeight: '100vh'
      }}>
      {/* Navbar */}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand onClick={() => window.scrollTo(0, 0)}>
            <Nav.Link>
              <img src={icon} width="35em" style={{ paddingRight: '5px' }}></img>My Portfolio
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#fyp">Final Year Project</Nav.Link>
              <Nav.Link href="#minor">Other Minor Project</Nav.Link>
              <Nav.Link href="#resume">My Resume</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />

      {/* Body */}

      <Container>
        <Row>
          <Col lg>
            {/* Portrait & Greeting */}
            <Row>
              <Col md="auto">
                <img src={portrait} />
              </Col>
              <Col l background={'red'}>
                <div style={{ fontSize: '1.5em', color: 'whitesmoke' }}>Hi, I am</div>
                <div style={{ fontSize: '4em', fontWeight: 'bold', color: 'grey' }}>
                  Cheah Ho Ching
                </div>
                <div style={{ fontSize: '1.5em', color: 'whitesmoke' }}>
                  a fresh graduate of software engineering from UTAR Sungai Long.
                </div>
              </Col>
            </Row>
            {/* About Me */}
            <div
              id="about"
              style={{
                paddingTop: '1em',
                fontSize: '1.5em',
                textDecoration: 'underline',
                color: 'whitesmoke'
              }}>
              About Me
            </div>
            <p
              style={{
                color: 'whitesmoke'
              }}>
              Passionate in web development using latest web framework such as Nodejs, Nextjs and
              Laravel.
              <br></br> Comfortable with fronend development with React using either css or
              bootstrap.
              <br></br> Capable of backend development with REST API with either SQL or noSQL
              databases.
              <br></br> Experience with other field of development such as data mining and artifical
              intelligent using Python or game development using C# and Unity.
            </p>
            {/* Final Year Project */}
            <div
              id="fyp"
              style={{
                paddingTop: '1em',
                paddingBottom: '0.5em',
                fontSize: '1.5em',
                textDecoration: 'underline',
                color: 'whitesmoke'
              }}>
              Final Year Project
            </div>
            <div
              style={{
                color: 'whitesmoke'
              }}>
              <b>
                ONLINE BEAUTY & SPA APPOINTMENT BOOKING SYSTEM WITH PRODUCTS/SERVICES RECOMMENDATION
              </b>
              <br></br>
              <img src={pic2} style={{ maxWidth: '100vw' }} />{' '}
              <img src={pic1} style={{ maxWidth: '100vw' }} />
              <br></br>A full stack web application build with Next.js, Express.js and MongoDB.
              Contain all basic functionalities of a booking apps such as users, products, services
              and booking management. The project is tested using end-to-end testing library
              Cypress.
              {/* <br></br>The project is hosted and available on{' '}
              <a href="https://lily-beauty-spa-fe.vercel.app/." target="_blank">
                https://lily-beauty-spa-fe.vercel.app/.
              </a> */}
              <br></br>
              <AiFillFilePdf />{' '}
              <a href={report} target="_blank">
                Report
              </a>
              <br></br>
              <AiFillGithub />{' '}
              <a href="https://github.com/hoching87/lily_beauty_spa_fe" target="_blank">
                Front-end Github repository
              </a>
              <br></br>
              <AiFillGithub />{' '}
              <a href="https://github.com/hoching87/lily_beauty_spa_be" target="_blank">
                Back-end Github repository
              </a>
            </div>
            {/* Other Minor Project */}
            <div
              id="minor"
              style={{
                paddingTop: '1em',
                paddingBottom: '0.5em',
                fontSize: '1.5em',
                textDecoration: 'underline',
                color: 'whitesmoke'
              }}>
              Other Minor Project
            </div>
            <div
              style={{
                color: 'whitesmoke'
              }}>
              <b>CURRENT PORTFOLIO PAGE</b>
              <br></br>A single page web app designed and develop by myself using React and
              bootstrap.
              <br></br>This page is currently hosted using Github Pages.<br></br>
              <AiFillGithub />{' '}
              <a href="https://github.com/hoching87/my_portfolio" target="_blank">
                Github repository
              </a>
            </div>
            <div
              style={{
                color: 'whitesmoke',
                paddingTop: '1em'
              }}>
              <b>LARAVEL E-COMMERCE</b>
              <br></br>An e-commerce app for selling shoes online.
              <br></br>Developed by a group of 5 using Laravel and MySql.
              <br></br>
              <AiFillGithub />{' '}
              <a href="https://github.com/hoching87/LaravelAsm" target="_blank">
                Github repository
              </a>
            </div>
            <div
              style={{
                color: 'whitesmoke',
                paddingTop: '1em'
              }}>
              <b>SIDE SCROLLER GAME</b>
              <br></br>A side scoller game developed by group of 4 using C# and Unity Game Engine
              <br></br>
              <AiFillFilePdf />{' '}
              <a href={report2} target="_blank">
                Report
              </a>
            </div>
            {/* My Resume */}
            <div
              id="resume"
              style={{
                paddingTop: '1em',
                paddingBottom: '0.5em',
                fontSize: '1.5em',
                textDecoration: 'underline',
                color: 'whitesmoke'
              }}>
              My Resume
            </div>
            <div
              style={{
                color: 'whitesmoke'
              }}>
              <a href={resume} target="_blank">
                Click Here
              </a>{' '}
              for my resume!
            </div>
            {/* Contact */}
            <div
              id="contact"
              style={{
                paddingTop: '1em',
                paddingBottom: '0.5em',
                fontSize: '1.5em',
                textDecoration: 'underline',
                color: 'whitesmoke'
              }}>
              Contact
            </div>
            <div
              style={{
                color: 'whitesmoke',
                paddingBottom: '2em'
              }}>
              <AiOutlineWhatsApp /> 0165010188 {'      '}
              <AiOutlineMail /> Hoching87@gmail.com
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
