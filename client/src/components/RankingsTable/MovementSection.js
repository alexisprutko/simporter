import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextSpan } from '../ui'
import { withStyles } from '@material-ui/core'
import Colors from '../../constants/Colors';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'

const styles = theme => ({
    box: {
        paddingRight: "10px",
        marginLeft: 38,
        height: 30
    },
    numberStyle: {
        position: "relative", 
        top: -6.5 
    }
})
class MovementSection extends Component {
    render() {
        const { move: { num, type }, active, classes } = this.props
        const Icon = !type ? ArrowDropDown : ArrowDropUp
        const color = active ? Colors.white : type ? Colors.lightGreen : Colors.mainPink
        return (
            <div
                className={classes.box}
            >
                <TextSpan color={color} size="12px">
                    <Icon />
                </TextSpan>
                <TextSpan
                    lineHeight="14px"
                    color={color}
                    size="12px"
                    className={classes.numberStyle}
                    
                >
                    {Math.abs(num)}
                </TextSpan>
            </div>
        )
    }
}

MovementSection.propTypes = {
    move: PropTypes.object.isRequired
}
MovementSection.defaultProps = {

}
export default withStyles(styles)(MovementSection)