import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './component/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import ProtectedRoute from './component/routing/ProtectedRoute';


function App() {
  return (
    <AuthContextProvider>
       <Router>
      <Switch>
         <Route exact path='/' component={Landing}/>
         <Route exact path='/login' render={props => <Auth {...props} authRoute='login'/> }/>
         <Route exact path='/register' render={props => <Auth {...props} authRoute='register'/> }/>
         <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
     
      </Switch>
    </Router>
    </AuthContextProvider>
  )
}

export default App
