import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper, Grid } from '@material-ui/core'
import { TextSpan, SmallSquareBox, GreenBorderBox } from '../ui';
import MovementSection from './MovementSection'
import Colors from '../../constants/Colors';



export default class RankingsTableItem extends Component {


    render() {
        const { name, brand, sku, duration, move, id } = this.props
        return (
            <Paper
                style={{ padding: '20px 2rem', marginTop: "0.5em" }}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"

                >
                    <SmallSquareBox>
                        <TextSpan
                            color={Colors.white}
                        >
                            {id}
                        </TextSpan>
                    </SmallSquareBox>
                    <Grid
                        xs={2}
                        item
                    >
                        <TextSpan color={Colors.mainBlue}> {brand} </TextSpan>
                    </Grid>
                    <Grid 
                        xs={4}
                        item
                    >
                        <TextSpan color={Colors.textBlue} > {name} </TextSpan>
                    </Grid>
                    <TextSpan color={Colors.textBlue}> {sku} </TextSpan>
                    <GreenBorderBox>
                        <TextSpan color={Colors.textBlue} > {duration} </TextSpan>
                    </GreenBorderBox>
                    <MovementSection move={move} />
                </Grid>
            </Paper>
        )
    }
}

RankingsTableItem.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    move: PropTypes.object.isRequired,
}

RankingsTableItem.defaultProps = {

}   
