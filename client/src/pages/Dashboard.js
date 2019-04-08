import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import Strings from '../constants/Strings'
import Colors from '../constants/Colors'
import { BackLink, TextSpan, Separator, AnimationBox } from '../components/ui'
import SmallDish from '../components/SmallDish'
import Chart from '../components/Chart'
import DialogueCard from '../components/DialogueCard'
import data from '../testData/dasboardData'
import { scrollTop } from '../helpers/scroll';
import AlertComponent from '../components/AlertComponent'



export default class Dashboard extends Component {
  componentWillUnmount = () => {
    scrollTop()
  }
  render() {
    const { history: { push }, activeAlert, closeAlert } = this.props
    console.log(this.props)
    return (
      <AnimationBox
        container
        direction="column"

      >
       { activeAlert && <AlertComponent
          type="warning"
          message="Please confirm your email."
          active={true}
          closeEvent={closeAlert}
        />}
        <Separator vertical="60px"/>
        <BackLink
          onClick={() => push('/category')}
          style={{maxWidth: 150}}
        >
          <NavigateBefore />
          {Strings.GO_BACK_CATEGORY}
        </BackLink>
        <Separator vertical="33px" />
        <TextSpan color={Colors.textBlue} size="28px" >{Strings.ANALYTICS_OVERVIEW}</TextSpan>
        <Separator vertical="32px" />
        <Grid
          container
          direction="row"
          justify="space-between"
        >
          {
            data.map(element => <SmallDish
              key={element.name}
              title={element.name}
              count={element.count}
              percent={element.percent}
            />)
          }

        </Grid>
        <Separator vertical="32px" />
        <Grid
          container
          direction='row'
          justify='space-between'
        >
          <Chart id='1' color={Colors.lightGreen} title="Total Toy Sales"/>
          <Chart id='2' color={Colors.liteBlue} title="Launches by Subcategory" />
        </Grid>
        <Separator vertical="72px" />
        <TextSpan size="21px" color={Colors.textBlue} weight="500">
          {Strings.PINNED_ACTIONS}
        </TextSpan>
        <Separator vertical="33px" />
        <Grid
          container
          direction="row"
          justify="space-between"
        >
          <DialogueCard color={Colors.mainPink} icon={"pink"} />
          <DialogueCard color={Colors.mainBlue} icon={"blue"} />
          <DialogueCard color={Colors.lightGreen} icon={"green"} />
        </Grid>
      </AnimationBox>
    )
  }
}
