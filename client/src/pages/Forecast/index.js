import React, { Component } from 'react'
import { AnimationBox, Separator, TextSpan } from '../../components/ui'
import { scrollTop } from '../../helpers/scroll';
import TopDish from '../../components/TopDish'
import RankingsTable from '../../components/RankingsTable'

import { connect } from 'react-redux'
import { selectProduct } from '../../redux/ducks/productCardCondition'
import { Grid, Link } from '@material-ui/core';
import MessagingBoard from '../../components/MessagingBoard'
import words from '../../testData/words'
import Colors from '../../constants/Colors';
import SalesPrediction from '../../components/SalesPrediction'
import ForecastIem from './ForecastIem'
import ExpandMore from '@material-ui/icons/ExpandMore'
import DragNListItem from '../../components/DragNList'


class Forecast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      condition: "list"
    }
  }
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
        {
          this.state.condition === "list" ? (
            <>
              <TopDish
                title="FORECAST"
                name="TOP 100"
                desc="Of all your products, these will be the best 100 products"
              />
              <Separator vertical="2rem" />
              <RankingsTable
                active="BRAND"
                data={overallRankings}
                selectProduct={() => this.setState({ condition: "item" })}
                productCardCondition={this.props.productCardCondition}
                expectedRank={"true"}
                star={true}
              />

            </>
          ) : (
              <>
                <Grid
                  container
                  direction="row"
                  justify="space-between"

                >
                  <ForecastIem
                    goBack={() => this.setState({ condition: 'list' })}
                  />
                  <div
                    style={{display: "flex", flexDirection: "row"}}
                  >
                    <DragNListItem title="Store Format" itemList={[ "Overall", "Hypermarket", "Supermarket", "Grocery Store"]} handleClick={() => {}}/>
                    <DragNListItem title="Region" itemList={["Urban", "Suburban", "Rural"]} handleClick={() => {}} />                    
                  </div >
                </Grid>
                <Separator vertical="2rem" />
                <MessagingBoard
                  words={words}
                  textColor={Colors.strenghtGradient}
                  pColor={Colors.strenght}
                  bordercolor={Colors.strenght}
                  mainColor={Colors.strenghtGradient}
                  title="Strengths"
                />
                <Separator vertical="2rem" />
                <MessagingBoard
                  words={words}
                  textColor={Colors.mainPink}
                  pColor={Colors.darkPink}
                  bordercolor="tomato"
                  mainColor={Colors.mainPink}
                  title="Weaknesses"
                />
                <Separator vertical="2rem" />
                <Grid
                  container
                  direction="row"
                >
                  <TextSpan color={Colors.textBlue} size="1.5rem" weight="500" >Sales Prediction.</TextSpan>
                  <Link > <TextSpan color={Colors.mainBlue} size="1.5rem" weight="500" > April 2019 <ExpandMore /> </TextSpan></Link>
                </Grid>
                <Separator vertical="2rem" />
                <SalesPrediction />
              </>
            )
        }
      </AnimationBox>
    )
  }
}

const mapStateToProps = (state) => ({
  overallRankings: state.overallRankings,
  productCardCondition: state.productCardCondition,
})
const mapDispatchToProps = {
  selectProduct,
}


export default connect(mapStateToProps, mapDispatchToProps)(Forecast)
