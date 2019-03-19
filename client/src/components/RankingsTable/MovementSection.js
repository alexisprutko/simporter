import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextSpan } from '../ui'
import Colors from '../../constants/Colors';
import triangle from '../../static/images/triagle2.svg'
import triangleRed from '../../static/images/triangleRed.svg'

export default class MovementSection extends Component {
    render() {
        const { move: { num, type } } = this.props
        return (
            <div
                style={{paddingRight: "10px"}}
            >
                <TextSpan color={ type? Colors.lightGreen: Colors.mainPink } size="12px">
                    <img src={type ? triangle: triangleRed} alt="" style={{ margin: 2.5 }} />
                    {num}
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