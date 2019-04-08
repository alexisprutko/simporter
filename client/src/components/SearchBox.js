import React, { Component } from 'react'
import Search from '@material-ui/icons/Search'
import Colors from '../constants/Colors'
import { Grid } from '@material-ui/core';

export default class SearchBox extends Component {
    render() {
        return (
            <Grid
          
                style={{
                    width: 1000,
                    height: 56,
                    backgroundColor: Colors.white,
                    display: 'flex',
                    direction: 'row',
                    borderRadius: 32,
                }}
            >
                <input 
                    style={{
                        width:620,
                        height: 56,
                        border: 'none',
                        borderRadius: 32,
                        paddingLeft: 32,
                        fontSize: '0.8rem',
                        fontWeight: "500",
                        outline: 'none',
                        color: Colors.mainGrey,

                    }}
                    placeholder="TYPE YOUR PRODUCT"
                />
                <Grid 
                container
                justify="center"
                alignItems="center"
                    style={{
                        borderRadius: 32,
                        backgroundColor: Colors.mainBlue,
                        width:96,
                        height:56,
                        cursor: 'pointer'
                    }}
                > <Search  /> </Grid>
            </Grid>
        )
    }
}
