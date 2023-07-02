
import './App.css';
import { DiGithubBadge } from "react-icons/di";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="centered-text">
        Hi, my name is Pranshu Grover<br/>
    I am a computer programmer and like working on 
    
    <br/>scalable, event-driven applications.
    
    <br/>
    I like free and open-source culture and have contributed
      to a few open-source projects.
      <br/>
      <div className='icon-container'>
      <a href='https://github.com/Pranshu-G'>
       <DiGithubBadge className='github-icon'/>
      </a>
      </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
