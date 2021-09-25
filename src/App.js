import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';
import Lesson from './Lesson';
import CourseLesson from './CourseLesson';
import Header from './Header';
import { Container } from 'react-bootstrap';
import Body from './Body';
import Register from './Register';
import Login from './Login';

class App extends React.Component{
  render() {
    return(
      <BrowserRouter>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/lesson" component={Lesson} />
            <Route exact path="/courses/:courseId/lessons" component={CourseLesson} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Container>
      </BrowserRouter>  
    ) 
  }
}
export default App;
