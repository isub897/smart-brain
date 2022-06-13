import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import CountMessage from './components/CountMessage/CountMessage';
import ImageUrlForm from './components/ImageUrlForm/ImageUrlForm';
import FancyBackground from './components/FancyBackground/FancyBackground';
import ImageArea from './components/ImageArea/ImageArea';
import React from 'react';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      uploadedUrl: "",
      route: 'signin'
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = (event) => {
    this.setState({uploadedUrl: this.state.input})
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render() {
    return (
      <div className="App">
        <FancyBackground />
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route === 'signin'
          ? <SignIn onRouteChange={this.onRouteChange} />
          : (this.state.route === 'register'
            ? <Register onRouteChange={this.onRouteChange}/>
            :<div className='home-route'>
              <Logo />
              <CountMessage />
              <ImageUrlForm onSubmit={this.onSubmit} onInputChange={this.onInputChange} />
              <ImageArea uploadedUrl={this.state.uploadedUrl} />
            </div>)
        }
        
        
        

      </div>
    );
  } 
}

export default App;
