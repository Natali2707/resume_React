import "./App.css";
import Header from "./components/Header";
import Avatar from "./components/Avatar";
import PersonInfo from "./components/PersonInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Hobby from "./components/Hobby";

function App() {
  return (
    <div className="app">
      <Header />
      <Avatar />
      <hr />
      <div className="row2">
        <div className="block2">
          <Skills />
        </div>
        <div className="block2">
          <Hobby />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="block1">
          <PersonInfo />
        </div>
        <div className="block">
          <Education />
        </div>
        <div className="block">
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default App;
