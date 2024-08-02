import './App.css';
import Skills from './component/about';
import Button from './component/home';

function App() {
  return (
    <div className="App">
     <h1>Hello I'm </h1>
     <h2>This is my portfolio</h2>
     <h2>I Am,</h2>
     <li>
        <ul>Udergraduate</ul>
        <ul>Frontend Developer</ul>
        <ul></ul>
     </li>
     <Skills name="Arun" id = "131313"/>
     <Button/>
     <Skills name="Janitha" id = "1356"/>
    </div>
  

  );
}

export default App;
