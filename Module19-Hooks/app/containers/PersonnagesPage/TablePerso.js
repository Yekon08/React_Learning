import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

export default function CustomizedTables(props) {
  const classes = useStyles();
  const { persos } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Nom</StyledTableCell>
            {/* <StyledTableCell align="center">Description&nbsp;(g)</StyledTableCell> */}
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Comics</StyledTableCell>
            <StyledTableCell align="center">Series</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {persos.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                <NavLink to={`/persobyid/${row.id}`}>{row.id}</NavLink>
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              {/* <StyledTableCell align="center">{row.description}</StyledTableCell> */}
              <StyledTableCell align="center">{row.modified}</StyledTableCell>
              <StyledTableCell align="center">
                {row.comics.available}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.series.available}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
