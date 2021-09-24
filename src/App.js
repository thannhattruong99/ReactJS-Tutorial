import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React from 'react';
import Home from './Home';
import Lesson from './Lesson';
import CourseLesson from './CourseLesson';

class App extends React.Component{
  render() {
    return(
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/lesson">Lesson</Link>
          </li>
          <li>
            <Link to="/courses/10/lessons">Course lessons</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/lesson" component={Lesson} />
          <Route exact path="/courses/:courseId/lessons" component={CourseLesson} />
        </Switch>
      </BrowserRouter>  
    ) 
  }
}
export default App;
