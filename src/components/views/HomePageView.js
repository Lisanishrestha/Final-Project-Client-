/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'; 


const useStyles = makeStyles(theme => ({
  rroot: {
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

const HomePageView = () => {
  // Render Home page view
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title} color="inherit" >
              Student Finder
            </Typography>
  
            <Link className={classes.links} to={'/campuses'} >
              <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
                All Campuses
              </Button>
            </Link>
  
            <Link className={classes.links} to={'/students'} >
              <Button variant="contained" color="primary">
                All Students
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        
        <div className={classes.greeting}><h1>Home Page</h1></div>
        <img src="https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/global/Brooklyn_College_Students_891x891.png" alt="college" className={classes.image}/>

      </div>
    );    
  }

export default HomePageView;
