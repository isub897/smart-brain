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
      route: 'home',
      box: {}
    }
  }

  defaultState = () => {
    this.setState({
      input: "",
      uploadedUrl: "",
      box: {}
    })
  }

  createBox = (params) => {
    const image = document.getElementById('image2detect');
    const width = Number(image.width);
    const height = Number(image.height);

    return this.setState({box: {
      topRow: (params.top_row * height),
      leftCol: (params.left_col * width),
      bottomRow: (height - (params.bottom_row * height)),
      rightCol: (width - (params.right_col * width))
    }})
  }

  // this is causing the background to restart
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  // this is causing the background to restart
  onSubmit = (event) => {
    this.setState({box: {}});
    this.setState({uploadedUrl: this.state.input})
    fetch("http://localhost:3000/image", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        url: this.state.input
      })
    })
    .then(response => response.json())
    .then(data => {
      if(data === "error") {
        console.log('error');
      } else {
        this.createBox(data);
      }
    })
  }

  onRouteChange = (route) => {
    this.defaultState();
    this.setState({route: route})
  }

  render() {
    return (
      <div className="App">
        <FancyBackground />
        <Navigation route={this.state.route} onRouteChange={this.onRouteChange}/>
        {this.state.route === 'signin'
          ? <SignIn onRouteChange={this.onRouteChange} />
          : (this.state.route === 'register'
            ? <Register onRouteChange={this.onRouteChange}/>
            :<div className='home-route'>
              <Logo />
              <CountMessage />
              <ImageUrlForm onSubmit={this.onSubmit} onInputChange={this.onInputChange} />
              <ImageArea box={this.state.box} uploadedUrl={this.state.uploadedUrl} />
            </div>)
        }
        
        
        

      </div>
    );
  } 
}

export default App;
