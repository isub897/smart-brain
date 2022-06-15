import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import CountMessage from './components/CountMessage/CountMessage';
import ImageUrlForm from './components/ImageUrlForm/ImageUrlForm';
// import FancyBackground from './components/FancyBackground/FancyBackground';
import ImageArea from './components/ImageArea/ImageArea';
import React from 'react';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const particlesInit = async (main) => {
  // console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(main);
};

// options for the Particles background.  a simple copy and paste from npm, with a few adjustments
const particleOptions = {
  fpsLimit: 120,
  particles: {
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      uploadedUrl: "",
      route: 'signin',
      box: {},
      user: {}
    }
  }


  loadUser = (userToLoad) => {
    this.setState({
      user: userToLoad
    })
  }

  defaultState = () => {
    this.setState({
      input: "",
      uploadedUrl: "",
      box: {},
      urlFailure: false
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
        this.setState({urlFailure: true});
      } else {
        fetch("http://localhost:3000/image", {
          method: "put",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            email: this.state.user.email,  
            entries: (Number(this.state.user.entries)+1)
          })
        })
        .then(response=> response.json())
        .then(entryCount=> {
          this.setState(Object.assign(this.state.user, {entries: entryCount}))})
        this.setState({urlFailure: false});
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
        <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleOptions}
    />
        <Navigation route={this.state.route} onRouteChange={this.onRouteChange}/>
        {this.state.route === 'signin'
          ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          : (this.state.route === 'register'
            ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            :<div className='home-route'>
              <Logo />
              <CountMessage user={this.state.user}/>
              <ImageUrlForm urlFailure={this.state.urlFailure} onSubmit={this.onSubmit} onInputChange={this.onInputChange} />
              <ImageArea box={this.state.box} uploadedUrl={this.state.uploadedUrl} />
            </div>)
        }
        
        
        

      </div>
    );
  } 
}

export default App;
