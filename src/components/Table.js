import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Animated } from "react-animated-css";
const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 540
  }
});
export default function Tables(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [hoverd, setHoverd] = React.useState(false);
  const handleHover = () => {
    setHoverd(!hoverd);
  };
  const style1 = {
    color: "red",
    border: "none",
    padding: "10px 20px",
    background: "yellow",
    outline: "none"
  };
  const style2 = {
    color: "blue",
    border: "none",
    padding: "10px 20px",
    background: "yellow",
    outline: "none",
    cursor: "pointer"
  };
  let show_table = null;
  if (!props.show) {
    show_table = (
      <div style={{ width: "80%", margin: "10px auto" }}>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Body</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(d => (
                    <TableRow>
                      <TableCell align="center">{d.title}</TableCell>
                      <TableCell align="center">{d.body}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    );
  } else {
    show_table = null;
  }
  return (
    <div>
      <button
        style={hoverd ? style2 : style1}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={props.showTable}
      >
        Show/Hide
      </button>
      <Animated
        animationIn="fadeInLeftBig"
        animationOut="zoomOutDown"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={!props.show}
      >
        {show_table}
      </Animated>
    </div>
  );
}
