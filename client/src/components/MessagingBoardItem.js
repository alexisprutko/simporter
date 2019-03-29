import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { PercentItemBox, TextSpan } from './ui'
import Colors from '../constants/Colors';
import { Grid } from '@material-ui/core';

export default class MessagingBoardItem extends Component {


    render() {
        return (
            <PercentItemBox
                container
                bordercolor={this.props.bordercolor}
            >
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ width: "10%", backgroundColor: this.props.pColor || "red" }}
                >
                    <TextSpan color={Colors.white}>{this.props.percent}%</TextSpan>
                </Grid>
                <div style={{
                    width: "80%",
                    backgroundImage: `linear-gradient(to right, ${this.props.mainColor} , #fff ${this.props.percent}%)`,
                    paddingLeft: "20px",
                    
                }}
                >
                    <TextSpan 
                        color={this.props.textColor}
                        lineHeight="40px"
                    >
                        { this.props.title } 
                    </TextSpan> 
                </div>

            </PercentItemBox>
        )
    }
}
