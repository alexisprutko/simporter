import React, { Component } from 'react'
import { Grid } from '@material-ui/core' 
import { NavigateBefore } from '@material-ui/icons'
import { BackLink } from '../../components/ui'
import Strings from '../../constants/Strings'

export default class ForecastIem extends Component {
  render() {
    return (
      <Grid
        container
        direction="column"
    

      >
           <BackLink
                  onClick={this.props.goBack}
                >
                  <NavigateBefore />
                  {Strings.BACK_T_F}
                </BackLink>
      </Grid>
    )
  }
}
