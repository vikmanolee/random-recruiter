import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import DeleteButton from '@material-ui/icons/Delete';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FaceIcon from '@material-ui/icons/Face';

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

const sampleJob = {
  id: '1',
  name: 'An easy job',
  newApplicantName: '',
  applicants: [
    {
      id: '1',
      name: 'Foo',
      isHired: false
    },
    {
      id: '2',
      name: 'Bar',
      isHired: false
    }
  ]
};

const hired = <span> (Hired!)</span>;

function Content(props) {
  const { classes } = props;

  const [list, setList] = React.useState([sampleJob]);
  const [jobName, setJobName] = React.useState('');

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
        const newApplicant = {
          id: uuidv4(),
          name: item.newApplicantName,
          isHired: false
        };
        return {
          ...item,
          applicants: item.applicants.concat(newApplicant),
          newApplicantName: ''
        };
      }
      return item;
    });
    setList(newList);
  }

  function handleRemoveApplicant(id, jobId) {
    const newList = list.map((item) => {
      if (item.id === jobId) {
        return {
          ...item,
          applicants: item.applicants.filter((applicant) => applicant.id !== id),
        };
      }
      return item;
    });

    setList(newList);
  }

  function handleApplicantNameChange(event, jobId) {
    const newList = list.map((item) => {
      if (item.id === jobId) {
        return {
          ...item,
          newApplicantName: event.target.value
        };
      }
      return item;
    });
    setList(newList);
  }

  function hire(jobId) {
    const job = list.find(item => item.id === jobId);
    const jobApplicants = job.applicants.length;
    getLuckyNumber(jobApplicants)
      .then((luckyNumber) => {
        applyChosenOne(luckyNumber, jobId)
      });
  }

  function applyChosenOne(chosen, jobId) {
    console.log('job: ' + jobId + ' > ' + chosen);
    const newList = list.map((item) => {
      if (item.id === jobId) {
        const updatedApplicants = item.applicants.map((applicant, index) => {
          return {
            ...applicant,
            isHired: (index === chosen)
          };
        });
        return {
          ...item,
          applicants: updatedApplicants
        };
      }
      return item;
    });
    setList(newList);
  }

  function getLuckyNumber(applicantNumber) {
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
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <JobCards
          jobs={list}
          onApplicantNameChange={handleApplicantNameChange}
          onApplicantAdd={handleAddApplicant}
          onApplicantRemove={handleRemoveApplicant}
          onRemove={handleRemoveJob}
          onHiring={hire}
          classes={classes}
        />
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

function JobCards(props) {
  const { jobs, classes, onApplicantNameChange, onApplicantAdd, onApplicantRemove, onRemove, onHiring } = props

  if (!jobs.length) {
    return (
      <Typography color="textSecondary" align="center">
        No Jobs for this project yet
      </Typography>);
  }

  return (
    <List>
      {jobs.map(
        (job) => (
          <Card className={classes.jobCard} key={job.id}>
            <CardContent>
              <Typography variant='h5' color="textPrimary" gutterBottom>
                {job.name}
              </Typography>
              <AddApplicant value={job.newApplicantName} onChange={onApplicantNameChange} onAdd={onApplicantAdd} jobId={job.id} classes={classes} />
              <div className={classes.contentWrapper}>
                <ApplicantList applicants={job.applicants} jobId={job.id} onRemove={onApplicantRemove} />
              </div>
            </CardContent>
            <CardActions>
              <IconButton aria-label="delete" onClick={() => onRemove(job.id)}>
                <DeleteButton />
              </IconButton>
              <Button size="large" aria-label="assign" onClick={() => onHiring(job.id)}>HIRE!</Button>
            </CardActions>
          </Card>
        )
      )}
    </List>
  );
}

function ApplicantList({ applicants, jobId, onRemove }) {
  if (!applicants.length) {
    return (
      <Typography color="textSecondary" align="center">
        No Applicants for this project yet
      </Typography>
    )
  }

  return (
    <List>
      {applicants.map(
        (applicant) => (
          <ListItem key={applicant.id}>
            <ListItemText>{applicant.name}{applicant.isHired ? hired : null}</ListItemText>
            <IconButton aria-label="delete" onClick={() => onRemove(applicant.id, jobId)}>
              <DeleteButton />
            </IconButton>
          </ListItem>
        ))}
    </List>
  )
}

function AddApplicant({ value, onChange, onAdd, jobId, classes }) {
  return (
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
            value={value}
            onChange={(e) => onChange(e, jobId)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.addUser} onClick={() => onAdd(jobId)}>
            Add Applicant
        </Button>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default withStyles(styles)(Content);
