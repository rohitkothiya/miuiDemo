import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
function PostDailog(props) {
  const [title, setTitle] = useState(
    props.currentpost ? props.currentpost.title : ""
  );

  const [description, setDescription] = useState(
    props.currentpost && props.currentpost.description
  );

  const handleChangePostTitle = e => {
    setTitle(e.target.value);
  };

  const handleChangePostDescription = e => {
    setDescription(e.target.value);
  };

  const handleAddPost = () => {
    let data = localStorage.getItem("userToken");

    let headers = {
      headers: {
        Authorization: `bearer ${data}`
      }
    };

    const body = { title, description };
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/post`, body, headers)
      .then(res => {
        props.fetchData();
        props.close();
      })
      .catch(error => {
        // alert("campaign. get assign camp- Something went wrong.");
        console.log("erre", error);
      });
  };

  const canbeSubmitted = () => {
    if (title && description) {
      return false;
    }
    return true;
  };
  const handleUpdatepost = () => {
    let data = localStorage.getItem("userToken");

    let headers = {
      headers: {
        Authorization: `bearer ${data}`
      }
    };
    const body = { title, description };
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/post/${props.currentpost._id}`, body, headers)
      .then(res => {
        console.log("res", res);
        props.fetchData();
        props.close();
      })
      .catch(error => {
        // alert("campaign. get assign camp- Something went wrong.");
        console.log("erre", error);
      });
  };

  const classes = useStyles();
  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      aria-labelledby="form-dialog-title"
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.isEdit ? "Edit" : "Add New"} Post
          </Typography>
        </Toolbar>
      </AppBar>

      {/* <DialogTitle id="form-dialog-title">{props.isEdit ? "Edit" : "Add"} New Post</DialogTitle> */}
      <DialogContent>
        <TextField
          autoFocus
          onChange={handleChangePostTitle}
          id="title"
          label="Title"
          value={title}
          type="text"
          fullWidth
          margin="dense"
          required
        />
        <TextField
          onChange={handleChangePostDescription}
          id="description"
          label="Description"
          type="text"
          fullWidth
          margin="dense"
          value={description}
          required
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close} color="primary">
          Cancel
        </Button>

        <Button
          onClick={props.isEdit ? handleUpdatepost : handleAddPost}
          variant="contained"
          color="primary"
          disabled={canbeSubmitted()}
        >
          {props.isEdit ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PostDailog;
