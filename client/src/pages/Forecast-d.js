import React, { Component } from 'react'
import { AnimationBox } from '../components/ui'
import { scrollTop } from '../helpers/scroll';
import TopDish from '../components/TopDish'
import RankingsTable from '../components/RankingsTable'

import { connect } from 'react-redux'
import { selectProduct } from '../redux/ducks/productCardCondition'
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
    const { overallRankings, productCardCondition: { active, data: { name, image, move } }, selectProduct } = this.props
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
                expectedRank={true}
                star={true}
              />

            </>
          ): (
            <div />
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
