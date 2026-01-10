import styles from "./App.module.css";
import Header from "./Components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Skills from "./components/skills/Skills.jsx";
import Education from "./components/education/Education.jsx";
import Experience from "./components/experience/Experience.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Header />
      <Profile />
      <Education />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
