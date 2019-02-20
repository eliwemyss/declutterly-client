import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './Input';

import './componentStyles/Registration.css';

export class Registration extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <div className="registration-form">
                <form
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <label htmlFor="firstName">First name:</label>
                    <Field component={Input} type="text" name="firstName" />
                    <label htmlFor="lastName">Last name:</label>
                    <Field component={Input} type="text" name="lastName" />
                    <label htmlFor="username">Username:</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                    />
                    <label htmlFor="password">Password:</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                    />
                    <label htmlFor="passwordConfirm">Confirm password:</label>
                    <Field
                        component={Input}
                        type="password"
                        name="passwordConfirm"
                    />
                    <button
                        type="submit"
                        className="signup-button"
                        disabled={this.props.pristine || this.props.submitting}>
                        Register
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(Registration);
