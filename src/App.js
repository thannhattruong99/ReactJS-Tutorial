import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React, { useState } from 'react';
import Lesson from './Lesson';
import CourseLesson from './CourseLesson';
import Header from './Header';
import { Container } from 'react-bootstrap';
import Body from './Body';
import Register from './Register';
import Login from './Login';

export let UserContext = React.createContext()

export default function App (){
  // const [user, setUser] = useState(null)
  
  // const login = async (username, password) =>{
  //  let res = await API.post(endpoints['login'],{
  //     'username': username,
  //     'password': password
  //   })
      
  //   cookies.save("token", res.data.token)

  //   //'Authorization': `Bearer ${cookies.load('token')}`
  //   //khai báo ở đây để nạp lại token
  //   let user = await AuthAPI.get(endpoints['user-detail']+ username, {
  //       headers:{
  //           'Authorization': `Bearer ${cookies.load('token')}`
  //       }
  //   })

  //   console.info(user.data)
  //   cookies.save("user", user.data)

  //   dispatch.apply({
  //     "type": "login",
  //     "payload": user.data
  //   })

  //   setUser(user.data)
  // }

  return(
    // <UserContext.Provider value={{user, login}}>
      <BrowserRouter>
        <Container>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/lesson" component={Lesson} />
            <Route exact path="/courses/:courseId/lessons" component={CourseLesson} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Container>
      </BrowserRouter>  
    // </UserContext.Provider>
  ) 
}