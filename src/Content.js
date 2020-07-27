import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteButton from '@material-ui/icons/Delete';
import FaceIcon from '@material-ui/icons/Face';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import RefreshIcon from '@material-ui/icons/Refresh';
import { ListItemText } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

const applicants = [];

function ApplicantsList(props) {
  return (
    <List>
      {props.items.map(
        ({id, name}) => (
          <ListItem key={id}><ListItemText>{name}</ListItemText>
            <IconButton aria-label="delete">
              <DeleteButton />
            </IconButton>
          </ListItem>)
      )}
    </List>
  );
}

function Content(props) {
  const { classes } = props;

  const [list, setList] = React.useState(applicants);
  const [name, setName] = React.useState('');

  function handleAddApplicant() {
    const newList = list.concat({ name, id: uuidv4() });
    setList(newList);
    setName('');
  }

  function handleRemoveApplicant() {

  }
  
  function handleApplicantListChange(event) {
    setName(event.target.value);
  }

  return (
    <Paper className={classes.paper}>
      <AppBar
        className={classes.searchBar}
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <FaceIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Applicant name or nickname"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
                value={name}
                onChange={handleApplicantListChange}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" className={classes.addUser} onClick={handleAddApplicant}>
                Add applicant
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        {!list.length ? (
          <Typography color="textSecondary" align="center">
            No users for this project yet
          </Typography>) : (
          <ApplicantsList items={list}></ApplicantsList>
          )}
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
