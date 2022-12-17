/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles( () => ({
  image:{  
    width: '100px',
    height: '100px'
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Monospace', 
    fontSize: '35px', 
    color: 'darkblue'
  },
  appBar:{
    backgroundColor: '#fcb6bb',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#b0c4de',
    width: "50%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  }

}));
const AllCampusesView = (props) => {
  const {deleteCampus} = props;
  const classes = useStyles();
  // If there is no campus, display a message.
  if (!props.allCampuses.length) {
    return (
    <div className={classes.root}>
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="inherit" >
          Student Finder
        </Typography>

        <Link className={classes.links} to={'/'} >
          <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
            Home
          </Button>
        </Link>

        <Link className={classes.links} to={'/students'} >
          <Button variant="contained" color="primary">
            All Students
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
    
    <div className={classes.greeting}><h1>All Campuses</h1></div>
    <h3>There are no campuses.</h3>
  <Link to={`/newcampus`}>
    <button>Add New Campus</button>
  </Link>
  </div>
  )
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div className={classes.root}>
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="inherit" >
          StudentFinder
        </Typography>
        <Link className={classes.links} to={'/'} >
          <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
            Home
          </Button>
        </Link>
        <Link className={classes.links} to={'/students'} >
          <Button variant="contained" color="primary">
            All Students
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
    <div className={classes.greeting}><h1>All Campuses</h1></div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <img src={campus.imageUrl} alt="Campus" className={classes.image}/>
          <button onClick={() => deleteCampus(campus.id)}>X</button>
          <div>
          <h4>campus id: {campus.id}</h4>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <hr/>
        </div>
        </div>
      ))}
      <br/>
      <Link to={`/New Campus`}>
        <button>Add New Campus</button> 
      </Link>
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;