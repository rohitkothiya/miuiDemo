import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Layout from "./layout";
import axios from "axios";

import { useHistory } from "react-router-dom";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});
function User() {
  const history = useHistory();

  const [userData, setUserData] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    let data = localStorage.getItem("userToken");

    let headers = {
      headers: {
        Authorization: `bearer ${data}`
      }
    };

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users`, headers)
      .then(response => {
        setUserData(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [userData.length]);

  const classes = useStyles();
  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Email ID</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Mobile</StyledTableCell>

              <StyledTableCell align="right">Created At</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {loading ? (
              <div
                style={{
                  width: "1200px",

                  justifyContent: "center",
                  height: "800px",
                  alignItems: "center"
                }}
              >
                <div>Loading...</div>
              </div>
            ) : (
                userData.map(row => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell component="th" scope="row">
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.mobile}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.created_at}
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

export default User;
