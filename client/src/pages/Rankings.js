import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import TopDish from '../components/TopDish'
import RankingsTable from '../components/RankingsTable'
import { Separator, AnimationBox } from '../components/ui';

import { connect } from 'react-redux'
import { scrollTop } from '../helpers/scroll';


class Rankings extends Component {
  componentWillUnmount = () => {
    scrollTop()
  }
  render() {
   const { overallRankings } = this.props
    return (
      <AnimationBox
        container
        direction="column"
      >
        <TopDish
          title={"OVERALL RANKINGS"}
          name="500 SKUs"

        />
        <Separator vertical="2rem" />
        <RankingsTable
          active="BRAND"
          data={overallRankings}
        />
      </AnimationBox>
    )
  }
}

const mapStateToProps = (state) => ({
  overallRankings: state.overallRankings
})
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Rankings) 