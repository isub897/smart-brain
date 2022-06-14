import React from "react";

class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            confirm: "",
            notFilled: false,
            failedSignin: false
        }
    }

    onNameChange = (event) => {
        this.stateResets();
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.stateResets();
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.stateResets();
        this.setState({password: event.target.value})
    }

    onConfirmChange = (event) => {
        this.stateResets();
        this.setState({confirm: event.target.value})
        this.confirmCheck(event.target.value);
    }

    confirmCheck = (confirmPassword) => {
        this.setState({notFilled: false})
        if (!confirmPassword) {return this.setState({
            failedSignin: false,
        })}
        if(this.state.password !== confirmPassword) {
            return this.setState({failedSignin: true})
        } else {return this.setState({failedSignin: false})}
    }

    stateResets = () => {
        this.setState({
            failedSignin: false,
            notFilled: false
        })
    }

    onSignin = () => {
        const {name, email, password, confirm} = this.state;
        fetch("http://localhost:3000/register", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                confirm: confirm
            })
        })
        .then(response=> response.json())
        .then(data=> {
            if(data.email) {
                this.setState({
                    notFilled: false,
                    failedSignin: false
                })
                this.props.loadUser(data);
                 return this.props.onRouteChange('home');
            }
            switch(data) {
                case "fill":
                    this.setState({
                        notFilled: true,
                        failedSignin: false
                    })
                    this.props.onRouteChange('register');
                    break;
                case "match":
                    this.setState({
                        notFilled: false,
                        failedSignin: true 
                    })
                    this.props.onRouteChange('register');
                    break;
                default:
                    this.props.onRouteChange('register');
                    break;
            }
        })
    }

    render() {
        return(
            <article className="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
            <main className="pa4 black-80">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0 pb0">
                <legend className="f4 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                    <input 
                        onChange={this.onNameChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2" 
                        type="text" 
                        name="name"  
                        id="name"/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input 
                        onChange={this.onEmailChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2" 
                        type="email" 
                        name="email-address"  
                        id="email-address"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input 
                        onChange={this.onPasswordChange}
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2" 
                        type="password" 
                        name="password"  
                        id="password"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
                    <input 
                        onChange={this.onConfirmChange}
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2" 
                        type="password" 
                        name="cpassword"  
                        id="cpassword"/>
                </div>
                </fieldset>
                {this.state.notFilled
                    ? <div className="err-fill gold mb2 pa2 mt0 f6">Please ensure all fields are complete.</div>
                    : (this.state.failedSignin
                        ?<div className="err-match gold mb2 pa2 mt0 f6">Please ensure passwords are matching.</div>
                        :<div></div>
                    )
                }
                <div className="">
                <input 
                    onClick={this.onSignin}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br2 mt2" 
                    type="submit" 
                    value="Sign in"/>
                </div>
                <div className="lh-copy mt3">
                </div>
            </div>
            </main>
            </article>
        )
    }
    
}

export default Register;