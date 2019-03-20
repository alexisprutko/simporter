import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper, Grid } from '@material-ui/core'
import { TextSpan, SmallSquareBox, GreenBorderBox, TextBox } from '../ui'
import MovementSection from './MovementSection'
import Colors from '../../constants/Colors'
import Star from '@material-ui/icons/Star'



const styles = theme => ({
    box:{ padding: '20px 2rem', marginTop: "0.5em", }
})

export default class RankingsTableItem extends Component {
    render() {
        const { name, brand, sku, duration, move, id, active, handleClick, expectedRank } = this.props
        const textColor = !active ?  Colors.textBlue : Colors.white
        const bColor = !active ? {} : {backgroundColor: Colors.mainBlue}
        console.log(this.props.star)
        return (
            <Paper
                style={{ padding: '20px 2rem', marginTop: "0.5em", cursor:"pointer", ...bColor}}
                onClick={handleClick}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"

                >   
                   { this.props.star  &&  <TextSpan color={Colors.golden}> <Star /> </TextSpan>}

                    <SmallSquareBox>
                        <TextSpan color={Colors.white}> {id} </TextSpan>
                    </SmallSquareBox>
                    <Grid
                        xs={2}
                        item
                    >
                        <TextSpan color={!active ? Colors.mainBlue : Colors.white}> {brand} </TextSpan>
                    </Grid>
                    <Grid
                        xs={4}
                        item
                    >
                        <TextSpan color={ textColor} > {name} </TextSpan>
                    </Grid>
                    <TextSpan color={textColor}> {sku} </TextSpan>
                    { expectedRank && <TextBox> <TextSpan size="0.875rem" color={Colors.textBlue}> #{ expectedRank } </TextSpan> </TextBox> }
                    <GreenBorderBox>
                        <TextSpan color={textColor} > {duration} </TextSpan>
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
