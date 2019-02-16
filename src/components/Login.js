import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import {login} from '../actions/auth';

export class LoginForm extends React.Component {
    onSubmit(values) {
        let username = values.usernameLogin;
        let password = values.passwordLogin;
        return this.props.dispatch(login(username, password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="container"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
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
                <Link className="registration-link" to="/registration">New user?</Link>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);