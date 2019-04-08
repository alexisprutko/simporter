import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Paper, withStyles } from '@material-ui/core'
import { TextParagraph } from './ui'

import MessagingBoardItem from './MessagingBoardItem'
import WordCloud from './WordCloud'
import Colors from '../constants/Colors'

const styles = theme => ({
    box: {
        boxShadow: '0px 12px 40px rgba(209, 220, 246, 0.32)',
        paddingBottom: '3rem'
    },
    title: {
        padding: '10px 1.5rem 0 1.5rem'
    }, 
    content: { 
        padding: "0 1.5rem", 
        fontWeight: "500" 
    }
})


class MessagingBoard extends Component {
    render() {
        const { textColor, words, pColor, bordercolor, mainColor, title , classes} = this.props
        return (
            <Paper
                className={classes.box}
            >

                <TextParagraph
                    className={classes.title}
                >
                    {title}
                </TextParagraph>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    wrap="nowrap"
                    className={classes.content}
                >
                    <div>
                        <MessagingBoardItem
                            percent={80} 
                            pColor={pColor}
                            bordercolor={bordercolor}
                            mainColor={mainColor}
                            title="Affordable"
                            textColor={mainColor === Colors.mainPink ?  Colors.darkPink  : Colors.white}
                        />
                        <MessagingBoardItem
                            percent={60}
                            pColor={pColor}
                            bordercolor={bordercolor}
                            mainColor={mainColor}
                            title="Affordable"
                            textColor={mainColor === Colors.mainPink ?  Colors.darkPink  : Colors.white}
                        />
                        <MessagingBoardItem
                            percent={40}
                            pColor={pColor}
                            bordercolor={bordercolor}
                            mainColor={mainColor}
                            title="Affordable"
                            textColor={mainColor === Colors.mainPink ?  Colors.darkPink  : Colors.white}
                        />
                        <MessagingBoardItem
                            percent={90}
                            pColor={pColor}
                            bordercolor={bordercolor}
                            mainColor={mainColor}
                            title="Affordable"
                            textColor={mainColor === Colors.mainPink ?  Colors.darkPink  : Colors.white}
                        />
                        <MessagingBoardItem
                            percent={98} 
                            pColor={pColor}
                            bordercolor={bordercolor}
                            mainColor={mainColor}
                            title="Affordable"
                            textColor={mainColor === Colors.mainPink ? Colors.darkPink : Colors.white}
                        />

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
export default withStyles(styles)(MessagingBoard)