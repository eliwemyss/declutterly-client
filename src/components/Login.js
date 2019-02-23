import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import {Link} from 'react-router-dom';
import {login} from '../actions/auth';
import './componentStyles/Login.css';

export class LoginForm extends React.Component {
    onSubmit(values) {
        let username = values.usernameLogin;
        let password = values.passwordLogin;
        return this.props.dispatch(login(username, password));
    }

    render() {
        let error;
        let loadingMessage;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        if(this.props.loading) {
            loadingMessage =(
            <div className="login-loading">Loading...</div>
            )
        }
        }
        return (

            <div className="login-form">
            <Link className="closed-button" to='/'>X</Link>
                <form
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {error}
                    {loadingMessage}
                    <label htmlFor="username">Username:</label>
                    <Field
                        component={Input}
                        type="text"
                        name="usernameLogin"
                        id="username"
                    />
                    <label htmlFor="password">Password:</label>
                    <Field
                        component={Input}
                        type="password"
                        name="passwordLogin"
                        id="password"
                    />
                    <button className='sign-in-button' disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);