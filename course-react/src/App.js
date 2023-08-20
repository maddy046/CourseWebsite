import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/Header";
import Menus from "./components/Menus";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCourse from './components/AddCourse';
import AllCourses from './components/AllCourses';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Container>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>

            <Col md={8}>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/add-course" Component={AddCourse} />
              <Route path="/view-course" Component={AllCourses} />
              <Route path="/about" Component={About} />
              <Route path="/contact" Component={Contact} />
            </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
