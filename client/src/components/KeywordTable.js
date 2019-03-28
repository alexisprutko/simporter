import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Close from '@material-ui/icons/Close'

import Colors from '../constants/Colors'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function KeywordTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Keywords</TableCell>
            <TableCell align="right">Relative frequency</TableCell>
            <TableCell align="right">RECOMMENDED DATA</TableCell>
            <TableCell align="right"> Remove from list</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
              
                <Grid
                    container
                    style={{width: "200px", borderRadius: "100px", backgroundColor: Colors.lightBlue, height: "1rem"}}
                >
                    <div 
                        style={{width: "80%",borderRadius: "100px", background: `linear-gradient(0.25turn, ${Colors.lightBlue}, ${Colors.mainBlue})`}}
                    ></div>
                   
                </Grid>
                </TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right"><Close /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

KeywordTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KeywordTable);