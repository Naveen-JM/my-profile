import styles from "./App.module.css";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Skills from "./components/skills/Skills.jsx";
import Education from "./components/education/Education.jsx";
import Experience from "./components/experience/Experience.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Projects from "./components/projects/Projects.jsx";
import Certifications from "./components/certificates/Certificates.jsx";
function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Header />
      <Profile />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications/>
      <Footer />
    </div>
  );
}

export default App;
