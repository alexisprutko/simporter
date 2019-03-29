import React, { Component } from 'react'
import { TextField, Grid, Button, withStyles, Link } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

import { REGISTRATION } from '../../constants/auth'
import { FormPaper, TextSpan, Separator } from '../ui'
import { emailValidation, passwordValidation } from '../../helpers/validation'
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
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            emailError: "",
            passwordError: ""
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    handleClick = () => {
        const { email, password } = this.state
        const emailError = emailValidation(email)
        const passwordError = passwordValidation(password)
        if (emailError) {
            this.setState({ emailError, email: '' })
        }
        if (passwordError) {
            this.setState({ passwordError, password:''})
        }
        if (!passwordError && !emailError) {
            this.props.handleClick({ data: { email, password }, push: this.props.history.push })
        }
    }
    handleFocus = () => {
        this.setState({ emailError: '', passwordError: '' })
        this.props.clearMessage()
    }
    render() {
        const { classes } = this.props
        const { email, password, emailError, passwordError } = this.state
        return (
            <FormPaper>
                <form>
                <Grid
                    container
                    direction="column"
                    justify="space-around"
                    alignItems="center"
                >
                    <Separator vertical="1rem" />
                    <TextSpan color={Colors.textBlue} weight="600" size="2rem"> Log In </TextSpan>
                    <Separator vertical="2rem" horizontal="100% " >
                        <TextSpan color={Colors.mainPink} size="0.8rem"> {emailError}</TextSpan>
                    </Separator>
                    <TextField
                        type="email"
                        variant="outlined"
                        label="Email"
                        fullWidth
                        name="email"
                        onChange={this.handleChange}
                        value={email}
                        error={Boolean(emailError)}
                        onFocus={this.handleFocus}
                    />
                    <Separator vertical="2rem" horizontal='100%'  >
                        <TextSpan color={Colors.mainPink} size="0.8rem"> {passwordError}</TextSpan>
                    </Separator>
                    <TextField
                        type="password"
                        variant="outlined"
                        label="Password"
                        fullWidth
                        name="password"
                        onChange={this.handleChange}
                        value={password}
                        error={Boolean(passwordError)}
                        onFocus={this.handleFocus}
                        autoComplete="off"  
                        
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

                </form>
            </FormPaper>
        )
    }
}

export default withRouter(withStyles(styles)(LoginForm))