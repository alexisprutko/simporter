import React, { Component } from 'react'
import PropTypes from 'prop-types'


import { TextSpan, ActiveHeaderItemBox } from '../ui'
import Colors from '../../constants/Colors';



export default class RankingsTableHeaderElement extends Component {
    render() {
        const { name, active } = this.props
        return (
            <div 
                style={{marginRight: "1.5rem"}}
            >
                {
                    active ? (
                        <ActiveHeaderItemBox color={Colors.mainBlue}>
                            <TextSpan color={Colors.white} size="0.875rem"> {name}</TextSpan>
                        </ActiveHeaderItemBox>
                    ) : (
                            <TextSpan size="0.875rem" > {name}</TextSpan>
                        )
                }
            </div>
        )
    }
}
RankingsTableHeaderElement.propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
}

RankingsTableHeaderElement.defaultProps = {

}   