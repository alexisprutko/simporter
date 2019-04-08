import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Colors from '../constants/Colors'

const styles = theme => ({
    root: {
        width: '60%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        boxShadow: '0px 12px 40px rgba(209, 220, 246, 0.32)'
    },
    table: {
        minWidth: 700,
    },
    text: {
        color: Colors.textBlue
    }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs };
}

const rows = [
    createData(34, "#42", 140.000, '$2,238,600'),
    createData(35, '#89', 120.000, '$1,918,800'),
    createData(36, "#72", 80.000, '$3,437,850'),
    createData(37, "#232", 75.00, '$1,199,250'),
    createData(38, '#16', 160.000, '$4,399,250'),
];

function SalesPrediction(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">WEEK</TableCell>
                        <TableCell align="right">Expected Rank</TableCell>
                        <TableCell align="right">Units</TableCell>
                        <TableCell align="right">Revenue</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row" className={classes.text}>
                                {row.name}
                            </TableCell>
                            <TableCell align="right" className={classes.text}>{row.calories}</TableCell>
                            <TableCell align="right" className={classes.text}>{row.fat}</TableCell>
                            <TableCell align="right" className={classes.text}>{row.carbs}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

SalesPrediction.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SalesPrediction);