import React, { Component } from 'react';
import styles from './componentStyles/Login.css';
import NavBar from './NavBar';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newAccountForm: false
        };
    }

    toggleFormType = () => {
        this.setState(prevState => ({
            newAccountForm: !prevState.newAccountForm
        })); 
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {

        const submitButtonText = this.state.newAccountForm ? "CREATE ACCOUNT" : "LOG IN";
        const toggleButtonText = this.state.newAccountForm ? "LOG IN" : "CREATE ACCOUNT";
        const toggleDescription = this.state.newAccountForm ? "Already have an account?" : "New to Declutterly?";
        const hideReEnterPass = this.state.newAccountForm ? styles.block : styles.hide;

        return (
            <div>
                <NavBar />
      
            <form className="container">
            	<div className={styles.inputWrapper}>
                	<label className={styles.block} htmlFor="username">username: </label>
                        <input id="username" name="username" type="text" />
                </div>
                <div className={styles.inputWrapper}>
                    <label className={styles.block} htmlFor="password">password: </label>
                       <input id="password" name="password" type="password" />
                </div>
                <div className={`${styles.inputWrapper} ${hideReEnterPass}`} >
                    <label className={styles.block} htmlFor="rePassword">re-enter password: </label>
                       <input id="rePassword" name="rePassword" type="password" />
                </div>
                    <button type="submit">
                        {submitButtonText}
                    </button>

                <div className={styles.toggleWrapper}>
                    <p>
                        {toggleDescription}
                    </p>
                    <button type="button" onClick={this.toggleFormType}>
                        {toggleButtonText}
                    </button>
                </div>
            </form>
        </div>
        );
    }
}

export default Login;