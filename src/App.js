import React from "react"
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './components/screens/HomeScreen'
import LoginScreen from './components/screens/LoginScreen';

import {BrowserRouter as Router,Redirect, Route,Switch} from 'react-router-dom'



import './_app.scss'

const Layout = ({children})=> {
  const [sidebar,toggleSidebar] = useState(false)

  const handleToggleSidebar =()=>toggleSidebar(value=> !value)
  return(
    <>
    <Header handleToggleSidebar={handleToggleSidebar}/>
    <div className="app_container border border-info">
      <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
      <Container fluid className="app_main">
        {children}
        </Container >
    </div>
    </>
  )
}


const App = () => {
 return(
   <Router>

     <Switch>



 
   
<Route path='/' exact>
<Layout>
<HomeScreen/>
</Layout>
</Route>


  <Route path='/auth'>
    <LoginScreen />
  </Route>

  <Route path='/search'>
<Layout>
<h1> Search Box</h1>
</Layout>
</Route>

<Route>
<Redirect to="/" />

</Route>
   
</Switch>
   </Router>
)
}
export default App;
