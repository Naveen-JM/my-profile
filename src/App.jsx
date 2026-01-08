import styles from "./App.module.css";
import Header from "./Components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Skills from "./components/skills/Skills.jsx";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Profile />
      <Skills />
    </div>
  );
}

export default App;
