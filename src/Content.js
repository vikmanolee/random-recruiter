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
import AssignmentIcon from '@material-ui/icons/Assignment';
import FaceIcon from '@material-ui/icons/Face';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import RefreshIcon from '@material-ui/icons/Refresh';
import { ListItemText } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchBarColor: {
    background: '#ffffff',
    borderRadius: '8px',
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
    margin: '20px 16px',
  },
  jobCard: {
    margin: theme.spacing(2),
    background: '#e5f5fc',
  },
});

const sampleJob = {id: '1', name: 'True Dat', newApplicantName: '', applicants: [{id: '1', name: 'Foo'}, {id: '2', name: 'Bar'}]};

function Content(props) {
  const { classes } = props;

  const [list, setList] = React.useState([sampleJob]);
  const [jobName, setJobName] = React.useState('');
  const [chosenOne, setChosenOne] = React.useState(-1);

  function handleAddJob() {
    if (jobName !== '') {
      const newList = list.concat({ name: jobName, id: uuidv4(), newApplicantName: '', applicants: [] });
      setList(newList);
      setJobName('');
    }
  }

  function handleRemoveJob(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  function handleJobNameChange(event) {
    setJobName(event.target.value);
  }

  function handleAddApplicant(jobId) {
    const newList = list.map((item) => {
      if (item.id === jobId && item.newApplicantName !== '') {
        const updatedItem = {
          ...item,
          applicants: item.applicants.concat({name: item.newApplicantName, id: uuidv4()}),
          newApplicantName: ''
        };
        return updatedItem;
      }
      return item;
    });
    setList(newList);
  }

  function handleRemoveApplicant(id, jobId) {
    const newList = list.map((item) => {
      if (item.id === jobId) {
        const updatedItem = {
          ...item,
          applicants: item.applicants.filter((applicant) => applicant.id !== id),
        };
        return updatedItem;
      }
      return item;
    });
 
    setList(newList);
  }

  function handleApplicantNameChange(event, jobId) {
    const newList = list.map((item) => {
      if (item.id === jobId) {
        const updatedItem = {
          ...item,
          newApplicantName: event.target.value
        };
        return updatedItem;
      }
      return item;
    });
    setList(newList);
  }

  function hire(jobId) {
    const job = list.find(item => item.id === jobId);
    const jobApplicants = job.applicants.length;
    chooseLuckyOne(jobApplicants)
      .then((luckyNumber) => {
        setChosenOne(luckyNumber);
        applyChosenOne(luckyNumber, jobId)
      });
  }

  function applyChosenOne(chosen, jobId) {
    console.log('job: ' + jobId + ' > ' + chosen);
  }

  function chooseLuckyOne(applicantNumber) {
    const max = applicantNumber - 1;
    return fetch(`https://www.random.org/integers/?num=1&min=0&max=${max}&col=1&base=10&format=plain&rnd=new`)
      .then(res => res.text())
      .then(
        (result) => {
          console.log('For transparency reasons, the plain result was: ' + result);
          var intResult = parseInt(result);
          return intResult;
        },
        (error) => {
          console.log(error);
          return -2;
        }
      )
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
              <AssignmentIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Job name"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
                value={jobName}
                onChange={handleJobNameChange}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" className={classes.addUser} onClick={handleAddJob}>
                Add Job
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
            No Jobs for this project yet
          </Typography>) : (
          <List>
          {list.map(
            (item) => (
            <Card className={classes.jobCard} key={item.id}>
              <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                  {item.name}
                </Typography>
                <Toolbar className={classes.searchBarColor}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <FaceIcon className={classes.block} color="inherit" />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        fullWidth
                        placeholder="Applicant name"
                        InputProps={{
                          disableUnderline: true,
                          className: classes.searchInput,
                        }}
                        value={item.newApplicantName}
                        onChange={(e) => handleApplicantNameChange(e, item.id)}
                      />
                    </Grid>
                    <Grid item>
                      <Button variant="contained" className={classes.addUser} onClick={() => handleAddApplicant(item.id)}>
                        Add Applicant
                      </Button>
                    </Grid>
                  </Grid>
                </Toolbar>
                <List>
                  {item.applicants.map(
                    (applicant) => (
                    <ListItem key={applicant.id}>
                      <ListItemText>{applicant.name}</ListItemText>
                      <IconButton aria-label="delete" onClick={() => handleRemoveApplicant(applicant.id, item.id)}>
                        <DeleteButton />
                      </IconButton>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions>
                <Button size="small" aria-label="delete" onClick={() => handleRemoveJob(item.id)}>REMOVE</Button>
                <Button size="small" aria-label="assign" onClick={() => hire(item.id)}>HIRE!</Button>
              </CardActions>
            </Card>
              )
            )}
          </List>
            )}
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
