import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import ProblemSolving from './Pages/ProblemSolving/ProblemSolving';
import Navbars from './Pages/Navbars/Navbars';
import Blog from './Pages/Blog/Blog';
import Details from './Pages/Details/Details';
import About from './Pages/About/About';

function App() {
  return (
    <BrowserRouter>
    <Navbars/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="home/" element={<Home />} />
        <Route path="about/" element={<About />} />
        <Route path="contact/" element={<Contact />} />
        <Route path="projects/" element={<Projects />} />
        <Route path="detail/" element={<Details />} />
        <Route path="problemSolving/" element={<ProblemSolving />} />
        <Route path="blog/" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
