import { Routes, Route, Link } from 'react-router-dom';


import HomePage from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'



function App() {

  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </nav>
    </div>
  )

}




export default App;
