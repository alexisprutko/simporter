import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'

import data from '../testData/initialMenu'
import { InitialMenuGridElement, CategoryBox, InitialMenuButton, TextSpan } from '../components/ui'
import Colors from '../constants/Colors'

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: "3% 6%",
        justifyContent: "center"

    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    divider: {
        marginBottom: "5%"
    }
});

function Category(props) {
    const { classes, history: { push } } = props;

    return (
        <CategoryBox>
            <div className={classes.root}>
                <Divider className={classes.divider} />
                {
                    data.map((elem, index) => (
                        <Grid container spacing={24} key={index} justify="center">
                            {
                                elem.map(item => (
                                    <InitialMenuGridElement
                                        item
                                        xs
                                        justify={"center"}
                                        alignItems={"center"}
                                        container
                                        key={item.id}
                                        active={item.active ? 1 : 0}
                                        onClick={() => item.active && push("/", { id: item.id, name: item.name })}
                                    >
                                        <InitialMenuButton
                                            className={classes.paper}
                                            disabled={!item.active}
                                        >
                                            <TextSpan color={ item.active ? Colors.white : Colors.mainGrey}>
                                                {item.name}
                                            </TextSpan>
                                        </InitialMenuButton>
                                    </InitialMenuGridElement>
                                ))
                            }
                        </Grid>
                    ))
                }

            </div>
        </CategoryBox>
    );
}

Category.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Category);