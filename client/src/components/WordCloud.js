import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Colors from '../constants/Colors'
import { Grid } from '@material-ui/core'

class WordCloud extends Component {
    randomSizeGen = () => {
        let size = Math.round(Math.random() * 10) * 5
        if (size < 16) return 16
        return size
    }
    render() {
        const { words, textColor } = this.props
        return (
            <Grid
                style={{ padding: "5% 3%", textAlign: "center" }}
            >
                {
                    words && words.map((elem, index) => (
                        <span style={{ color: textColor, fontSize: this.randomSizeGen(), margin: this.randomSizeGen() + "px", fontWeight: "500" }} key={index} >
                            {elem}
                        </span>
                    ))
                }
            </Grid>
        );
    }
}

WordCloud.propTypes = {
    words: PropTypes.array.isRequired,
    textColor: PropTypes.string
}
WordCloud.defaultProps = {
    textColor: Colors.liteBlue
}


export default WordCloud

