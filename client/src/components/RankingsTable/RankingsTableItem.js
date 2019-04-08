import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper, Grid, withStyles } from '@material-ui/core'
import { TextSpan, SmallSquareBox, GreenBorderBox, TextBox } from '../ui'
import MovementSection from './MovementSection'
import Colors from '../../constants/Colors'
import Star from '@material-ui/icons/Star'



const styles = theme => ({
    box: {
        padding: '25px 20px',
        marginTop: "0.6rem",
        cursor: "pointer",
        boxShadow: '0px 4px 24px rgba(1, 106, 163, 0.04)',
        width: 992,
        height: 88
    }
})

class RankingsTableItem extends Component {
    render() {
        const { name, brand, sku, duration, move, id, active, handleClick, expectedRank, classes } = this.props
        const textColor = !active ? Colors.textBlue : Colors.white
        const bColor = !active ? {} : { backgroundColor: Colors.mainBlue }
        return (
            <Paper
                style={bColor}
                onClick={handleClick}
                className={classes.box}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"


                >
                    {this.props.star && <TextSpan color={Colors.golden}> <Star /> </TextSpan>}

                    <SmallSquareBox>
                        <TextSpan color={Colors.white}> {id} </TextSpan>
                    </SmallSquareBox>

                    <TextSpan
                        style={{ width: 140, marginLeft: 46 }}
                        color={!active ? Colors.mainBlue : Colors.white}
                        weight="500"
                    >
                        {brand}
                    </TextSpan>


                    <TextSpan color={textColor} style={{ paddingLeft: 10, width: 330 }}> {name} </TextSpan>

                    <TextSpan color={textColor} style={{ marginLeft: 27, width: 93 }}> {sku} </TextSpan>
                    {expectedRank && this.props.star && <TextBox> <TextSpan size="0.875rem" color={Colors.textBlue}> #{expectedRank} </TextSpan> </TextBox>}
                    <GreenBorderBox
                        active={active}
                        style={{ width: 103, marginLeft: 35 }}
                    >
                        <TextSpan color={textColor} > {duration} </TextSpan>
                    </GreenBorderBox>
                    <MovementSection move={move} active={active} />
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

export default withStyles(styles)(RankingsTableItem) 