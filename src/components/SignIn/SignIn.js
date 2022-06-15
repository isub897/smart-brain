import React from "react";

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            notFilled: false,
            failedSignin: false
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSignIn = () => {
        fetch("http://localhost:3000/signin", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.email) {
                this.setState({
                    notFilled: false,
                    failedSignin: false
                })
                this.props.loadUser(data);
                return this.props.onRouteChange('home');
            }
            switch(data) { 
                case "failure":
                    this.setState({
                        notFilled: false,
                        failedSignin: true
                    })
                    this.props.onRouteChange('signin');
                    break;
                case "fill":
                    this.setState({
                        notFilled: true,
                        failedSignin: false
                    })
                    this.props.onRouteChange('signin');
                    break;    
                default:
                    this.props.onRouteChange('signin');
            }
        })
    }

    onKeyPress = (event) => {
        if (event.code === "Enter") {
            this.onSignIn();
        }
    }

    render() {
        const {onRouteChange} = this.props;
        return(
            <article className="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
            <main className="pa4 black-80">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input 
                        onKeyDown={this.onKeyPress}
                        onChange={this.onEmailChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2" 
                        type="email"
                        name="email-address"  
                        id="email-address"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input 
                        onKeyDown={this.onKeyPress}
                        onChange={this.onPasswordChange}
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2" 
                        type="password" 
                        name="password"  
                        id="password"/>
                </div>
                {this.state.notFilled
                    ?<div className="err-fill gold pb2 f6">Please ensure both fields are complete.</div>
                    : (this.state.failedSignin
                        ? <div className="err-incorrect gold pb2 f6">Please enter correct email and password.</div>
                        : <div></div>
                    )
                }
                <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                </fieldset>
                <div className="">
                <input 
                    onClick={this.onSignIn}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br2" 
                    type="submit" 
                    value="Sign in"/>
                </div>
                <div className="lh-copy mt3">
                <a href="#0" 
                    onClick={()=> onRouteChange('register')}
                    className="f6 link dim black db pb2">
                    Register
                </a>
                <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                </div>
            </div>
            </main>
            </article>
        )
    }
    
}

export default SignIn;