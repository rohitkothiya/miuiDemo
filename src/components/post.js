import React,{useEffect, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Layout from "./layout"
import axios from "axios";
import  PostDailog from "./postdailog"

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

   const [postData,setpostData]  =useState([])
  const [isShowPopup,setIsShowPopup] =useState(false)
  const [isEditMode,setIsEditMode] =useState(false)
  const [currentpost,setCurrentPost] =useState({})


  const fetchPostData = () => {

    let data =  localStorage.getItem("userToken")
   
    let headers = {
      headers: {
        Authorization: `bearer ${data}`
      }
    };
   
   
      axios
        .get(`http://localhost:3000/posts`,headers)
        .then(response => {
      
           setpostData(response.data.data)
        })
        .catch(error => {
          console.log(error);
        });

  }
   useEffect( () => {

    let data =  localStorage.getItem("userToken")
   
    let headers = {
      headers: {
        Authorization: `bearer ${data}`
      }
    };
   
   
      axios
        .get(`http://localhost:3000/posts`,headers)
        .then(response => {
      
           setpostData(response.data.data)
        })
        .catch(error => {
          console.log(error);
        });
    
   },[postData.length])

   const handleOpenPostDailog = () => {

    setIsShowPopup(true)
    setIsEditMode(false)
    setCurrentPost({})
   }

   const handleClosePostPopup = () => {
     setIsShowPopup(false)
   }


  const handleShowEditPostDailog =(e,id) => {

const findPost = postData.find(post => post._id === id)

    setIsEditMode(true)
    setIsShowPopup(true)
    setCurrentPost(findPost)

  }

   const handleDeletePost = (e,id) => {

    let data =  localStorage.getItem("userToken")
   
    let headers = {
      headers: {
        Authorization: `bearer ${data}`
      }
    };
     
    axios
    .delete(`http://localhost:3000/post/${id}`,headers)
    .then(response => {
 

      if(!response.data.error) {
        fetchPostData()
      }
    
      
    })
    .catch(error => {
      console.log(error);
    });



   }



   if(!localStorage.getItem("userToken")) {
    history.push("/login");
  }
   const classes = useStyles();
  return (
    <React.Fragment>

   
    <Layout>
       <div style={{display:"flex",justifyContent:"flex-end",marginBottom:"20px"}} >
       <Button variant="contained" color="primary" onClick={handleOpenPostDailog}>
    Add new post
      </Button>
       </div>
 
     
     <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right"/>
        
            <StyledTableCell align="right"/>
          </TableRow>
        </TableHead>
        <TableBody>
          {postData.map(row => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={(e) => handleShowEditPostDailog(e,row._id)} color="primary"  variant="contained">
            Edit
          </Button></StyledTableCell>
              <StyledTableCell align="right"> <Button onClick={(e) => handleDeletePost(e,row._id)} color="primary"  variant="contained">
            Delete
          </Button></StyledTableCell>
            
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Layout>

      {isShowPopup && (
         <PostDailog  open={isShowPopup} close={handleClosePostPopup} isEdit={isEditMode}   currentpost={currentpost} fetchData={fetchPostData} />
      )}
 </React.Fragment>
  );
}

export default User;
