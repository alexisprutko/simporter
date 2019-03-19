import React, { Component } from 'react'
import { scrollTop } from '../helpers/scroll';
import { Grid } from '@material-ui/core';
import CategoryDishList from '../components/CategoryDishList'
import { TextSpan, AnimationBox, Separator, CategoryBox } from '../components/ui';
import Colors from '../constants/Colors';
import data from '../testData/rankingsBySubcategory'

export default class RankingsSub extends Component {
  componentWillUnmount = () => {
    scrollTop()
  }
  render() {

    return (
      <AnimationBox
        container
      >
        <TextSpan
        color={Colors.textBlue}
        size="28px"
        >
          Rankings by subcategory
       </TextSpan>
       <Separator horizontal="48px"/>
        <Grid
          container
        >
        {
          data.map((elem,index) => (
            <CategoryDishList elem={elem} id={index} key={index} />
          ))
        }
        </Grid>
      </AnimationBox>
    )
  }
}
