import React, { Component } from 'react'
import { 
    FormControl, 
    TextField,
    Button,
     } from '@material-ui/core'

class RegisterForm extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }
    handleChange = (event) => {
        const { name, value } = event.target 
        this.setState({ [name] : value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createUser(this.state, this.props.history)

    }
    render() {
        const { name, email, password } = this.state
        return (
        <div>
            <FormControl>
                <TextField
                    name="username"
                    label="User Name"
                    fullWidth
                    value={name}
                    onChange={this.handleChange}
                />
                <TextField
                    name="email"
                    label="Email"
                    fullWidth
                    value={email}
                    onChange={this.handleChange}
                />
                <TextField
                    name="password"
                    label="Password"
                    fullWidth
                    value={password}
                    onChange={this.handleChange}
                />
                <Button
                    color="primary"
                    onClick={this.handleSubmit}
                >
                    Signup
                </Button>
            </FormControl>
        </div>
        )
    }
}


export default RegisterForm