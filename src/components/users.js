import React,{useEffect, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Layout from "./layout"
import axios from "axios";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

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



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
function User() {
  const history = useHistory();

   const [userData,setUserData]  =useState([])


   useEffect( () => {
    let data =  localStorage.getItem("userToken")
   
    let headers = {
      headers: {
        Authorization: `bearer ${data}`
      }
    };
   
   
      axios
        .get(`http://localhost:3000/users`,headers)
        .then(response => {
        console.log("response",response)
           setUserData(response.data.data)
        })
        .catch(error => {
          console.log(error);
        });
    
   },[userData.length])



   if(!localStorage.getItem("userToken")) {
    history.push("/login");
  }

   
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
          {userData.map(row => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.email}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.mobile}</StyledTableCell>
              <StyledTableCell align="right">{row.created_at}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Layout>

  );
}

export default User;








