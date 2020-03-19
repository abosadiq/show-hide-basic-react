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
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Animated } from "react-animated-css";
import Hoc from "./Hoc";
import HocWClass from "../HocWClass";
const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 500
  }
});
function Tables(props) {
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
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
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
      <Hoc style={{ width: "80%", margin: "10px auto" }}>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Body</TableCell>
                  <TableCell align="center">userId</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(d => (
                    <TableRow key={d.id}>
                      <TableCell align="center">{d.id}</TableCell>
                      <TableCell align="center">{d.title}</TableCell>
                      <TableCell align="center">{d.body}</TableCell>
                      <TableCell align="center">{d.userId}</TableCell>
                      <TableCell align="center">
                        <button
                          style={{
                            border: "none",
                            color: "red",
                            outline: "none"
                          }}
                          onClick={() => props.haddelDelete(d.id)}
                        >
                          <DeleteForeverIcon />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={props.data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Hoc>
    );
  } else {
    show_table = null;
  }
  return (
    <Hoc>
      <button
        style={hoverd ? style2 : style1}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={props.showTable}
      >
        {props.show ? "Hide Data" : "Show Data"}
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
    </Hoc>
  );
}
export default HocWClass(Tables);
