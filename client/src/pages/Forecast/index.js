import React, { Component } from 'react'
import { AnimationBox } from '../../components/ui'
import { scrollTop } from '../../helpers/scroll';
import TopDish from '../../components/TopDish'
import RankingsTable from '../../components/RankingsTable'

import { connect } from 'react-redux'
import { selectProduct } from '../../redux/ducks/productCardCondition'

import ForecastIem from './ForecastIem'

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
    const { overallRankings  } = this.props
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
              <RankingsTable
                active="BRAND"
                data={overallRankings}
                selectProduct={() => this.setState({condition: "item"})}
                productCardCondition={this.props.productCardCondition}
                expectedRank={"true"}
                star={true}
              />

            </>
          ): (
            <ForecastIem 
                goBack={() => this.setState({condition: 'list'})}
            />
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
