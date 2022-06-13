import React from "react";

const Register = ({onRouteChange}) => {
    return(
        <article className="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
        <main className="pa4 black-80">
        <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2" type="text" name="name"  id="name"/>
            </div>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2" type="password" name="password"  id="password"/>
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br2" type="password" name="cpassword"  id="cpassword"/>
            </div>
            </fieldset>
            <div className="">
            <input 
                onClick={()=> onRouteChange('home')}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br2" 
                type="submit" 
                value="Sign in"/>
            </div>
            <div className="lh-copy mt3">
            </div>
        </form>
        </main>
        </article>
    )
}

export default Register;