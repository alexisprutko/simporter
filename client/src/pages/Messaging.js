import React, { Component } from 'react'
import { scrollTop } from '../helpers/scroll';
import KeywordTable from '../components/KeywordTable'
import { TextParagraph } from '../components/ui'

import MessagingBoard from '../components/MessagingBoard'
import words from '../testData/words'
import Colors from '../constants/Colors';

export default class Messaging extends Component {
  componentWillUnmount = () => {
    scrollTop()
  }
  render() {
    return (
      <div>
        <MessagingBoard
          words={words}
          textColor={Colors.strenghtGradient}
          pColor={Colors.strenght}
          bordercolor={Colors.strenght}
          mainColor={Colors.strenghtGradient}
          title="Strengths"
        />
        <MessagingBoard
          words={words}
          textColor={Colors.mainPink}
          pColor="tomato"
          bordercolor="tomato"
          mainColor={Colors.mainPink}
          title="Weaknesses"
        />
        <TextParagraph
          color={Colors.textBlue}
          size="1.5rem"
          weight="500"
        >
          Keywords
        </TextParagraph>
        <KeywordTable />
      </div>
    )
  }
}
