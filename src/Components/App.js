import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import PageNotFound from "./PageNotFound"


export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li class="nav-item">
                <Link to={'/about'} className="nav-link">About</Link>
              </li>
              <li class="nav-item">
                <Link to={'/contact'} className="nav-link" >contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}