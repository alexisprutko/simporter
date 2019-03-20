import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Paper } from '@material-ui/core'
import { TextParagraph } from './ui'

import MessagingBoardItem from './MessagingBoardItem'
import WordCloud from './WordCloud'
import Colors from '../constants/Colors';


export default class MessagingBoard extends Component {
    render() {
        const { textColor, words, pColor, bordercolor, mainColor, title } = this.props
        return (
            <Paper>

                <TextParagraph
                    style={{ padding: "1.5rem" , fontWeight: "500"}}
                    
                >
                    {title}
                </TextParagraph>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    wrap="nowrap"
                    style={{ padding: "10px" }}
                >
                    <div>
                        <MessagingBoardItem percent={80} pColor={pColor} bordercolor={bordercolor} mainColor={mainColor} />
                        <MessagingBoardItem percent={60} pColor={pColor} bordercolor={bordercolor} mainColor={mainColor} />
                        <MessagingBoardItem percent={40} pColor={pColor} bordercolor={bordercolor} mainColor={mainColor} />
                        <MessagingBoardItem percent={90} pColor={pColor} bordercolor={bordercolor} mainColor={mainColor} />
                        <MessagingBoardItem percent={98} pColor={pColor} bordercolor={bordercolor} mainColor={mainColor} />

                    </div>
                    <WordCloud words={words} textColor={textColor} />
                </Grid>
            </Paper>
        )
    }
}

MessagingBoard.propTypes = {
    title: PropTypes.string,
    words: PropTypes.array.isRequired,
    textColor: PropTypes.string
}

MessagingBoard.defaultProps = {
    title: null,
    textColor: Colors.mainBlue

}