import React, { Component } from 'react'
import { TextField, Grid, Button, withStyles, Link } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

import { REGISTRATION, LOGIN } from '../../constants/auth'
import { FormPaper, TextSpan, Separator } from '../ui'
import Colors from '../../constants/Colors'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        width: "100%",
        padding: "2% 0"
    },
    input: {
        display: 'none',
    },
});

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            emailError: false,
            passwordError: false
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }
    handleClick = () =>{
        const { email, password } = this.state
        if(!email){
            this.setState({emailError: true})
        }else if(!password){
            this.setState({passwordError: true})
        }else{
            this.props.handleClick({data: { email, password }, push :this.props.history.push})
        }
    } 
    handleFocus = () => {
        this.setState({emailError: false, passwordError: false})
    }
    render() {
        const { classes } = this.props
        const { email, password, emailError, passwordError } = this.state
        return (
            <FormPaper>
                <Grid
                    container
                    direction="column"
                    justify="space-around"
                    alignItems="center"
                >
                    <Separator vertical="1rem" />
                    <TextSpan color={Colors.textBlue} weight="600" size="2rem"> Log In </TextSpan>
                    <Separator vertical="1.5rem" />
                    <TextField
                        type="email"
                        variant="outlined"
                        label="Email"
                        fullWidth
                        name="email"
                        onChange={this.handleChange}
                        value={email}
                        error={emailError}
                        onFocus={this.handleFocus}
                    />
                    <Separator vertical="1.5rem" />
                    <TextField
                        type="password"
                        variant="outlined"
                        label="Password"
                        fullWidth
                        name="password"
                        onChange={this.handleChange}
                        value={password}
                        error={passwordError}
                        onFocus={this.handleFocus}
                    />
                    <Separator vertical="1rem" />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleClick}
                    >
                        LOGIN
                    </Button>
                    <Separator vertical="0.5rem" />
                    <Grid
                        container
                        justify="space-between"
                    >
                        <Link style={{ cursor: "pointer" }}>
                            <TextSpan size="0.8rem">
                                Forgot your password?
                            </TextSpan>
                        </Link>
                        <Link style={{ cursor: "pointer" }}
                            onClick={() => this.props.changePage(REGISTRATION)}
                        >
                            <TextSpan size="0.8rem">
                                Don't Have an Account?
                            </TextSpan>
                        </Link>
                    </Grid>
                </Grid>
            </FormPaper>
        )
    }
}

export default withRouter(withStyles(styles)(LoginForm))