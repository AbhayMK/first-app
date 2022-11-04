import "./App.css";
import Navigation from "./components/Navigation/Navigation.js";
import Logo from "./components/Logo/Logo.js";
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className="App">
    <ParticlesBg type="custom" bg={true}/>
      <Navigation />
      <Logo />
      {/*  <ImageLinkForm />
        <FaceRecognition />*/}
    </div>
  );
}

export default App;
