import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import Colors from '../constants/Colors'
import { SmallDishBox, TextSpan } from '../components/ui'
import triagle from '../static/images/triagle2.svg'

export default class SmallDish extends Component {

    render() {
        const { title, percent, count } = this.props
        return (
            <SmallDishBox>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                >
                    <TextSpan>{title}</TextSpan>
                    {
                        percent && (
                            <TextSpan color={Colors.lightGreen} size="12px">
                                <img src={triagle} alt="" style={{ margin: 2.5 }} />
                                {percent}%
                             </TextSpan>
                        )
                    }
                </Grid>

                <TextSpan
                    size="56px"
                    color={Colors.textBlue}
                    weight="bold"
                >{count}</TextSpan>
            </SmallDishBox>
        )
    }
}
SmallDish.propTypes = {
    title: PropTypes.string.isRequired,
    percent: PropTypes.number,
    count: PropTypes.number.isRequired
};

SmallDish.defaultProps = {
    percent: null
}