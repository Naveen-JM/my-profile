import styles from "./App.module.css";
import Header from "./Components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Skills from "./components/skills/Skills.jsx";
import Education from "./components/education/Education.jsx";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Profile />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
