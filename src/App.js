import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import CountMessage from './components/CountMessage/CountMessage';
import ImageUrlForm from './components/ImageUrlForm/ImageUrlForm';
import FancyBackground from './components/FancyBackground/FancyBackground';
import ImageArea from './components/ImageArea/ImageArea';

function App() {

  return (
    <div className="App">
      <FancyBackground />
      <Navigation />
      <Logo />
      <CountMessage />
      <ImageUrlForm />
      <ImageArea />
    </div>
  );
}

export default App;
