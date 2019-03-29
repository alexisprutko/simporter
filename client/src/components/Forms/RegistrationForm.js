import React, { Component } from 'react'
import { TextField, Grid, Button, withStyles, Link } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

import {  LOGIN } from '../../constants/auth'
import { FormPaper, TextSpan, Separator } from '../ui'
import { emailValidation, passwordValidation, firstNameValidation, lastNameValidation } from '../../helpers/validation'
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

class RegistrationForm extends Component {
  constructor(props) {
    super(props)  
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      emailError: "",
      passwordError: "",
      firstNameError: "",
      lastNameError: "",
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  handleClick = () => {
    const { email, password, firstName, lastName } = this.state
    const emailError = emailValidation(email)
    const passwordError = passwordValidation(password)
    const firstNameError = firstNameValidation(firstName)
    const lastNameError = lastNameValidation(lastName)

    this.setState({ passwordError, emailError, firstNameError, lastNameError })
    if (!emailError && !passwordError && !firstNameError && !lastNameError) {
      this.props.handleClick({ data: { email, password, firstName, lastName }, push: this.props.history.push })
    }
  }
  handleFocus = () => {
    this.setState({ emailError: '', passwordError: '', firstNameError: '', lastNameError: '' })
    this.props.clearMessage()
  }
  render() {
    const { classes } = this.props
    const { email, password, emailError, passwordError, firstName, lastName, firstNameError, lastNameError } = this.state
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
          <TextSpan color={Colors.textBlue} weight="600" size="2rem"> Sign Up </TextSpan>
          <Separator vertical="2rem" horizontal="100% " >
            <TextSpan color={Colors.mainPink} size="0.8rem"> {firstNameError}</TextSpan>
          </Separator>

          <TextField
            type="text"
            variant="outlined"
            label="First name"
            fullWidth
            name="firstName"
            onChange={this.handleChange}
            value={firstName}
            error={Boolean(firstNameError)}
            onFocus={this.handleFocus}
          />
          <Separator vertical="2rem" horizontal="100% " >
            <TextSpan color={Colors.mainPink} size="0.8rem"> {lastNameError}</TextSpan>
          </Separator>
          <TextField
            type="text"
            variant="outlined"
            label="Last Name"
            fullWidth
            name="lastName"
            onChange={this.handleChange}
            value={lastName}
            error={Boolean(lastNameError)}
            onFocus={this.handleFocus}
          />
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
          <Separator vertical="2rem" horizontal="100% " >
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
            Sign Up
                      </Button>
          <Separator vertical="0.5rem" />

          <Link style={{ cursor: "pointer" }}
            onClick={() => this.props.changePage(LOGIN)}
          >
            <TextSpan size="0.8rem">
              Already signed up? Log in
            </TextSpan>
          </Link>

        </Grid>
        </form>
      </FormPaper>
    )
  }
}

export default withRouter(withStyles(styles)(RegistrationForm))