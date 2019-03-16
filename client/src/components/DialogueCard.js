import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Grid, Link } from '@material-ui/core'
import { TextSpan, CardIconBox, DialogueCardHeader, Separator, DialogueCardBody, TextParagraph, RoundButton } from '../components/ui'
import thumbtackRed from '../static/images/thumbtackRed.svg'
import thumbtackBlue from '../static/images/thumbtackBlue.svg'
import thumbtackGreen from '../static/images/thumbtackGreen.svg'
import Colors from '../constants/Colors';

export default class DialogueCard extends Component {
  iconSwitcher = () => {
    switch (this.props.icon) {
      case "pink": return thumbtackRed
      case "blue": return thumbtackBlue
      case "green": return thumbtackGreen
      default: return thumbtackRed
    }
  }
  colorSwitcher = () => {
    switch (this.props.icon) {
      case "pink": return Colors.mainPink
      case "blue": return Colors.mainBlue
      case "green": return Colors.lightGreen
      default: return Colors.textBlue
    }
  }
  render() {
    return (
      <div>
        <DialogueCardHeader
          container
          direction="column"
          style={{ position: 'relative' }}
          color={this.props.color}
        >
          <Separator vertical="24px" />
          <TextSpan
            color="rgba(255,255,255,.8)"
            weight="500"
            size="20px"
          >
            Urgent
            </TextSpan>
          <TextSpan
            color={Colors.white}
            weight="500"
            size="20px"
          >
            urgent take action now
            </TextSpan>
          <CardIconBox >
            <img src={this.iconSwitcher()} alt="" />
          </CardIconBox>
        </DialogueCardHeader>
        <DialogueCardBody
          color={Colors.white}
        >
          <Separator vertical="2rem" />
            <TextParagraph width="85%" color={Colors.textBlue} lineHeight="29px">
              The benefits offered by this product significantly mismatch consumer interest. Reset launch plans with an educational message.  
            </TextParagraph>
            <Separator vertical="3rem" />
            <Grid
              container
              direction="row"
              justify="space-around"
            >
                <Link
                  style={{paddingTop: '15px', cursor: "pointer"}}
                >
                  <TextSpan
                    color={Colors.textBlue} 
                    weight="500"
                  >
                    Action Pinned  
                  </TextSpan>
                </Link>
                  <RoundButton 

                   color={this.colorSwitcher()}
                >
                  <TextSpan
                    color={Colors.white}
                    weight="500"
                  >Unpin</TextSpan>
              </RoundButton>
             
            </Grid>
          </DialogueCardBody>

      </div>
    )
  }
}
          
// DialogueCard.propTypes = {
// // title: PropTypes.string.isRequired,
// // percent: PropTypes.number,
//       // count: PropTypes.number.isRequired
// };
        
// DialogueCard.defaultProps = {
//     percent: null
// }
          
