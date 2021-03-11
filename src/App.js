import './App.css';
import Navbar from "./components/navbar/navbar.js";
import Header from "./components/header/header.js";
import Portfolio from "./components/portfolio/potfolio.js";
import AboutMe from "./components/aboutme/aboutme.js";
import Contact from "./components/contact/contact.js";
import Footer from "./components/footer/footer.js"

function App() {
  return (
  <div>
 <Navbar/>
 <Header/>
 <Portfolio/>
 <AboutMe/>
 <Contact/>
 <Footer/>
 </div>
  );
}

export default App;
