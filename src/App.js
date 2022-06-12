import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import CountMessage from './components/CountMessage/CountMessage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <CountMessage />
      {/*
      <ImageUrlForm />
      <ImageArea /> */}
    </div>
  );
}

export default App;
